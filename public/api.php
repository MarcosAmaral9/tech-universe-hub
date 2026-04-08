<?php
/**
 * VICIO<CODE> API — Comments + Auth
 * MySQL via Hostinger phpMyAdmin.
 *
 * SETUP:
 * 1. Hostinger hPanel → Databases → MySQL Databases
 * 2. Crie o banco, usuário e atribua permissões
 * 3. Atualize as credenciais abaixo
 * 4. Execute o SQL ao final deste arquivo no phpMyAdmin
 */

// Suprime erros PHP para não quebrar o JSON output
ini_set('display_errors', '0');
error_reporting(0);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ========== CREDENCIAIS DO BANCO ==========
$DB_HOST = 'localhost';
$DB_NAME = 'u980153444_Viciocode';
$DB_USER = 'u980153444_viciocode';
$DB_PASS = 'b^0xFECWjX';
// ==========================================

// ========== CHAVES DE API (Painel Social + Google OAuth + B3) ==========
// Crie/edite o arquivo /public_html/.env.php na Hostinger com o conteúdo:
//   <?php
//   $GEMINI_KEY       = 'AIza...';  // aistudio.google.com — gratuito, sem cartão
//   $GOOGLE_CLIENT_ID = 'XXXXXXX.apps.googleusercontent.com';
//   $GOOGLE_SECRET    = 'GOCSPX-...';
//   $BRAPI_TOKEN      = 'p5M5UoDvZfs7dHccMxNxz6'; // brapi.dev dashboard
$GEMINI_KEY       = '';
$GOOGLE_CLIENT_ID = '';
$GOOGLE_SECRET    = '';
$BRAPI_TOKEN      = '';
$_env_file = __DIR__ . '/.env.php';
if (file_exists($_env_file)) {
    include $_env_file; // define $GEMINI_KEY, $GOOGLE_CLIENT_ID, $GOOGLE_SECRET, $BRAPI_TOKEN
}
// ======================================================================

// URL base do site (usada no redirect_uri do OAuth)
define('SITE_URL', 'https://viciocode.com');

// Diretório para avatars (relativo à raiz pública)
define('AVATAR_DIR', __DIR__ . '/avatars/');
define('AVATAR_URL', '/avatars/');

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';


// ─── Helper: fetch HTTP com curl (preferido) ou file_get_contents ─────────────
function httpGet(string $url, int $timeout = 10, array $extraHeaders = []): ?string {
    // Tenta curl primeiro (mais confiável no Hostinger)
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        $headers = array_merge(['Accept: application/json'], $extraHeaders);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => $timeout,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_USERAGENT      => 'Mozilla/5.0 (compatible; VicioCode/1.0)',
            CURLOPT_HTTPHEADER     => $headers,
        ]);
        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($result !== false && $httpCode >= 200 && $httpCode < 300) {
            return $result;
        }
    }
    // Fallback para file_get_contents
    if (ini_get('allow_url_fopen')) {
        $headerStr = "Accept: application/json\r\nUser-Agent: Mozilla/5.0 (compatible; VicioCode/1.0)\r\n";
        foreach ($extraHeaders as $h) { $headerStr .= $h . "\r\n"; }
        $ctx = stream_context_create(['http' => [
            'timeout'       => $timeout,
            'ignore_errors' => true,
            'header'        => $headerStr,
        ]]);
        $result = @file_get_contents($url, false, $ctx);
        return $result !== false ? $result : null;
    }
    return null;
}

// ─── Helper: diretório de cache (usa __DIR__ para maior compatibilidade) ───────
function cacheDir(): string {
    $dir = __DIR__ . '/cache';
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
    return is_writable($dir) ? $dir : sys_get_temp_dir();
}

// ─── Helpers: cache centralizado no banco MySQL ───────────────────────────────
// Lê do banco se o cache for válido (mesmo dia + dentro do TTL em minutos)
function dbCacheGet(PDO $pdo, string $widget, int $ttlMinutes): ?array {
    try {
        $stmt = $pdo->prepare(
            'SELECT data, fetched_at, fetch_date FROM widget_cache WHERE widget = :w LIMIT 1'
        );
        $stmt->execute([':w' => $widget]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) return null;

        $today      = date('Y-m-d');
        $fetchedTs  = strtotime($row['fetched_at']);
        $ageMin     = (time() - $fetchedTs) / 60;

        // Válido se: mesmo dia E dentro do TTL
        if ($row['fetch_date'] === $today && $ageMin < $ttlMinutes) {
            $decoded = json_decode($row['data'], true);
            if ($decoded && isset($decoded['_meta'])) {
                // Sobrescreve updatedAt e expiresAt com os valores reais do banco
                // Isso garante que TODOS os usuários vejam o mesmo timestamp e countdown
                $decoded['_meta']['updatedAt'] = date('c', $fetchedTs);
                $decoded['_meta']['expiresAt']  = date('c', $fetchedTs + $ttlMinutes * 60);
                $decoded['_meta']['from_cache'] = true;
            }
            return $decoded;
        }
        return null; // expirado
    } catch (Exception $e) {
        return null;
    }
}

// Salva no banco e incrementa o contador de requisições do dia
function dbCacheSave(PDO $pdo, string $widget, array $data): void {
    try {
        $today = date('Y-m-d');
        $json  = json_encode($data);
        $pdo->prepare(
            'INSERT INTO widget_cache (widget, data, fetch_date, req_count)
             VALUES (:w, :d, :date, 1)
             ON DUPLICATE KEY UPDATE
               data       = VALUES(data),
               fetched_at = NOW(),
               fetch_date = VALUES(fetch_date),
               req_count  = IF(fetch_date = VALUES(fetch_date), req_count + 1, 1)'
        )->execute([':w' => $widget, ':d' => $json, ':date' => $today]);
    } catch (Exception $e) {
        // falha silenciosa — continua sem cache de banco
    }
}

// ─── Helper: conexão ao banco lazy (reusada por proxies de widget) ───────────
$_pdoInstance = null;
function getPdo(): ?PDO {
    global $_pdoInstance, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS;
    if ($_pdoInstance) return $_pdoInstance;
    try {
        $_pdoInstance = new PDO(
            "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
            $DB_USER, $DB_PASS,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_TIMEOUT => 3]
        );
        return $_pdoInstance;
    } catch (Exception $e) {
        return null; // DB indisponível — usa cache de arquivo
    }
}

// ─── GET: diagnóstico — não precisa de banco ──────────────────────────────────
if ($method === 'GET' && $action === 'ping') {
    $cacheDir = __DIR__ . '/cache';
    @mkdir($cacheDir, 0755, true);

    // Cria tabela widget_cache se não existir (idempotente)
    try {
        $tmpPdo = new PDO(
            "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
            $DB_USER, $DB_PASS, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
        $tmpPdo->exec("CREATE TABLE IF NOT EXISTS widget_cache (
            widget      VARCHAR(20) PRIMARY KEY,
            data        LONGTEXT NOT NULL,
            fetched_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            fetch_date  DATE NOT NULL,
            req_count   INT DEFAULT 0
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");
        $tmpPdo->exec("CREATE TABLE IF NOT EXISTS price_history (
            id          INT AUTO_INCREMENT PRIMARY KEY,
            asset_type  VARCHAR(10) NOT NULL,
            asset_code  VARCHAR(20) NOT NULL,
            price       DECIMAL(20,6) NOT NULL,
            price_date  DATE NOT NULL,
            created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE KEY unique_asset_date (asset_type, asset_code, price_date),
            INDEX idx_type_code (asset_type, asset_code)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");
    } catch (Exception $e) {}

    // Testa conexão com banco
    $dbStatus = 'NÃO testado';
    try {
        $testPdo = new PDO(
            "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
            $DB_USER, $DB_PASS,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
        $testPdo->query('SELECT 1');
        $dbStatus = 'conectado ✓';
    } catch (PDOException $e) {
        $dbStatus = 'ERRO: ' . $e->getMessage();
    }

    // Testa tabelas existentes
    $tables = [];
    try {
        if (isset($testPdo)) {
            $rows = $testPdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
            $tables = $rows;
        }
    } catch (Exception $e) {}

    // Status do cache de widgets no banco
    $widgetCacheStatus = [];
    try {
        if (isset($testPdo)) {
            $rows = $testPdo->query(
                "SELECT widget, fetch_date, fetched_at, req_count, LENGTH(data) as data_bytes FROM widget_cache"
            )->fetchAll(PDO::FETCH_ASSOC);
            foreach ($rows as $row) {
                $widgetCacheStatus[$row['widget']] = [
                    'fetch_date'  => $row['fetch_date'],
                    'fetched_at'  => $row['fetched_at'],
                    'req_count'   => $row['req_count'],
                    'data_kb'     => round($row['data_bytes'] / 1024, 1),
                    'age_minutes' => round((time() - strtotime($row['fetched_at'])) / 60, 1),
                ];
            }
        }
    } catch (Exception $e) {
        $widgetCacheStatus = ['error' => $e->getMessage()];
    }

    // Testa alcançabilidade das APIs externas
    $apiReach = [];
    $testUrls = [
        'fawazahmed' => 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.min.json',
        'frankfurter'=> 'https://api.frankfurter.app/latest?from=BRL&to=USD',
        'coingecko'  => 'https://api.coingecko.com/api/v3/ping',
        'brapi'      => 'https://brapi.dev/api/quote/PETR4?fundamental=false',
    ];
    foreach ($testUrls as $name => $url) {
        if (function_exists('curl_init')) {
            $ch = curl_init($url);
            curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER=>true, CURLOPT_TIMEOUT=>5, CURLOPT_NOBODY=>false, CURLOPT_USERAGENT=>'VicioCode/1.0']);
            if ($name === 'brapi' && !empty($BRAPI_TOKEN)) {
                curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$BRAPI_TOKEN}"]);
            }
            $res  = curl_exec($ch);
            $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $err  = curl_error($ch);
            curl_close($ch);
            $apiReach[$name] = $err ? "ERRO: $err" : "HTTP $code";
        } else {
            $apiReach[$name] = 'curl indisponível';
        }
    }

    echo json_encode([
        'status'          => 'ok',
        'php'             => PHP_VERSION,
        'time'            => date('Y-m-d H:i:s'),
        'pdo_mysql'       => extension_loaded('pdo_mysql') ? 'disponível' : 'AUSENTE',
        'curl'            => function_exists('curl_init') ? 'disponível' : 'AUSENTE',
        'allow_url_fopen' => ini_get('allow_url_fopen') ? 'ativado' : 'desativado',
        'cache_dir'       => is_writable(cacheDir()) ? 'gravável' : 'SEM PERMISSÃO',
        'env_file'        => file_exists(__DIR__ . '/.env.php') ? 'encontrado' : 'NÃO encontrado',
        'google_key'      => !empty($GOOGLE_CLIENT_ID) ? 'configurado' : 'NÃO configurado',
        'gemini'          => !empty($GEMINI_KEY) ? 'configurado' : 'NÃO configurado',
        'brapi_token'     => !empty($BRAPI_TOKEN) ? 'configurado' : 'NÃO configurado',
        'database'        => $dbStatus,
        'tables'          => $tables,
        'widget_cache'    => $widgetCacheStatus,
        'api_reach'       => $apiReach,
    ]);
    exit;
}

// ─── POST: limpa cache de widgets (admin only) ───────────────────────────────
if ($method === 'POST' && $action === 'clear_widget_cache') {
    // Simple admin check via token in header
    $adminToken = getenv('ADMIN_TOKEN') ?: 'viciocode_clear_2026';
    $sentToken  = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? ($_POST['token'] ?? '');
    if ($sentToken !== $adminToken) {
        http_response_code(403);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }
    $widget = $_POST['widget'] ?? null; // null = clear all
    $cleared = [];
    if ($db = getPdo()) {
        if ($widget) {
            $db->prepare("DELETE FROM widget_cache WHERE widget = :w")->execute([':w' => $widget]);
            $cleared[] = $widget;
        } else {
            $db->exec("DELETE FROM widget_cache");
            $cleared = ['b3', 'rates', 'crypto'];
        }
    }
    // Also clear file caches
    foreach (['viciocode_b3_v2.json', 'viciocode_rates_v2.json', 'viciocode_crypto.json'] as $f) {
        $fp = cacheDir() . '/' . $f;
        if (file_exists($fp)) { @unlink($fp); $cleared[] = "$f deleted"; }
    }
    echo json_encode(['cleared' => $cleared, 'time' => date('c')]);
    exit;
}

// ─── GET: testa conectividade de cada widget em tempo real ───────────────────
if ($method === 'GET' && $action === 'test_widgets') {
    $results = [];

    // Test new rates sources
    // 1. fawazahmed via jsDelivr
    $rawFw = httpGet('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.min.json', 6);
    $dataFw = $rawFw ? json_decode($rawFw, true) : null;
    $brl = $dataFw['brl'] ?? [];
    $results['rates_fawazahmed'] = [
        'reached'    => $rawFw !== null,
        'usd_in_brl' => isset($brl['usd']) && $brl['usd'] > 0 ? round(1/$brl['usd'],4) : null,
        'xau_in_brl' => isset($brl['xau']) && $brl['xau'] > 0 ? round(1/$brl['xau'],2) : null,
        'xag_in_brl' => isset($brl['xag']) && $brl['xag'] > 0 ? round(1/$brl['xag'],4) : null,
        'ars_in_brl' => isset($brl['ars']) && $brl['ars'] > 0 ? round(1/$brl['ars'],6) : null,
    ];
    // 2. frankfurter (ECB)
    $rawFr = httpGet('https://api.frankfurter.app/latest?from=BRL&to=USD,EUR', 5);
    $dataFr = $rawFr ? json_decode($rawFr, true) : null;
    $results['rates_frankfurter'] = [
        'reached'    => $rawFr !== null,
        'usd_in_brl' => isset($dataFr['rates']['USD']) ? round(1/$dataFr['rates']['USD'],4) : null,
        'eur_in_brl' => isset($dataFr['rates']['EUR']) ? round(1/$dataFr['rates']['EUR'],4) : null,
    ];


    // Test crypto (CoinGecko)
    $raw = httpGet('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl', 8);
    if ($raw) {
        $data = json_decode($raw, true);
        $results['crypto'] = [
            'status'   => isset($data['bitcoin']) ? 'ok' : 'resposta inesperada',
            'btc_brl'  => $data['bitcoin']['brl'] ?? null,
            'raw'      => substr($raw, 0, 100),
        ];
    } else {
        $results['crypto'] = ['status' => 'FALHOU'];
    }

    // Test B3 (brapi.dev)
    $token = $BRAPI_TOKEN ?? '';
    $headers = $token ? ["Authorization: Bearer {$token}", 'Accept: application/json'] : ['Accept: application/json'];
    $raw = null;
    if (function_exists('curl_init')) {
        $ch = curl_init('https://brapi.dev/api/quote/PETR4?fundamental=false');
        curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 8, CURLOPT_HTTPHEADER => $headers, CURLOPT_SSL_VERIFYPEER => true]);
        $raw = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
    }
    if ($raw) {
        $data = json_decode($raw, true);
        $results['b3'] = [
            'status'     => !empty($data['results']) ? 'ok' : 'erro',
            'http_code'  => $httpCode ?? null,
            'has_token'  => !empty($token),
            'PETR4_price'=> $data['results'][0]['regularMarketPrice'] ?? null,
            'error_msg'  => $data['error'] ?? $data['message'] ?? null,
        ];
    } else {
        $results['b3'] = ['status' => 'FALHOU', 'has_token' => !empty($token)];
    }

    echo json_encode($results, JSON_PRETTY_PRINT);
    exit;
}


// ─── GET: proxy de câmbio + metais ──────────────────────────────────────────
// Fonte principal: fawazahmed0 via jsDelivr CDN (gratuito, sem token, inclui XAU/XAG)
// URL: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.min.json
// Retorna: {"date":"...","brl":{"usd":0.19,"eur":0.18,"xau":0.0000058,...}}
// Os valores são: 1 BRL = X da moeda alvo → invertemos para obter preço em BRL
// Fallback: exchangerate-api.com (sem token, suporta USD/EUR/ARS/PYG, sem metais)
if ($method === 'GET' && $action === 'rates') {
    $TTL_RATES  = 3; // 3 min — fawazahmed sem limite, frankfurter sem limite
    $CACHE_FILE = cacheDir() . '/viciocode_rates_v2.json';

    // Banco primeiro (cache compartilhado — 1 fetch serve todos os usuários)
    if ($db = getPdo()) {
        $cached = dbCacheGet($db, 'rates', $TTL_RATES);
        if ($cached) { $cached['_meta']['from_cache'] = true; echo json_encode($cached); exit; }
    }
    // Arquivo como fallback — valida que os dados são de hoje
    if (file_exists($CACHE_FILE) && (time() - filemtime($CACHE_FILE)) < $TTL_RATES * 60) {
        $fileRaw = file_get_contents($CACHE_FILE);
        if ($fileRaw) {
            $fileDec = json_decode($fileRaw, true);
            // Só serve se os dados forem de hoje (evita cache de dias anteriores)
            $fileDate = isset($fileDec['_meta']['updatedAt'])
                ? date('Y-m-d', strtotime($fileDec['_meta']['updatedAt']))
                : null;
            if ($fileDate === date('Y-m-d')) { echo $fileRaw; exit; }
        }
    }

    $result = [];
    $brl    = []; // inicializado aqui para ser acessível no bloco pctChange

    // ── Fonte principal: fawazahmed via jsDelivr CDN ─────────────────────────
    $raw = httpGet('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.min.json', 8);
    if ($raw) {
        $data = json_decode($raw, true);
        $brl  = $data['brl'] ?? [];

        // Helper: converte "1 BRL = X moeda" para "1 moeda = Y BRL"
        // e calcula pctChange aproximado via high/low (fawazahmed não fornece, usamos 0)
        $toRate = function($key) use ($brl): ?array {
            $rate = $brl[$key] ?? null;
            if (!$rate || $rate <= 0) return null;
            $bid = round(1 / $rate, 6);
            return ['bid' => (string)$bid, 'pctChange' => '0.00', 'high' => (string)$bid, 'low' => (string)$bid];
        };

        if ($r = $toRate('usd')) $result['USDBRL'] = $r;
        if ($r = $toRate('eur')) $result['EURBRL'] = $r;
        if ($r = $toRate('ars')) $result['ARSBRL'] = $r;
        if ($r = $toRate('pyg')) $result['PYGBRL'] = $r;
        if ($r = $toRate('xau')) $result['XAUBRL'] = $r; // 1 troy oz ouro em BRL
        if ($r = $toRate('xag')) $result['XAGBRL'] = $r; // 1 troy oz prata em BRL
    }

    // ── Fallback 1: open.er-api.com (gratuito, sem token) ────────────────────
    if (empty($result['USDBRL'])) {
        $raw2 = httpGet('https://open.er-api.com/v6/latest/BRL', 6);
        if ($raw2) {
            $data2 = json_decode($raw2, true);
            $rates2 = $data2['rates'] ?? [];
            $pairMap = ['USD'=>'USDBRL','EUR'=>'EURBRL','ARS'=>'ARSBRL','PYG'=>'PYGBRL'];
            foreach ($pairMap as $cur => $key) {
                $r = $rates2[$cur] ?? null;
                if ($r && $r > 0) {
                    $bid = round(1 / $r, 6);
                    $result[$key] = ['bid'=>(string)$bid,'pctChange'=>'0.00','high'=>(string)$bid,'low'=>(string)$bid];
                }
            }
        }
    }

    // ── Fallback 2: frankfurter.app (BCE, sem token) se ainda sem dados ───────
    if (empty($result['USDBRL'])) {
        $rawFr = httpGet('https://api.frankfurter.app/latest?from=BRL&to=USD,EUR', 5);
        if ($rawFr) {
            $dataFr = json_decode($rawFr, true);
            $ratesFr = $dataFr['rates'] ?? [];
            $mapFr = ['USD'=>'USDBRL','EUR'=>'EURBRL'];
            foreach ($mapFr as $cur => $key) {
                $r = $ratesFr[$cur] ?? null;
                if ($r && $r > 0) {
                    $bid = round(1 / $r, 6);
                    $result[$key] = ['bid'=>(string)$bid,'pctChange'=>'0.00','high'=>(string)$bid,'low'=>(string)$bid];
                }
            }
        }
    }

    // ── Calcula pctChange real (hoje vs ontem via fawazahmed histórico) ─────────
    $yesterday = date('Y-m-d', strtotime('-1 day'));
    $rawYest = httpGet("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{$yesterday}/v1/currencies/brl.min.json", 6);
    if ($rawYest) {
        $dataYest = json_decode($rawYest, true);
        $brlYest  = $dataYest['brl'] ?? [];
        $pairKeys = ['usd'=>'USDBRL','eur'=>'EURBRL','ars'=>'ARSBRL','pyg'=>'PYGBRL','xau'=>'XAUBRL','xag'=>'XAGBRL'];
        foreach ($pairKeys as $cur => $key) {
            if (!isset($result[$key]) || !isset($brl[$cur]) || !isset($brlYest[$cur])) continue;
            $today_brl = $brl[$cur] > 0 ? 1/$brl[$cur] : 0;
            $yest_brl  = $brlYest[$cur] > 0 ? 1/$brlYest[$cur] : 0;
            if ($yest_brl > 0) {
                $pct = round((($today_brl - $yest_brl) / $yest_brl) * 100, 2);
                $result[$key]['pctChange'] = (string)$pct;
                // high/low: sem dado intraday no fawazahmed, usamos ±0.3% como estimativa
                $spread = $today_brl * 0.003;
                $result[$key]['high'] = (string)round($today_brl + $spread, 6);
                $result[$key]['low']  = (string)round($today_brl - $spread, 6);
            }
        }
    }

    // ── Atualiza USD/EUR com taxa ECB via frankfurter (mais precisa) ──────────
    $rawFr = httpGet('https://api.frankfurter.app/latest?from=BRL&to=USD,EUR', 5);
    if ($rawFr) {
        $dataFr = json_decode($rawFr, true);
        foreach (['USD'=>'USDBRL','EUR'=>'EURBRL'] as $cur => $key) {
            $rate = $dataFr['rates'][$cur] ?? null;
            if ($rate && $rate > 0 && !empty($result[$key])) {
                $bid = round(1 / $rate, 4);
                $prev = (float)$result[$key]['bid'];
                if ($prev > 0) {
                    $pct = round((($bid - $prev) / $prev) * 100, 2);
                    // Se frankfurter diverge muito, recalcula pctChange
                    if (abs($pct) < 5) { // sanity check
                        $result[$key]['bid'] = (string)$bid;
                    }
                }
            }
        }
    }

    if (empty($result)) {
        http_response_code(503);
        echo json_encode(['error' => 'Dados de câmbio indisponíveis temporariamente']);
        exit;
    }

    $fetchedAt = date('c');
    $result['_meta'] = ['source' => 'fawazahmed+frankfurter', 'fallback' => false, 'from_cache' => false, 'updatedAt' => $fetchedAt, 'expiresAt' => date('c', time() + $TTL_RATES * 60)];
    // Salva no banco e no arquivo
    if ($db = getPdo()) {
        dbCacheSave($db, 'rates', $result);
        // Salva snapshot histórico de câmbio e metais
        $histCurrency = [];
        foreach (['USDBRL'=>'USD','EURBRL'=>'EUR','ARSBRL'=>'ARS','PYGBRL'=>'PYG'] as $k=>$c) {
            if (isset($result[$k]['bid'])) $histCurrency[$c] = (float)$result[$k]['bid'];
        }
        if (!empty($histCurrency)) saveHistorySnapshots($db, 'currency', $histCurrency);
        $histMetal = [];
        $TROY = 31.1035;
        if (isset($result['XAUBRL']['bid'])) $histMetal['XAU'] = (float)$result['XAUBRL']['bid'] / $TROY * 0.75; // 18k per gram
        if (isset($result['XAGBRL']['bid'])) $histMetal['XAG'] = (float)$result['XAGBRL']['bid'] / $TROY * 0.925; // 925 per gram
        if (!empty($histMetal)) saveHistorySnapshots($db, 'metal', $histMetal);
    }
    @file_put_contents($CACHE_FILE, json_encode($result));
    echo json_encode($result);
    exit;
}


// ─── GET: proxy criptomoedas — CoinGecko ─────────────────────────────────────
if ($method === 'GET' && $action === 'crypto') {
    $TTL_CRYPTO = 5; // 5 min → 8.640 req/mês = 86% do limite CoinGecko (10.000)
    $CACHE_FILE = cacheDir() . '/viciocode_crypto.json';

    // Banco primeiro (cache compartilhado)
    if ($db = getPdo()) {
        $cached = dbCacheGet($db, 'crypto', $TTL_CRYPTO);
        if ($cached) { $cached['_meta']['from_cache'] = true; echo json_encode($cached); exit; }
    }
    // Arquivo como fallback — valida que os dados são de hoje
    if (file_exists($CACHE_FILE) && (time() - filemtime($CACHE_FILE)) < $TTL_CRYPTO * 60) {
        $fileRaw = file_get_contents($CACHE_FILE);
        if ($fileRaw) {
            $fileDec = json_decode($fileRaw, true);
            $fileDate = isset($fileDec['_meta']['updatedAt'])
                ? date('Y-m-d', strtotime($fileDec['_meta']['updatedAt']))
                : null;
            if ($fileDate === date('Y-m-d') && !empty($fileDec['coins'])) {
                echo $fileRaw; exit;
            }
        }
    }

    // Primary: CoinGecko public API
    $raw  = httpGet('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=8&page=1&sparkline=false');
    // Fallback: CoinGecko via alternate domain
    if (!$raw) {
        $raw = httpGet('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,cardano,ripple,chainlink,polkadot&vs_currencies=brl&include_market_cap=true&include_24hr_change=true', 8);
    }
    $data = $raw ? json_decode($raw, true) : null;

    if (is_array($data) && count($data) > 0) {
        $result = ['coins' => $data, '_meta' => ['source' => 'coingecko-live', 'from_cache' => false, 'updatedAt' => date('c'), 'expiresAt' => date('c', time() + $TTL_CRYPTO * 60)]];
        $json   = json_encode($result);
        @file_put_contents($CACHE_FILE, $json);
        echo $json;
        exit;
    }

    http_response_code(503);
    echo json_encode(['error' => 'Dados de cripto indisponíveis', 'curl' => function_exists('curl_init'), 'allow_url_fopen' => (bool)ini_get('allow_url_fopen')]);
    exit;
}

// ─── GET: proxy B3 / brapi.dev ────────────────────────────────────────────────
// Cache centralizado no MySQL — 1 requisição serve todos os usuários
// TTL: 15 min (B3 atualiza a cada 15min no plano free com token)
// Limite free: 15.000 req/mês → com TTL 15min = máx 48 req/dia = ~1.440/mês — usa <10%
if ($method === 'GET' && $action === 'b3') {
    $TTL_MINUTES = 4; // 4 min → 10.800 req/mês = 72% do limite brapi.dev (15.000)

    // 1. Tenta banco primeiro (cache compartilhado entre todos os usuários)
    if ($db = getPdo()) {
        $cached = dbCacheGet($db, 'b3', $TTL_MINUTES);
        if ($cached) {
            $cached['_meta']['from_cache'] = true;
            echo json_encode($cached);
            exit;
        }
    }

    // 2. Cache de arquivo como fallback se DB não disponível
    $CACHE_FILE = cacheDir() . '/viciocode_b3_v2.json';
    if (file_exists($CACHE_FILE) && (time() - filemtime($CACHE_FILE)) < $TTL_MINUTES * 60) {
        $fileData = file_get_contents($CACHE_FILE);
        if ($fileData) {
            $decoded = json_decode($fileData, true);
            // Só serve se tiver dados reais E forem de hoje
            $fileDate = isset($decoded['_meta']['updatedAt'])
                ? date('Y-m-d', strtotime($decoded['_meta']['updatedAt']))
                : null;
            if (!empty($decoded['results']) && $fileDate === date('Y-m-d')) {
                echo $fileData; exit;
            }
        }
    }

    // 3. Busca dados frescos na brapi.dev
    $tickers = $BRAPI_TOKEN
        ? 'PETR4,VALE3,ITUB4,BBDC4,ABEV3,WEGE3,BBAS3,RENT3,MGLU3,SUZB3'
        : 'PETR4,VALE3,ITUB4,BBDC4,ABEV3,WEGE3,BBAS3,MGLU3';

    $url     = "https://brapi.dev/api/quote/{$tickers}?fundamental=false";
    $headers = $BRAPI_TOKEN
        ? ["Authorization: Bearer {$BRAPI_TOKEN}", 'Accept: application/json']
        : ['Accept: application/json'];

    $raw = null;
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 10,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_USERAGENT      => 'VicioCode/1.0',
            CURLOPT_HTTPHEADER     => $headers,
        ]);
        $raw = curl_exec($ch);
        curl_close($ch);
    } elseif (ini_get('allow_url_fopen')) {
        $ctx = stream_context_create(['http' => [
            'timeout'       => 10,
            'ignore_errors' => true,
            'header'        => implode("\r\n", $headers) . "\r\n",
        ]]);
        $raw = @file_get_contents($url, false, $ctx);
    }

    $data = $raw ? json_decode($raw, true) : null;

    if (!empty($data['results']) && count($data['results']) > 0) {
        $result = [
            'results' => $data['results'],
            '_meta'   => [
                'source'     => 'brapi-live',
                'withToken'  => !empty($BRAPI_TOKEN),
                'from_cache' => false,
                'updatedAt'  => date('c'),
                'expiresAt'  => date('c', time() + $TTL_MINUTES * 60),
            ],
        ];
        // Salva no banco (compartilhado) e no arquivo (fallback)
        if ($db = getPdo()) dbCacheSave($db, 'b3', $result);
        @file_put_contents($CACHE_FILE, json_encode($result));
        echo json_encode($result);
        exit;
    }

    // ── Fallback: Yahoo Finance (sem token, gratuito) ───────────────────────
    if (empty($data['results'])) {
        $yfTickers = ['PETR4.SA','VALE3.SA','ITUB4.SA','BBDC4.SA','ABEV3.SA','WEGE3.SA','BBAS3.SA','MGLU3.SA'];
        $yfResults = [];
        foreach (array_slice($yfTickers, 0, 8) as $ticker) {
            $yfUrl = "https://query1.finance.yahoo.com/v8/finance/chart/{$ticker}?interval=1d&range=1d";
            $yfRaw = httpGet($yfUrl, 6, ["User-Agent: Mozilla/5.0 (compatible; VicioCode/1.0)"]);
            if ($yfRaw) {
                $yfData = json_decode($yfRaw, true);
                $meta   = $yfData['chart']['result'][0]['meta'] ?? null;
                if ($meta && isset($meta['regularMarketPrice'])) {
                    $prev  = $meta['chartPreviousClose'] ?? $meta['previousClose'] ?? $meta['regularMarketPrice'];
                    $price = $meta['regularMarketPrice'];
                    $pct   = $prev > 0 ? round((($price - $prev) / $prev) * 100, 2) : 0;
                    $symbol = str_replace('.SA', '', $ticker);
                    $yfResults[] = [
                        'symbol'                    => $symbol,
                        'shortName'                 => $meta['shortName'] ?? $symbol,
                        'regularMarketPrice'        => $price,
                        'regularMarketChangePercent'=> $pct,
                    ];
                }
            }
        }
        if (!empty($yfResults)) {
            $result = [
                'results' => $yfResults,
                '_meta'   => [
                    'source'     => 'yahoo-finance',
                    'withToken'  => false,
                    'from_cache' => false,
                    'updatedAt'  => date('c'),
                    'expiresAt'  => date('c', time() + $TTL_MINUTES * 60),
                ],
            ];
            if ($db = getPdo()) dbCacheSave($db, 'b3', $result);
            @file_put_contents($CACHE_FILE, json_encode($result));
            echo json_encode($result);
            exit;
        }
    }

    // Serve cache de arquivo antigo se tiver dados válidos (melhor do que fallback)
    if (file_exists($CACHE_FILE)) {
        $old = file_get_contents($CACHE_FILE);
        if ($old) {
            $oldDecoded = json_decode($old, true);
            if (!empty($oldDecoded['results'])) { echo $old; exit; }
        }
    }

    http_response_code(503);
    echo json_encode([
        'error'       => 'Dados B3 indisponíveis',
        'hasToken'    => !empty($BRAPI_TOKEN),
        'raw_preview' => $raw ? substr($raw, 0, 300) : null,
        'curl_ok'     => function_exists('curl_init'),
    ]);
    exit;
}


// ─── Helper: salva snapshot de preços no histórico ──────────────────────────
function saveHistorySnapshots(PDO $pdo, string $assetType, array $assets): void {
    $today = date('Y-m-d');
    $stmt = $pdo->prepare(
        'INSERT INTO price_history (asset_type, asset_code, price, price_date)
         VALUES (:type, :code, :price, :date)
         ON DUPLICATE KEY UPDATE price = VALUES(price)'
    );
    foreach ($assets as $code => $price) {
        if ($price > 0) {
            $stmt->execute([':type' => $assetType, ':code' => $code, ':price' => $price, ':date' => $today]);
        }
    }
}

// ─── GET: histórico de preços armazenados ──────────────────────────────────
if ($method === 'GET' && $action === 'history') {
    $type = $_GET['type'] ?? '';
    $code = $_GET['code'] ?? '';
    $days = min(max((int)($_GET['days'] ?? 90), 1), 400);

    if (!in_array($type, ['b3', 'crypto', 'currency', 'metal'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Tipo inválido. Use: b3, crypto, currency, metal']);
        exit;
    }
    if (!preg_match('/^[A-Za-z0-9]{2,20}$/', $code)) {
        http_response_code(400);
        echo json_encode(['error' => 'Código inválido']);
        exit;
    }

    $db = getPdo();
    if (!$db) {
        http_response_code(503);
        echo json_encode(['error' => 'Banco indisponível']);
        exit;
    }

    $stmt = $db->prepare(
        'SELECT price_date, price FROM price_history
         WHERE asset_type = :type AND asset_code = :code AND price_date >= DATE_SUB(CURDATE(), INTERVAL :days DAY)
         ORDER BY price_date ASC'
    );
    $stmt->execute([':type' => $type, ':code' => strtoupper($code), ':days' => $days]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'type' => $type,
        'code' => strtoupper($code),
        'days' => $days,
        'points' => array_map(fn($r) => ['date' => $r['price_date'], 'price' => (float)$r['price']], $rows),
        'count' => count($rows),
    ]);
    exit;
}

// ─── GET: todos os ativos com histórico disponível ──────────────────────────
if ($method === 'GET' && $action === 'history_assets') {
    $db = getPdo();
    if (!$db) {
        http_response_code(503);
        echo json_encode(['error' => 'Banco indisponível']);
        exit;
    }

    $stmt = $db->query(
        'SELECT asset_type, asset_code, COUNT(*) as points, MIN(price_date) as first_date, MAX(price_date) as last_date
         FROM price_history GROUP BY asset_type, asset_code ORDER BY asset_type, asset_code'
    );
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['assets' => $rows]);
    exit;
}

// ─── GET: testa conexão com Gemini ───────────────────────────────────────────
if ($method === 'GET' && $action === 'test_gemini') {
    if (!$GEMINI_KEY) {
        echo json_encode(['error' => 'GEMINI_KEY não configurada']);
        exit;
    }

    $payload = json_encode([
        'contents' => [['parts' => [['text' => 'Responda apenas com o JSON: {"ok":true,"msg":"funcionando"}']]]],
        'generationConfig' => ['maxOutputTokens' => 50, 'responseMimeType' => 'application/json'],
    ]);

    $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={$GEMINI_KEY}";
    $raw = null; $curlErr = '';

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true, CURLOPT_POSTFIELDS => $payload,
            CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 15,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        ]);
        $raw = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlErr = curl_error($ch);
        curl_close($ch);
    }

    $resp = $raw ? json_decode($raw, true) : null;
    echo json_encode([
        'key_set'     => !empty($GEMINI_KEY),
        'http_code'   => $httpCode ?? null,
        'curl_error'  => $curlErr ?: null,
        'api_error'   => $resp['error'] ?? null,
        'text'        => $resp['candidates'][0]['content']['parts'][0]['text'] ?? null,
        'raw_preview' => $raw ? substr($raw, 0, 300) : null,
    ]);
    exit;
}

if ($method === 'POST' && $action === 'generate_social') {

    if (!$GEMINI_KEY) {
        http_response_code(503);
        echo json_encode(['error' => 'Chave do Gemini não configurada. Adicione $GEMINI_KEY no .env.php.']);
        exit;
    }

    $body     = json_decode(file_get_contents('php://input'), true);
    $title    = trim($body['title']    ?? '');
    $excerpt  = trim($body['excerpt']  ?? '');
    $category = trim($body['category'] ?? '');
    $platform = trim($body['platform'] ?? 'both'); // 'instagram', 'tiktok' ou 'both'

    if (!$title || !$excerpt) {
        http_response_code(400);
        echo json_encode(['error' => 'title e excerpt são obrigatórios']);
        exit;
    }

    // Gera IG + TikTok em UMA única chamada para economizar quota
    if ($platform === 'both') {
        $prompt = "Você é especialista em marketing digital brasileiro. Escreva tudo em português do Brasil.\n\n"
                . "Artigo: \"{$title}\" (categoria: {$category})\n"
                . "Resumo: {$excerpt}\n\n"
                . "Gere conteúdo para DUAS plataformas em um único JSON:\n\n"
                . "INSTAGRAM: legenda 150-300 chars, tom inspirador, emojis moderados, até 15 hashtags, formato 1:1 ou 4:5\n"
                . "TIKTOK: legenda 80-150 chars, tom jovem e direto, emojis expressivos, até 10 hashtags, formato 9:16\n\n"
                . "Campos obrigatórios para CADA plataforma:\n"
                . "- hookLine: gancho impactante (máx 120 chars)\n"
                . "- caption: legenda seguindo regras da plataforma\n"
                . "- cta: chamada para ação direta\n"
                . "- hashtags: array das melhores hashtags\n"
                . "- musicSuggestion: 1 música popular adequada, formato \"Artista - Título (gênero)\"\n"
                . "- imagePrompt: prompt detalhado em INGLÊS para IA de imagem (Midjourney/DALL-E/Flux), mín 50 palavras, sem texto na imagem\n\n"
                . "RETORNE APENAS O JSON SEM MARKDOWN:\n"
                . "{\"instagram\":{\"hookLine\":\"...\",\"caption\":\"...\",\"cta\":\"...\",\"hashtags\":[],\"musicSuggestion\":\"...\",\"imagePrompt\":\"...\"},"
                . "\"tiktok\":{\"hookLine\":\"...\",\"caption\":\"...\",\"cta\":\"...\",\"hashtags\":[],\"musicSuggestion\":\"...\",\"imagePrompt\":\"...\"}}";
    } else {
        // Chamada individual (compatibilidade)
        $platformRules = $platform === 'instagram'
            ? "Instagram: legenda 150-300 chars, tom inspirador e visual, emojis moderados, até 15 hashtags, formato quadrado 1:1."
            : "TikTok: legenda 80-150 chars, tom jovem e direto, emojis expressivos, até 10 hashtags, formato vertical 9:16.";

        $prompt = "Você é especialista em marketing digital brasileiro. Escreva em português do Brasil.\n\n"
                . "Plataforma: {$platform}\n"
                . "Artigo: \"{$title}\" (categoria: {$category})\n"
                . "Resumo: {$excerpt}\n"
                . "Regras: {$platformRules}\n\n"
                . "RETORNE APENAS O JSON SEM MARKDOWN:\n"
                . "{\"hookLine\":\"...\",\"caption\":\"...\",\"cta\":\"...\",\"hashtags\":[],\"musicSuggestion\":\"Artista - Título (gênero)\",\"imagePrompt\":\"prompt em inglês mín 50 palavras\"}";
    }

    $payload = json_encode([
        'contents'         => [['parts' => [['text' => $prompt]]]],
        'generationConfig' => [
            'maxOutputTokens'  => 2500,
            'temperature'      => 0.8,
            'responseMimeType' => 'application/json',
        ],
    ]);

    $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={$GEMINI_KEY}";
    $raw = null;

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 45,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        ]);
        $raw = curl_exec($ch);
        $curlError = curl_error($ch);
        curl_close($ch);
    } elseif (ini_get('allow_url_fopen')) {
        $ctx = stream_context_create(['http' => [
            'method'  => 'POST',
            'header'  => "Content-Type: application/json\r\n",
            'content' => $payload,
            'timeout' => 45,
            'ignore_errors' => true,
        ]]);
        $raw = @file_get_contents($url, false, $ctx);
    }

    if (!$raw) {
        http_response_code(503);
        echo json_encode([
            'error'      => 'Falha ao conectar com o Gemini.',
            'detail'     => $curlError ?? '',
            'curl_avail' => function_exists('curl_init'),
            'fopen_avail'=> (bool)ini_get('allow_url_fopen'),
        ]);
        exit;
    }

    $resp = json_decode($raw, true);

    if (!empty($resp['error'])) {
        $errMsg    = $resp['error']['message'] ?? 'Erro na API Gemini';
        $errStatus = $resp['error']['status']  ?? '';
        if ($errStatus === 'RESOURCE_EXHAUSTED' || str_contains($errMsg, 'quota') || str_contains($errMsg, 'Quota')) {
            preg_match('/retry in ([\d.]+)s/i', $errMsg, $m);
            $waitSec = isset($m[1]) ? (int)ceil((float)$m[1]) : 60;
            http_response_code(429);
            echo json_encode(['error' => "Limite de quota atingido. Aguarde {$waitSec}s.", 'retryIn' => $waitSec]);
            exit;
        }
        http_response_code(502);
        echo json_encode(['error' => $errMsg, 'status' => $errStatus, 'raw_preview' => substr($raw, 0, 300)]);
        exit;
    }

    if (empty($resp['candidates'])) {
        $blockReason = $resp['promptFeedback']['blockReason'] ?? 'desconhecido';
        http_response_code(502);
        echo json_encode(['error' => "Gemini bloqueou a resposta. Motivo: {$blockReason}", 'raw_preview' => substr($raw, 0, 300)]);
        exit;
    }

    $text = $resp['candidates'][0]['content']['parts'][0]['text'] ?? '';
    $text = preg_replace('/^```(?:json)?\s*/m', '', $text);
    $text = preg_replace('/\s*```\s*$/m', '', $text);
    $text = trim($text);
    if (!str_starts_with($text, '{')) {
        preg_match('/{.*}/s', $text, $matches);
        $text = $matches[0] ?? $text;
    }

    $parsed = json_decode($text, true);
    if (!$parsed) {
        http_response_code(502);
        echo json_encode(['error' => 'O Gemini não retornou JSON válido. Tente novamente.', 'raw' => substr($text, 0, 200)]);
        exit;
    }

    echo json_encode($parsed);
    exit;
}



// Para os demais endpoints, conecta ao banco (lazy)
try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Falha na conexão com o banco de dados. Verifique DB_NAME, DB_USER e DB_PASS no api.php.']);
    exit;
}

// ─── GET: buscar comentários ─────────────────────────────────────────────────
if ($method === 'GET' && $action === 'comments') {
    $postId = $_GET['post_id'] ?? '';
    if (!$postId) { http_response_code(400); echo json_encode(['error' => 'post_id obrigatório']); exit; }
    $limit = isset($_GET['limit']) ? intval($_GET['limit']) : 100;
    $stmt = $pdo->prepare('SELECT * FROM comments WHERE post_id = :post_id ORDER BY created_at DESC LIMIT :lim');
    $stmt->bindValue(':post_id', $postId, PDO::PARAM_STR);
    $stmt->bindValue(':lim', $limit, PDO::PARAM_INT);
    $stmt->execute();
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

// ─── POST: criar comentário ──────────────────────────────────────────────────
if ($method === 'POST' && $action === 'comments') {
    $body = json_decode(file_get_contents('php://input'), true);
    $postId     = $body['post_id']     ?? '';
    $userId     = $body['user_id']     ?? '';
    $authorName = $body['author_name'] ?? '';
    $content    = $body['content']     ?? '';

    if (!$postId || !$userId || !$authorName || !$content) {
        http_response_code(400); echo json_encode(['error' => 'Campos obrigatórios faltando']); exit;
    }

    $content    = htmlspecialchars(strip_tags(trim($content)), ENT_QUOTES, 'UTF-8');
    $authorName = htmlspecialchars(strip_tags(trim($authorName)), ENT_QUOTES, 'UTF-8');

    if (strlen($content) > 1000) { http_response_code(400); echo json_encode(['error' => 'Comentário muito longo']); exit; }
    if (strlen($authorName) < 2) { http_response_code(400); echo json_encode(['error' => 'Nome muito curto']); exit; }

    $id = bin2hex(random_bytes(16));
    $stmt = $pdo->prepare('INSERT INTO comments (id, post_id, user_id, author_name, content) VALUES (:id, :post_id, :user_id, :author_name, :content)');
    $stmt->execute([':id' => $id, ':post_id' => $postId, ':user_id' => $userId, ':author_name' => $authorName, ':content' => $content]);
    echo json_encode(['id' => $id, 'success' => true]);
    exit;
}

// ─── DELETE: excluir comentário ──────────────────────────────────────────────
if ($method === 'DELETE' && $action === 'comments') {
    $id     = $_GET['id']      ?? '';
    $userId = $_GET['user_id'] ?? '';
    if (!$id || !$userId) { http_response_code(400); echo json_encode(['error' => 'id e user_id obrigatórios']); exit; }
    $stmt = $pdo->prepare('DELETE FROM comments WHERE id = :id AND user_id = :user_id');
    $stmt->execute([':id' => $id, ':user_id' => $userId]);
    echo json_encode(['success' => $stmt->rowCount() > 0]);
    exit;
}

// ─── POST: registro de usuário ───────────────────────────────────────────────
if ($method === 'POST' && $action === 'register') {
    $body     = json_decode(file_get_contents('php://input'), true);
    $name     = trim($body['name']     ?? '');
    $nickname = trim($body['nickname'] ?? '');
    $email    = trim($body['email']    ?? '');
    $password = $body['password']      ?? '';

    if (!$name || !$nickname || !$email || !$password) {
        http_response_code(400); echo json_encode(['error' => 'Todos os campos são obrigatórios']); exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); echo json_encode(['error' => 'Email inválido']); exit;
    }
    if (strlen($password) < 6) {
        http_response_code(400); echo json_encode(['error' => 'Senha deve ter pelo menos 6 caracteres']); exit;
    }

    // Checar email duplicado
    $check = $pdo->prepare('SELECT id FROM users WHERE email = :email');
    $check->execute([':email' => $email]);
    if ($check->fetch()) {
        http_response_code(409); echo json_encode(['error' => 'Email já cadastrado']); exit;
    }

    $id           = bin2hex(random_bytes(16));
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);

    $pdo->prepare('INSERT INTO users (id, email, password_hash) VALUES (:id, :email, :hash)')
        ->execute([':id' => $id, ':email' => $email, ':hash' => $passwordHash]);

    $pdo->prepare('INSERT INTO profiles (id, name, nickname) VALUES (:id, :name, :nickname)')
        ->execute([':id' => $id, ':name' => $name, ':nickname' => $nickname]);

    $profile = ['id' => $id, 'name' => $name, 'nickname' => $nickname, 'avatar_url' => null, 'notifications_site' => false, 'notifications_app' => false, 'created_at' => date('Y-m-d H:i:s')];
    echo json_encode(['user' => ['id' => $id, 'email' => $email], 'profile' => $profile]);
    exit;
}

// ─── POST: login ─────────────────────────────────────────────────────────────
if ($method === 'POST' && $action === 'login') {
    $body     = json_decode(file_get_contents('php://input'), true);
    $email    = trim($body['email']    ?? '');
    $password = $body['password']      ?? '';

    if (!$email || !$password) {
        http_response_code(400); echo json_encode(['error' => 'Email e senha obrigatórios']); exit;
    }

    $stmt = $pdo->prepare('SELECT id, email, password_hash FROM users WHERE email = :email');
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        http_response_code(401); echo json_encode(['error' => 'Email ou senha incorretos']); exit;
    }
    // Conta criada via Google (sem senha) — orientar a usar o Google
    if (empty($user['password_hash'])) {
        http_response_code(401); echo json_encode(['error' => 'Esta conta foi criada com o Google. Use o botão "Continuar com Google" para entrar.']); exit;
    }
    if (!password_verify($password, $user['password_hash'])) {
        http_response_code(401); echo json_encode(['error' => 'Email ou senha incorretos']); exit;
    }

    $profileStmt = $pdo->prepare('SELECT * FROM profiles WHERE id = :id');
    $profileStmt->execute([':id' => $user['id']]);
    $profile = $profileStmt->fetch(PDO::FETCH_ASSOC);

    if (!$profile) {
        $profile = ['id' => $user['id'], 'name' => '', 'nickname' => '', 'avatar_url' => null, 'notifications_site' => false, 'notifications_app' => false];
    }
    $profile['notifications_site'] = (bool)$profile['notifications_site'];
    $profile['notifications_app']  = (bool)$profile['notifications_app'];

    echo json_encode(['user' => ['id' => $user['id'], 'email' => $user['email']], 'profile' => $profile]);
    exit;
}

// ─── GET: buscar perfil público ───────────────────────────────────────────────
if ($method === 'GET' && $action === 'profile') {
    $userId = $_GET['user_id'] ?? '';
    if (!$userId) { http_response_code(400); echo json_encode(['error' => 'user_id obrigatório']); exit; }

    $stmt = $pdo->prepare('SELECT p.*, u.email, u.created_at as user_created_at FROM profiles p JOIN users u ON p.id = u.id WHERE p.id = :id');
    $stmt->execute([':id' => $userId]);
    $profile = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$profile) { http_response_code(404); echo json_encode(['error' => 'Perfil não encontrado']); exit; }

    $profile['notifications_site'] = (bool)$profile['notifications_site'];
    $profile['notifications_app']  = (bool)$profile['notifications_app'];
    $profile['created_at'] = $profile['user_created_at'] ?? $profile['created_at'];
    unset($profile['user_created_at'], $profile['email']);

    echo json_encode($profile);
    exit;
}

// ─── PUT: atualizar perfil ────────────────────────────────────────────────────
if ($method === 'PUT' && $action === 'profile') {
    $body   = json_decode(file_get_contents('php://input'), true);
    $userId = $body['user_id'] ?? '';
    if (!$userId) { http_response_code(400); echo json_encode(['error' => 'user_id obrigatório']); exit; }

    $allowed = ['name', 'nickname', 'notifications_site', 'notifications_app'];
    $sets    = [];
    $params  = [':id' => $userId];

    foreach ($allowed as $field) {
        if (isset($body[$field])) {
            $sets[]          = "$field = :$field";
            $params[":$field"] = $body[$field];
        }
    }

    if (empty($sets)) { http_response_code(400); echo json_encode(['error' => 'Nenhum campo para atualizar']); exit; }

    $pdo->prepare('UPDATE profiles SET ' . implode(', ', $sets) . ' WHERE id = :id')->execute($params);
    echo json_encode(['success' => true]);
    exit;
}

// ─── POST: upload de avatar ───────────────────────────────────────────────────
if ($method === 'POST' && $action === 'upload_avatar') {
    $userId = $_POST['user_id'] ?? '';
    if (!$userId) { http_response_code(400); echo json_encode(['error' => 'user_id obrigatório']); exit; }

    if (!isset($_FILES['avatar']) || $_FILES['avatar']['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400); echo json_encode(['error' => 'Arquivo inválido']); exit;
    }

    $file     = $_FILES['avatar'];
    $allowed  = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    $finfo    = new finfo(FILEINFO_MIME_TYPE);
    $mimeType = $finfo->file($file['tmp_name']);

    if (!in_array($mimeType, $allowed)) {
        http_response_code(400); echo json_encode(['error' => 'Tipo de arquivo não permitido']); exit;
    }
    if ($file['size'] > 2 * 1024 * 1024) {
        http_response_code(400); echo json_encode(['error' => 'Imagem deve ter no máximo 2MB']); exit;
    }

    if (!is_dir(AVATAR_DIR)) mkdir(AVATAR_DIR, 0755, true);

    $ext      = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp', 'image/gif' => 'gif'][$mimeType];
    $filename = $userId . '.' . $ext;
    $dest     = AVATAR_DIR . $filename;

    // Remove old avatars for this user (any extension)
    foreach (glob(AVATAR_DIR . $userId . '.*') as $old) { unlink($old); }

    if (!move_uploaded_file($file['tmp_name'], $dest)) {
        http_response_code(500); echo json_encode(['error' => 'Falha ao salvar imagem']); exit;
    }

    $avatarUrl = AVATAR_URL . $filename . '?t=' . time();
    $pdo->prepare('UPDATE profiles SET avatar_url = :url WHERE id = :id')
        ->execute([':url' => $avatarUrl, ':id' => $userId]);

    echo json_encode(['success' => true, 'avatar_url' => $avatarUrl]);
    exit;
}
// ─── POST: troca code Google por sessão (chamado pelo React após redirect) ──────
if ($method === 'POST' && $action === 'google_exchange') {
    if (!$GOOGLE_CLIENT_ID || !$GOOGLE_SECRET) {
        http_response_code(503);
        echo json_encode(['error' => 'Google OAuth não configurado.']);
        exit;
    }

    $body         = json_decode(file_get_contents('php://input'), true);
    $code         = trim($body['code'] ?? '');
    $redirect_uri = trim($body['redirect_uri'] ?? SITE_URL . '/auth/google');

    if (!$code) {
        http_response_code(400);
        echo json_encode(['error' => 'code obrigatório']);
        exit;
    }

    // 1. Trocar code por access_token
    $tokenPostData = http_build_query([
        'code'          => $code,
        'client_id'     => $GOOGLE_CLIENT_ID,
        'client_secret' => $GOOGLE_SECRET,
        'redirect_uri'  => $redirect_uri,
        'grant_type'    => 'authorization_code',
    ]);

    $tokenRaw = null;
    if (function_exists('curl_init')) {
        $ch = curl_init('https://oauth2.googleapis.com/token');
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $tokenPostData,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 15,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_HTTPHEADER     => ['Content-Type: application/x-www-form-urlencoded'],
        ]);
        $tokenRaw = curl_exec($ch);
        curl_close($ch);
    }

    $tokenData = $tokenRaw ? json_decode($tokenRaw, true) : null;
    if (!$tokenData || empty($tokenData['access_token'])) {
        http_response_code(502);
        echo json_encode(['error' => 'Falha ao obter token do Google. Tente novamente.']);
        exit;
    }

    // 2. Buscar informações do usuário
    $userInfoRaw = null;
    if (function_exists('curl_init')) {
        $ch = curl_init('https://www.googleapis.com/oauth2/v3/userinfo');
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 10,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_HTTPHEADER     => ['Authorization: Bearer ' . $tokenData['access_token']],
        ]);
        $userInfoRaw = curl_exec($ch);
        curl_close($ch);
    }

    $googleUser = $userInfoRaw ? json_decode($userInfoRaw, true) : null;
    if (!$googleUser || empty($googleUser['email'])) {
        http_response_code(502);
        echo json_encode(['error' => 'Não foi possível obter dados do Google.']);
        exit;
    }

    $googleId  = $googleUser['sub'];
    $email     = $googleUser['email'];
    $name      = $googleUser['name'] ?? explode('@', $email)[0];
    $avatarUrl = $googleUser['picture'] ?? null;

    // 3. Criar ou encontrar usuário no banco
    $stmt = $pdo->prepare('SELECT id, email FROM users WHERE google_id = :gid OR email = :email LIMIT 1');
    $stmt->execute([':gid' => $googleId, ':email' => $email]);
    $existing = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($existing) {
        $userId = $existing['id'];
        $pdo->prepare('UPDATE users SET google_id = :gid WHERE id = :id AND google_id IS NULL')
            ->execute([':gid' => $googleId, ':id' => $userId]);
    } else {
        $userId   = bin2hex(random_bytes(16));
        $nickname = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', explode(' ', $name)[0]));
        $nickname = $nickname ?: 'usuario' . substr($userId, 0, 6);
        $pdo->prepare('INSERT INTO users (id, email, password_hash, google_id) VALUES (:id, :email, :hash, :gid)')
            ->execute([':id' => $userId, ':email' => $email, ':hash' => '', ':gid' => $googleId]);
        $pdo->prepare('INSERT INTO profiles (id, name, nickname, avatar_url) VALUES (:id, :name, :nick, :avatar)')
            ->execute([':id' => $userId, ':name' => $name, ':nick' => $nickname, ':avatar' => $avatarUrl]);
    }

    $profileStmt = $pdo->prepare('SELECT * FROM profiles WHERE id = :id');
    $profileStmt->execute([':id' => $userId]);
    $profile = $profileStmt->fetch(PDO::FETCH_ASSOC);
    $profile['notifications_site'] = (bool)($profile['notifications_site'] ?? false);
    $profile['notifications_app']  = (bool)($profile['notifications_app']  ?? false);

    echo json_encode([
        'user'    => ['id' => $userId, 'email' => $email],
        'profile' => $profile,
    ]);
    exit;
}

// ─── GET: retorna URL de autorização do Google ────────────────────────────────
if ($method === 'GET' && $action === 'google_auth_url') {
    if (!$GOOGLE_CLIENT_ID) {
        http_response_code(503);
        echo json_encode(['error' => 'Google OAuth não configurado. Adicione GOOGLE_CLIENT_ID e GOOGLE_SECRET no .env.php.']);
        exit;
    }
    $redirect_uri = SITE_URL . '/auth/google';
    $params = http_build_query([
        'client_id'     => $GOOGLE_CLIENT_ID,
        'redirect_uri'  => $redirect_uri,
        'response_type' => 'code',
        'scope'         => 'openid email profile',
        'access_type'   => 'online',
        'prompt'        => 'select_account',
    ]);
    echo json_encode(['url' => 'https://accounts.google.com/o/oauth2/v2/auth?' . $params]);
    exit;
}


http_response_code(404);
echo json_encode(['error' => 'Endpoint não encontrado']);

/*
════════════════════════════════════════════════════
SQL para executar no phpMyAdmin (criar todas as tabelas):
════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL DEFAULT '',
    google_id VARCHAR(64) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_google_id (google_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Se a tabela já existe, adicione a coluna google_id:
-- ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(64) DEFAULT NULL;
-- ALTER TABLE users ADD INDEX IF NOT EXISTS idx_google_id (google_id);
-- ALTER TABLE users MODIFY COLUMN password_hash VARCHAR(255) NOT NULL DEFAULT '';

CREATE TABLE IF NOT EXISTS profiles (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL DEFAULT '',
    nickname VARCHAR(30) NOT NULL DEFAULT '',
    avatar_url VARCHAR(500) DEFAULT NULL,
    notifications_site TINYINT(1) DEFAULT 0,
    notifications_app TINYINT(1) DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS widget_cache (
    widget      VARCHAR(20) PRIMARY KEY,   -- 'b3', 'rates', 'crypto'
    data        LONGTEXT NOT NULL,         -- JSON payload
    fetched_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    fetch_date  DATE NOT NULL,             -- data da última busca real
    req_count   INT DEFAULT 0             -- total de requisições feitas hoje
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS comments (
    id VARCHAR(36) PRIMARY KEY,
    post_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_post_id (post_id),
    INDEX idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

*/

// Já foi adicionado acima — esse bloco é reservado para append via script

