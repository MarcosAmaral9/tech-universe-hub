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


// ─── GET: câmbio + metais — SOMENTE leitura de cache ────────────────────────
// Os dados são atualizados EXCLUSIVAMENTE pelo cron_refresh.
// Este endpoint apenas lê do MySQL/arquivo de cache.
if ($method === 'GET' && $action === 'rates') {
    $db = getPdo();
    if ($db) {
        $cached = dbCacheGet($db, 'rates', 60); // TTL alto — serve qualquer dado recente
        if ($cached) { $cached['_meta']['from_cache'] = true; echo json_encode($cached); exit; }
    }
    // Fallback: arquivo de cache
    $CACHE_FILE = cacheDir() . '/viciocode_rates_v2.json';
    if (file_exists($CACHE_FILE)) {
        $raw = file_get_contents($CACHE_FILE);
        if ($raw) { echo $raw; exit; }
    }
    http_response_code(503);
    echo json_encode(['error' => 'Dados de câmbio indisponíveis — aguarde o cron']);
    exit;
}


// ─── GET: criptomoedas — SOMENTE leitura de cache ───────────────────────────
// Os dados são atualizados EXCLUSIVAMENTE pelo cron_refresh.
if ($method === 'GET' && $action === 'crypto') {
    $db = getPdo();
    if ($db) {
        $cached = dbCacheGet($db, 'crypto', 60);
        if ($cached) { $cached['_meta']['from_cache'] = true; echo json_encode($cached); exit; }
    }
    $CACHE_FILE = cacheDir() . '/viciocode_crypto.json';
    if (file_exists($CACHE_FILE)) {
        $raw = file_get_contents($CACHE_FILE);
        if ($raw) { echo $raw; exit; }
    }
    http_response_code(503);
    echo json_encode(['error' => 'Dados de cripto indisponíveis — aguarde o cron']);
    exit;
}

// ─── GET: B3 — SOMENTE leitura de cache ─────────────────────────────────────
// Os dados são atualizados EXCLUSIVAMENTE pelo cron_refresh.
if ($method === 'GET' && $action === 'b3') {
    $db = getPdo();
    if ($db) {
        $cached = dbCacheGet($db, 'b3', 60);
        if ($cached) { $cached['_meta']['from_cache'] = true; echo json_encode($cached); exit; }
    }
    $CACHE_FILE = cacheDir() . '/viciocode_b3_v2.json';
    if (file_exists($CACHE_FILE)) {
        $raw = file_get_contents($CACHE_FILE);
        if ($raw) { echo $raw; exit; }
    }
    http_response_code(503);
    echo json_encode(['error' => 'Dados B3 indisponíveis — aguarde o cron']);
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

// ─── GET: endpoint unificado — b3 + crypto + rates em 1 requisição ──────────
// Serve do cache já existente de cada widget (sem novas chamadas a APIs externas)
// TTL = menor TTL entre os três (rates = 3 min)
// ─── GET: endpoint unificado — SOMENTE leitura de cache, NUNCA chama APIs externas
// Os dados são sempre servidos do banco MySQL ou arquivo de cache.
// A atualização dos dados é feita EXCLUSIVAMENTE pelo cron_refresh (cron job).
// Isso garante: zero requisições de API por visita de usuário.
if ($method === 'GET' && $action === 'all') {
    $db = getPdo();

    // Lê do banco sem limite de TTL — serve qualquer dado válido que exista
    // (o cron garante que os dados estejam frescos; aqui só lemos o que há)
    $b3Data     = null;
    $cryptoData = null;
    $ratesData  = null;

    if ($db) {
        // Busca direto da tabela sem restrição de TTL — pega o mais recente
        foreach (['b3' => &$b3Data, 'crypto' => &$cryptoData, 'rates' => &$ratesData] as $widget => &$target) {
            try {
                $stmt = $db->prepare('SELECT data, fetched_at FROM widget_cache WHERE widget = :w LIMIT 1');
                $stmt->execute([':w' => $widget]);
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                if ($row && $row['data']) {
                    $decoded = json_decode($row['data'], true);
                    if ($decoded) {
                        $fetchedTs = strtotime($row['fetched_at']);
                        // TTL dinâmico para expiresAt: B3 usa pregão, outros usam TTL fixo
                        if ($widget === 'b3') {
                            $hourBRT = (int)date('G', time() - 3 * 3600);
                            $dayBRT  = (int)date('N', time() - 3 * 3600);
                            $mktOpen = ($dayBRT >= 1 && $dayBRT <= 5 && $hourBRT >= 9 && $hourBRT < 18);
                            $ttl = $mktOpen ? 30 * 60 : 30 * 60;
                        } elseif ($widget === 'crypto') {
                            $ttl = 30 * 60;
                        } else {
                            $ttl = 30 * 60;
                        }
                        $decoded['_meta']['from_cache'] = true;
                        $decoded['_meta']['updatedAt']  = date('c', $fetchedTs);
                        $decoded['_meta']['expiresAt']  = date('c', $fetchedTs + $ttl);
                        $target = $decoded;
                    }
                }
            } catch (Exception $e) { /* continua */ }
        }
        unset($target);
    }

    // Fallback: lê dos arquivos de cache (sem restrição de tempo)
    $cacheDir = cacheDir();
    $cacheFiles = ['b3' => 'viciocode_b3_v2.json', 'crypto' => 'viciocode_crypto.json', 'rates' => 'viciocode_rates_v2.json'];
    foreach ([['b3', &$b3Data], ['crypto', &$cryptoData], ['rates', &$ratesData]] as [$widget, &$target]) {
        if ($target !== null) continue; // já tem do banco
        $f = $cacheDir . '/' . $cacheFiles[$widget];
        if (file_exists($f)) {
            $r = file_get_contents($f);
            if ($r) {
                $decoded = json_decode($r, true);
                if ($decoded) {
                    $decoded['_meta']['from_cache'] = true;
                    $target = $decoded;
                }
            }
        }
    }
    unset($target);

    // Calcula expiresAt global = menor entre os três
    $expiresTs = PHP_INT_MAX;
    foreach ([$b3Data, $cryptoData, $ratesData] as $src) {
        if (!empty($src['_meta']['expiresAt'])) {
            $ts = strtotime($src['_meta']['expiresAt']);
            if ($ts !== false && $ts < $expiresTs) $expiresTs = $ts;
        }
    }
    if ($expiresTs === PHP_INT_MAX) $expiresTs = time() + 30 * 60;

    $b3Ok     = !empty($b3Data['results']);
    $cryptoOk = !empty($cryptoData['coins']);
    $ratesOk  = isset($ratesData['USDBRL']);

    // ── AUTO-BOOTSTRAP: se o BD estiver vazio, busca APIs diretamente uma vez ──
    // Isso resolve o caso onde o cron ainda não foi configurado ou o BD foi resetado.
    // Após esta chamada, o cron assumirá as atualizações regulares.
    if (!$b3Ok || !$cryptoOk || !$ratesOk) {
        // Busca o que estiver faltando diretamente das APIs externas
        $autoBootstrapped = false;

        // Rates (fawazahmed — sem limite, sempre tenta)
        if (!$ratesOk) {
            $rawFw = httpGet('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.min.json', 8);
            if ($rawFw) {
                $dataFw = json_decode($rawFw, true);
                $brl = $dataFw['brl'] ?? [];
                $toRate = function($key) use ($brl): ?array {
                    $rate = $brl[$key] ?? null;
                    if (!$rate || $rate <= 0) return null;
                    $bid = round(1 / $rate, 6);
                    return ['bid' => (string)$bid, 'pctChange' => '0.00', 'high' => (string)$bid, 'low' => (string)$bid];
                };
                $r = [];
                if ($v = $toRate('usd')) $r['USDBRL'] = $v;
                if ($v = $toRate('eur')) $r['EURBRL'] = $v;
                if ($v = $toRate('ars')) $r['ARSBRL'] = $v;
                if ($v = $toRate('pyg')) $r['PYGBRL'] = $v;
                if ($v = $toRate('xau')) $r['XAUBRL'] = $v;
                if ($v = $toRate('xag')) $r['XAGBRL'] = $v;
                if (!empty($r['USDBRL'])) {
                    $r['_meta'] = ['source' => 'fawazahmed-auto', 'from_cache' => false, 'updatedAt' => date('c'), 'expiresAt' => date('c', time() + 30 * 60)];
                    $ratesData = $r;
                    $ratesOk = true;
                    if ($db) { dbCacheSave($db, 'rates', $r); @file_put_contents(cacheDir() . '/viciocode_rates_v2.json', json_encode($r)); }
                    $autoBootstrapped = true;
                }
            }
        }

        // Crypto (CoinGecko — apenas se rates OK para não sobrecarregar no mesmo request)
        if (!$cryptoOk) {
            $rawCg = httpGet('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=8&page=1&sparkline=false', 10);
            if (!$rawCg) $rawCg = httpGet('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,cardano,ripple,chainlink,polkadot&vs_currencies=brl&include_24hr_change=true', 8);
            $cgData = $rawCg ? json_decode($rawCg, true) : null;
            if (!empty($cgData) && is_array($cgData) && count($cgData) > 0) {
                $cr = ['coins' => $cgData, '_meta' => ['source' => 'coingecko-auto', 'from_cache' => false, 'updatedAt' => date('c'), 'expiresAt' => date('c', time() + 30 * 60)]];
                $cryptoData = $cr;
                $cryptoOk = true;
                if ($db) {
                    dbCacheSave($db, 'crypto', $cr);
                    $histCrypto = [];
                    foreach ($cgData as $coin) { if (isset($coin['id'], $coin['current_price']) && $coin['current_price'] > 0) $histCrypto[strtoupper($coin['symbol'] ?? $coin['id'])] = (float)$coin['current_price']; }
                    if (!empty($histCrypto)) saveHistorySnapshots($db, 'crypto', $histCrypto);
                    @file_put_contents(cacheDir() . '/viciocode_crypto.json', json_encode($cr));
                }
                $autoBootstrapped = true;
            }
        }

        // B3 (brapi.dev — apenas se BD realmente vazio)
        if (!$b3Ok) {
            $tickers = !empty($BRAPI_TOKEN) ? 'PETR4,VALE3,ITUB4,BBDC4,ABEV3,WEGE3,BBAS3,RENT3,MGLU3,SUZB3' : 'PETR4,VALE3,ITUB4,BBDC4,ABEV3,WEGE3,BBAS3,MGLU3';
            $brapiUrl = "https://brapi.dev/api/quote/{$tickers}?fundamental=false";
            $brapiHeaders = !empty($BRAPI_TOKEN) ? ["Authorization: Bearer {$BRAPI_TOKEN}", 'Accept: application/json'] : ['Accept: application/json'];
            $brapiRaw = null;
            if (function_exists('curl_init')) {
                $ch = curl_init($brapiUrl);
                curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER=>true, CURLOPT_TIMEOUT=>10, CURLOPT_FOLLOWLOCATION=>true, CURLOPT_SSL_VERIFYPEER=>true, CURLOPT_USERAGENT=>'VicioCode/1.0', CURLOPT_HTTPHEADER=>$brapiHeaders]);
                $brapiRaw = curl_exec($ch); curl_close($ch);
            }
            if (!$brapiRaw && ini_get('allow_url_fopen')) {
                $ctx = stream_context_create(['http' => ['timeout'=>10, 'ignore_errors'=>true, 'header'=>implode("
", $brapiHeaders)."
"]]);
                $brapiRaw = @file_get_contents($brapiUrl, false, $ctx);
            }
            $brapiData = $brapiRaw ? json_decode($brapiRaw, true) : null;
            if (!empty($brapiData['results'])) {
                $br = ['results' => $brapiData['results'], '_meta' => ['source' => 'brapi-auto', 'from_cache' => false, 'updatedAt' => date('c'), 'expiresAt' => date('c', time() + 30 * 60)]];
                $b3Data = $br;
                $b3Ok = true;
                if ($db) {
                    dbCacheSave($db, 'b3', $br);
                    $histB3 = [];
                    foreach ($brapiData['results'] as $s) if (isset($s['symbol'], $s['regularMarketPrice']) && $s['regularMarketPrice'] > 0) $histB3[$s['symbol']] = (float)$s['regularMarketPrice'];
                    if (!empty($histB3)) saveHistorySnapshots($db, 'b3', $histB3);
                    @file_put_contents(cacheDir() . '/viciocode_b3_v2.json', json_encode($br));
                }
                $autoBootstrapped = true;
            }
        }

        // Recalcula expiresAt com os dados recém obtidos
        if ($autoBootstrapped) {
            $expiresTs = PHP_INT_MAX;
            foreach ([$b3Data, $cryptoData, $ratesData] as $src) {
                if (!empty($src['_meta']['expiresAt'])) {
                    $ts = strtotime($src['_meta']['expiresAt']);
                    if ($ts !== false && $ts < $expiresTs) $expiresTs = $ts;
                }
            }
            if ($expiresTs === PHP_INT_MAX) $expiresTs = time() + 30 * 60;
        }
    }

    echo json_encode([
        'b3'     => $b3Data     ?? ['results' => [], '_meta' => ['error' => 'indisponível']],
        'crypto' => $cryptoData ?? ['coins'   => [], '_meta' => ['error' => 'indisponível']],
        'rates'  => $ratesData  ?? ['_meta'   => ['error' => 'indisponível']],
        '_meta'  => [
            'action'     => 'all',
            'from_cache' => true,
            'updatedAt'  => date('c'),
            'expiresAt'  => date('c', $expiresTs),
            'b3_ok'      => $b3Ok,
            'crypto_ok'  => $cryptoOk,
            'rates_ok'   => $ratesOk,
        ],
    ]);
    exit;
}

// ─── GET: histórico múltiplo — todos os ativos de uma vez ────────────────────
// /api.php?action=history_multi&days=30
// Retorna: {"b3":{"PETR4":[{date,price},...]},"crypto":{...},"currency":{...},"metal":{...}}
// NOTA: history_crypto_proxy foi REMOVIDO — todo histórico vem do BD (populado pelo cron + bootstrap)

if ($method === 'GET' && $action === 'history_multi') {
    $days = min(max((int)($_GET['days'] ?? 30), 1), 400);
    $db   = getPdo();
    if (!$db) { http_response_code(503); echo json_encode(['error' => 'Banco indisponível']); exit; }

    $stmt = $db->prepare(
        'SELECT asset_type, asset_code, price_date, price
         FROM price_history
         WHERE price_date >= DATE_SUB(CURDATE(), INTERVAL :days DAY)
         ORDER BY asset_type, asset_code, price_date ASC'
    );
    $stmt->execute([':days' => $days]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $grouped = [];
    foreach ($rows as $row) {
        $grouped[$row['asset_type']][$row['asset_code']][] = [
            'date' => $row['price_date'], 'price' => (float)$row['price'],
        ];
    }

    echo json_encode([
        'days'     => $days,
        'b3'       => $grouped['b3']       ?? [],
        'crypto'   => $grouped['crypto']   ?? [],
        'currency' => $grouped['currency'] ?? [],
        'metal'    => $grouped['metal']    ?? [],
        '_meta'    => ['updatedAt' => date('c'), 'total_rows' => count($rows)],
    ]);
    exit;
}

// ─── GET: cron_refresh — ÚNICO ponto de entrada para APIs externas ─────────────
// Configure no Hostinger hPanel → Cron Jobs → */30 * * * *  (a cada 30 MINUTOS)
// URL: https://viciocode.com/api.php?action=cron_refresh&secret=VC_CRON_2026
//
// CÁLCULO DE REQUISIÇÕES MENSAIS (30 dias, ciclo 30 min):
//   CoinGecko (crypto): 1 req/30min × 24h × 30d = 1.440 req/mês = 14% de 10.000 ✅
//   brapi.dev (B3):     ~1.116 req/mês (pregão) = 8% de 15.000 ✅
//   fawazahmed (rates): sem limite (CDN jsDelivr) ✅
//
// Este endpoint é o ÚNICO que chama APIs externas. Usuários NUNCA chamam APIs.
// Fluxo: cron → api.php?action=cron_refresh → brapi/CoinGecko/fawazahmed → MySQL
// Usuário → api.php?action=all → MySQL (só leitura, zero APIs externas)
if ($method === 'GET' && $action === 'cron_refresh') {
    $CRON_SECRET = 'VC_CRON_2026';
    if (file_exists(__DIR__ . '/.env.php')) { include __DIR__ . '/.env.php'; }
    if (($_GET['secret'] ?? '') !== $CRON_SECRET) {
        http_response_code(403); echo json_encode(['error' => 'Acesso negado']); exit;
    }

    $t0 = microtime(true);
    $db = getPdo();
    $results = [];

    // ── 1. RATES (câmbio + metais via fawazahmed) ──────────────────────────
    $ratesResult = [];
    $brl = [];
    $rawFw = httpGet('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.min.json', 8);
    if ($rawFw) {
        $dataFw = json_decode($rawFw, true);
        $brl = $dataFw['brl'] ?? [];
        $toRate = function($key) use ($brl): ?array {
            $rate = $brl[$key] ?? null;
            if (!$rate || $rate <= 0) return null;
            $bid = round(1 / $rate, 6);
            return ['bid' => (string)$bid, 'pctChange' => '0.00', 'high' => (string)$bid, 'low' => (string)$bid];
        };
        if ($r = $toRate('usd')) $ratesResult['USDBRL'] = $r;
        if ($r = $toRate('eur')) $ratesResult['EURBRL'] = $r;
        if ($r = $toRate('ars')) $ratesResult['ARSBRL'] = $r;
        if ($r = $toRate('pyg')) $ratesResult['PYGBRL'] = $r;
        if ($r = $toRate('xau')) $ratesResult['XAUBRL'] = $r;
        if ($r = $toRate('xag')) $ratesResult['XAGBRL'] = $r;
    }
    // pctChange via fawazahmed histórico
    if (!empty($brl)) {
        $yesterday = date('Y-m-d', strtotime('-1 day'));
        $rawYest = httpGet("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{$yesterday}/v1/currencies/brl.min.json", 6);
        if ($rawYest) {
            $brlYest = json_decode($rawYest, true)['brl'] ?? [];
            foreach (['usd'=>'USDBRL','eur'=>'EURBRL','ars'=>'ARSBRL','pyg'=>'PYGBRL','xau'=>'XAUBRL','xag'=>'XAGBRL'] as $cur => $key) {
                if (!isset($ratesResult[$key], $brl[$cur], $brlYest[$cur])) continue;
                $todayBrl = $brl[$cur] > 0 ? 1/$brl[$cur] : 0;
                $yesterdayBrl = $brlYest[$cur] > 0 ? 1/$brlYest[$cur] : 0;
                if ($yesterdayBrl > 0) {
                    $pct = round((($todayBrl - $yesterdayBrl) / $yesterdayBrl) * 100, 2);
                    $spread = $todayBrl * 0.003;
                    $ratesResult[$key]['pctChange'] = (string)$pct;
                    $ratesResult[$key]['high'] = (string)round($todayBrl + $spread, 6);
                    $ratesResult[$key]['low']  = (string)round($todayBrl - $spread, 6);
                }
            }
        }
    }
    if (!empty($ratesResult)) {
        $TTL_RATES = 30 * 60;
        $ratesResult['_meta'] = ['source' => 'fawazahmed', 'from_cache' => false, 'updatedAt' => date('c'), 'expiresAt' => date('c', time() + $TTL_RATES)];
        if ($db) {
            dbCacheSave($db, 'rates', $ratesResult);
            $TROY = 31.1035;
            $histC = []; $histM = [];
            foreach (['USDBRL'=>'USD','EURBRL'=>'EUR','ARSBRL'=>'ARS','PYGBRL'=>'PYG'] as $k=>$c)
                if (isset($ratesResult[$k]['bid'])) $histC[$c] = (float)$ratesResult[$k]['bid'];
            if (isset($ratesResult['XAUBRL']['bid'])) $histM['XAU'] = round((float)$ratesResult['XAUBRL']['bid'] / $TROY, 4);
            if (isset($ratesResult['XAGBRL']['bid'])) $histM['XAG'] = round((float)$ratesResult['XAGBRL']['bid'] / $TROY, 4);
            if (!empty($histC)) saveHistorySnapshots($db, 'currency', $histC);
            if (!empty($histM)) saveHistorySnapshots($db, 'metal', $histM);
        }
        @file_put_contents(cacheDir() . '/viciocode_rates_v2.json', json_encode($ratesResult));
        $results['rates'] = ['ok' => true, 'source' => 'fawazahmed', 'ms' => round((microtime(true) - $t0) * 1000)];
    } else {
        $results['rates'] = ['ok' => false, 'source' => 'none', 'ms' => round((microtime(true) - $t0) * 1000)];
    }
    usleep(500000);

    // ── 2. CRYPTO (CoinGecko) ─────────────────────────────────────────────
    $TTL_CRYPTO = 30 * 60;
    $rawCg = httpGet('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=8&page=1&sparkline=false', 10);
    if (!$rawCg) $rawCg = httpGet('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,cardano,ripple,chainlink,polkadot&vs_currencies=brl&include_24hr_change=true', 8);
    $cgData = $rawCg ? json_decode($rawCg, true) : null;
    if (!empty($cgData) && is_array($cgData) && count($cgData) > 0) {
        $cryptoResult = ['coins' => $cgData, '_meta' => ['source' => 'coingecko', 'from_cache' => false, 'updatedAt' => date('c'), 'expiresAt' => date('c', time() + $TTL_CRYPTO)]];
        if ($db) {
            dbCacheSave($db, 'crypto', $cryptoResult);
            $histCrypto = [];
            foreach ($cgData as $coin) {
                if (isset($coin['id'], $coin['current_price']) && $coin['current_price'] > 0) {
                    $sym = strtoupper($coin['symbol'] ?? $coin['id']);
                    $histCrypto[$sym] = (float)$coin['current_price'];
                }
            }
            if (!empty($histCrypto)) saveHistorySnapshots($db, 'crypto', $histCrypto);
        }
        @file_put_contents(cacheDir() . '/viciocode_crypto.json', json_encode($cryptoResult));
        $results['crypto'] = ['ok' => true, 'source' => 'coingecko', 'coins' => count($cgData), 'ms' => round((microtime(true) - $t0) * 1000)];
    } else {
        $results['crypto'] = ['ok' => false, 'source' => 'none', 'ms' => round((microtime(true) - $t0) * 1000)];
    }
    usleep(500000);

    // ── 3. B3 (brapi.dev + Yahoo Finance fallback) ────────────────────────
    $hourBRT = (int)date('G', time() - 3 * 3600);
    $dayBRT  = (int)date('N', time() - 3 * 3600);
    $isMarketOpen = ($dayBRT >= 1 && $dayBRT <= 5 && $hourBRT >= 9 && $hourBRT < 18);
    $TTL_B3 = 30 * 60; // 30 min — alinhado com ciclo do cron

    $tickers = !empty($BRAPI_TOKEN) ? 'PETR4,VALE3,ITUB4,BBDC4,ABEV3,WEGE3,BBAS3,RENT3,MGLU3,SUZB3' : 'PETR4,VALE3,ITUB4,BBDC4,ABEV3,WEGE3,BBAS3,MGLU3';
    $brapiUrl = "https://brapi.dev/api/quote/{$tickers}?fundamental=false";
    $brapiHeaders = !empty($BRAPI_TOKEN) ? ["Authorization: Bearer {$BRAPI_TOKEN}", 'Accept: application/json'] : ['Accept: application/json'];
    $brapiRaw = null;
    if (function_exists('curl_init')) {
        $ch = curl_init($brapiUrl);
        curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER=>true, CURLOPT_TIMEOUT=>12, CURLOPT_FOLLOWLOCATION=>true, CURLOPT_SSL_VERIFYPEER=>true, CURLOPT_USERAGENT=>'VicioCode/1.0', CURLOPT_HTTPHEADER=>$brapiHeaders]);
        $brapiRaw = curl_exec($ch); curl_close($ch);
    } elseif (ini_get('allow_url_fopen')) {
        $ctx = stream_context_create(['http' => ['timeout'=>12, 'ignore_errors'=>true, 'header'=>implode("
", $brapiHeaders)."
"]]);
        $brapiRaw = @file_get_contents($brapiUrl, false, $ctx);
    }
    $brapiData = $brapiRaw ? json_decode($brapiRaw, true) : null;

    if (!empty($brapiData['results']) && count($brapiData['results']) > 0) {
        $b3Result = ['results' => $brapiData['results'], '_meta' => ['source' => 'brapi', 'withToken' => !empty($BRAPI_TOKEN), 'from_cache' => false, 'updatedAt' => date('c'), 'expiresAt' => date('c', time() + $TTL_B3)]];
        if ($db) {
            dbCacheSave($db, 'b3', $b3Result);
            $histB3 = [];
            foreach ($brapiData['results'] as $s) if (isset($s['symbol'], $s['regularMarketPrice']) && $s['regularMarketPrice'] > 0) $histB3[$s['symbol']] = (float)$s['regularMarketPrice'];
            if (!empty($histB3)) saveHistorySnapshots($db, 'b3', $histB3);
        }
        @file_put_contents(cacheDir() . '/viciocode_b3_v2.json', json_encode($b3Result));
        $results['b3'] = ['ok' => true, 'source' => 'brapi', 'tickers' => count($brapiData['results']), 'ms' => round((microtime(true) - $t0) * 1000)];
    } else {
        // Fallback: Yahoo Finance (gratuito, sem token)
        $yfTickers = ['PETR4.SA','VALE3.SA','ITUB4.SA','BBDC4.SA','ABEV3.SA','WEGE3.SA','BBAS3.SA','MGLU3.SA'];
        $yfResults = [];
        foreach ($yfTickers as $ticker) {
            $yfRaw = httpGet("https://query1.finance.yahoo.com/v8/finance/chart/{$ticker}?interval=1d&range=1d", 6, ['User-Agent: Mozilla/5.0 (compatible; VicioCode/1.0)']);
            if ($yfRaw) {
                $yfData = json_decode($yfRaw, true);
                $meta = $yfData['chart']['result'][0]['meta'] ?? null;
                if ($meta && isset($meta['regularMarketPrice'])) {
                    $prev = $meta['chartPreviousClose'] ?? $meta['regularMarketPrice'];
                    $price = $meta['regularMarketPrice'];
                    $pct = $prev > 0 ? round((($price - $prev) / $prev) * 100, 2) : 0;
                    $yfResults[] = ['symbol' => str_replace('.SA', '', $ticker), 'shortName' => $meta['shortName'] ?? str_replace('.SA', '', $ticker), 'regularMarketPrice' => $price, 'regularMarketChangePercent' => $pct];
                }
            }
            usleep(200000);
        }
        if (!empty($yfResults)) {
            $b3Result = ['results' => $yfResults, '_meta' => ['source' => 'yahoo', 'from_cache' => false, 'updatedAt' => date('c'), 'expiresAt' => date('c', time() + $TTL_B3)]];
            if ($db) {
                dbCacheSave($db, 'b3', $b3Result);
                $histB3 = [];
                foreach ($yfResults as $s) if (isset($s['symbol'], $s['regularMarketPrice']) && $s['regularMarketPrice'] > 0) $histB3[$s['symbol']] = (float)$s['regularMarketPrice'];
                if (!empty($histB3)) saveHistorySnapshots($db, 'b3', $histB3);
            }
            @file_put_contents(cacheDir() . '/viciocode_b3_v2.json', json_encode($b3Result));
            $results['b3'] = ['ok' => true, 'source' => 'yahoo', 'tickers' => count($yfResults), 'ms' => round((microtime(true) - $t0) * 1000)];
        } else {
            $results['b3'] = ['ok' => false, 'source' => 'none', 'brapi_preview' => $brapiRaw ? substr($brapiRaw, 0, 200) : null, 'ms' => round((microtime(true) - $t0) * 1000)];
        }
    }

    echo json_encode([
        'action'      => 'cron_refresh',
        'timestamp'   => date('c'),
        'elapsed_ms'  => round((microtime(true) - $t0) * 1000),
        'market_open' => $isMarketOpen,
        'results'     => $results,
    ], JSON_PRETTY_PRINT);
    exit;
}

// ─── GET: todos os ativos com histórico disponível ──────────────────────────
// ─── GET: bootstrap histórico — preenche o BD com 365 dias de cripto+câmbio+metais ─
// Execute UMA VEZ via navegador após configurar o cron:
// https://viciocode.com/api.php?action=history_bootstrap&secret=VC_CRON_2026
//
// O que faz:
//   Cripto (8 moedas): CoinGecko free → 365 dias de histórico (8 req total)
//   Câmbio (USD,EUR,ARS,PYG): fawazahmed → 365 dias (sem limite de req)
//   Metais (XAU,XAG): fawazahmed → 365 dias (incluído no câmbio, sem custo extra)
//   B3: NÃO faz bootstrap (Yahoo Finance restringiu em 2025, brapi free sem histórico)
//      → B3 é acumulado automaticamente pelo cron (1 ponto/dia desde ativação)
//
// Requisições usadas: 8 req CoinGecko + ~730 req fawazahmed (sem limite)
// Duração estimada: 3-5 minutos (aguarda rate limits do CoinGecko entre moedas)
// Idempotente: pode re-executar sem problemas (pula dados já existentes)
if ($method === 'GET' && $action === 'history_bootstrap') {
    $CRON_SECRET = 'VC_CRON_2026';
    if (file_exists(__DIR__ . '/.env.php')) { include __DIR__ . '/.env.php'; }
    if (($_GET['secret'] ?? '') !== $CRON_SECRET) {
        http_response_code(403); echo json_encode(['error' => 'Acesso negado']); exit;
    }

    $db = getPdo();
    if (!$db) { http_response_code(503); echo json_encode(['error' => 'Banco indisponível']); exit; }

    $t0 = microtime(true);
    $results = [];
    $days = (int)($_GET['days'] ?? 365); // padrão 365 para máximo histórico gratuito

    // ── Cripto: 8 moedas × 90 dias via CoinGecko (server-side) ──────────
    $cryptoCoins = [
        'bitcoin'=>'BTC','ethereum'=>'ETH','solana'=>'SOL','binancecoin'=>'BNB',
        'cardano'=>'ADA','ripple'=>'XRP','chainlink'=>'LINK','polkadot'=>'DOT',
    ];
    $cryptoResults = [];
    foreach ($cryptoCoins as $coinId => $sym) {
        // Verifica se já tem dados suficientes no BD
        $stmt = $db->prepare('SELECT COUNT(*) FROM price_history WHERE asset_type="crypto" AND asset_code=:code AND price_date >= DATE_SUB(CURDATE(), INTERVAL :days DAY)');
        $stmt->execute([':code' => $sym, ':days' => $days]);
        $existing = (int)$stmt->fetchColumn();
        if ($existing >= 80) {
            $cryptoResults[$coinId] = ['skipped' => true, 'existing' => $existing];
            continue;
        }

        // CoinGecko free: até 365 dias com granularidade diária
    // 1-90 dias = hourly | >90 dias = daily (automático, sem parâmetro interval)
    $cgDays = min($days, 365);
    $cgInterval = $cgDays <= 90 ? '&interval=daily' : '';
    $cgUrl = "https://api.coingecko.com/api/v3/coins/{$coinId}/market_chart?vs_currency=brl&days={$cgDays}{$cgInterval}";
        $raw = httpGet($cgUrl, 15);
        if (!$raw) { $cryptoResults[$coinId] = ['error' => 'CoinGecko failed']; usleep(2000000); continue; }

        $cgData = json_decode($raw, true);
        if (empty($cgData['prices'])) { $cryptoResults[$coinId] = ['error' => 'no prices']; usleep(2000000); continue; }

        $byDate = [];
        foreach ($cgData['prices'] as [$ts, $price]) {
            $d = date('Y-m-d', (int)($ts / 1000));
            $byDate[$d] = round((float)$price, $price >= 1 ? 2 : 6);
        }
        ksort($byDate);

        $ins = $db->prepare('INSERT INTO price_history (asset_type, asset_code, price, price_date) VALUES ("crypto", :code, :price, :date) ON DUPLICATE KEY UPDATE price = VALUES(price)');
        foreach ($byDate as $d => $p) $ins->execute([':code' => $sym, ':price' => $p, ':date' => $d]);
        $cryptoResults[$coinId] = ['saved' => count($byDate)];
        usleep(2500000); // 2.5s entre moedas (CoinGecko: ~24 req/min)
    }
    $results['crypto'] = $cryptoResults;

    // ── Câmbio: 90 dias via fawazahmed histórico (diário) ────────────────
    $pairMap = ['usd'=>'USD','eur'=>'EUR','ars'=>'ARS','pyg'=>'PYG'];
    $currencyData = []; // date → {cur: bid}
    $today = new DateTime();
    for ($i = 0; $i < $days; $i++) {
        $d = clone $today;
        $d->modify("-{$i} days");
        $dateStr = $d->format('Y-m-d');

        // Verifica se já tem dados para esta data
        $stmt = $db->prepare('SELECT COUNT(*) FROM price_history WHERE asset_type="currency" AND price_date=:d');
        $stmt->execute([':d' => $dateStr]);
        if ((int)$stmt->fetchColumn() >= count($pairMap)) continue; // já tem todos

        $rawFw = httpGet("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{$dateStr}/v1/currencies/brl.min.json", 8);
        if (!$rawFw) continue;
        $brlData = json_decode($rawFw, true)['brl'] ?? [];
        if (empty($brlData)) continue;

        $ins = $db->prepare('INSERT INTO price_history (asset_type, asset_code, price, price_date) VALUES (:type, :code, :price, :date) ON DUPLICATE KEY UPDATE price = VALUES(price)');
        foreach ($pairMap as $cur => $sym) {
            $rate = $brlData[$cur] ?? null;
            if ($rate && $rate > 0) $ins->execute([':type' => 'currency', ':code' => $sym, ':price' => round(1/$rate, 6), ':date' => $dateStr]);
        }
        // Metais
        $TROY = 31.1035;
        if (!empty($brlData['xau'])) $ins->execute([':type' => 'metal', ':code' => 'XAU', ':price' => round(1/$brlData['xau']/$TROY, 4), ':date' => $dateStr]);
        if (!empty($brlData['xag'])) $ins->execute([':type' => 'metal', ':code' => 'XAG', ':price' => round(1/$brlData['xag']/$TROY, 4), ':date' => $dateStr]);

        usleep(200000); // 200ms entre datas
    }

    // ── B3: sem bootstrap retroativo ──────────────────────────────────────
    // Yahoo Finance restringiu histórico gratuito a partir de 2025 (requer premium)
    // brapi.dev free NÃO tem endpoint de histórico
    // O histórico B3 é acumulado EXCLUSIVAMENTE pelo cron job (1 ponto por execução)
    // → Após 7 dias de cron: período 7D disponível | 30 dias → 1M | 90 → 3M | 365 → 1A
    $results['b3'] = ['info' => 'Acumulado pelo cron — sem API gratuita para histórico retroativo B3'];

        // Conta o que foi salvo
    foreach (['currency'=>['USD','EUR','ARS','PYG'], 'metal'=>['XAU','XAG']] as $type => $codes) {
        foreach ($codes as $code) {
            $stmt = $db->prepare('SELECT COUNT(*) FROM price_history WHERE asset_type=:t AND asset_code=:c AND price_date >= DATE_SUB(CURDATE(), INTERVAL :d DAY)');
            $stmt->execute([':t' => $type, ':c' => $code, ':d' => $days]);
            $results[$type][$code] = ['points' => (int)$stmt->fetchColumn()];
        }
    }

    echo json_encode([
        'action'     => 'history_bootstrap',
        'days'       => $days,
        'elapsed_ms' => round((microtime(true) - $t0) * 1000),
        'results'    => $results,
    ], JSON_PRETTY_PRINT);
    exit;
}

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


// ─── Favorite Assets CRUD ────────────────────────────────────────────────────
if ($action === 'favorite_assets') {
    if ($method === 'GET') {
        $userId = $_GET['user_id'] ?? '';
        if (!$userId) { http_response_code(400); echo json_encode(['error' => 'user_id obrigatório']); exit; }
        $stmt = $pdo->prepare('SELECT * FROM user_favorite_assets WHERE user_id = :uid ORDER BY created_at DESC');
        $stmt->execute([':uid' => $userId]);
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        exit;
    }
    if ($method === 'POST') {
        $body = json_decode(file_get_contents('php://input'), true);
        $uid   = $body['user_id'] ?? '';
        $key   = $body['asset_key'] ?? '';
        $label = $body['asset_label'] ?? '';
        $cat   = $body['asset_category'] ?? '';
        $icon  = $body['asset_icon'] ?? '';
        if (!$uid || !$key || !$label || !$cat) { http_response_code(400); echo json_encode(['error' => 'Dados obrigatórios faltando']); exit; }
        $id = sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x', mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0x0fff)|0x4000,mt_rand(0,0x3fff)|0x8000,mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff));
        $stmt = $pdo->prepare('INSERT IGNORE INTO user_favorite_assets (id, user_id, asset_key, asset_label, asset_category, asset_icon) VALUES (:id, :uid, :key, :label, :cat, :icon)');
        $stmt->execute([':id' => $id, ':uid' => $uid, ':key' => $key, ':label' => $label, ':cat' => $cat, ':icon' => $icon]);
        echo json_encode(['id' => $id, 'user_id' => $uid, 'asset_key' => $key, 'asset_label' => $label, 'asset_category' => $cat, 'asset_icon' => $icon, 'created_at' => date('c')]);
        exit;
    }
    if ($method === 'DELETE') {
        $body = json_decode(file_get_contents('php://input'), true);
        $uid = $body['user_id'] ?? '';
        $key = $body['asset_key'] ?? '';
        if (!$uid || !$key) { http_response_code(400); echo json_encode(['error' => 'user_id e asset_key obrigatórios']); exit; }
        $stmt = $pdo->prepare('DELETE FROM user_favorite_assets WHERE user_id = :uid AND asset_key = :key');
        $stmt->execute([':uid' => $uid, ':key' => $key]);
        echo json_encode(['ok' => true]);
        exit;
    }
}

// ─── User Price Alerts CRUD ──────────────────────────────────────────────────
if ($action === 'price_alerts') {
    if ($method === 'GET') {
        $userId = $_GET['user_id'] ?? '';
        if (!$userId) { http_response_code(400); echo json_encode(['error' => 'user_id obrigatório']); exit; }
        $stmt = $pdo->prepare('SELECT * FROM user_price_alerts WHERE user_id = :uid ORDER BY created_at DESC');
        $stmt->execute([':uid' => $userId]);
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        exit;
    }
    if ($method === 'POST') {
        $body = json_decode(file_get_contents('php://input'), true);
        $uid   = $body['user_id'] ?? '';
        $key   = $body['asset_key'] ?? '';
        $label = $body['asset_label'] ?? '';
        $dir   = $body['direction'] ?? '';
        $thresh = $body['threshold'] ?? 0;
        if (!$uid || !$key || !$label || !in_array($dir, ['above','below']) || $thresh <= 0) {
            http_response_code(400); echo json_encode(['error' => 'Dados inválidos']); exit;
        }
        $id = sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x', mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0x0fff)|0x4000,mt_rand(0,0x3fff)|0x8000,mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff));
        $stmt = $pdo->prepare('INSERT INTO user_price_alerts (id, user_id, asset_key, asset_label, direction, threshold) VALUES (:id, :uid, :key, :label, :dir, :thresh)');
        $stmt->execute([':id' => $id, ':uid' => $uid, ':key' => $key, ':label' => $label, ':dir' => $dir, ':thresh' => $thresh]);
        echo json_encode(['id' => $id, 'user_id' => $uid, 'asset_key' => $key, 'asset_label' => $label, 'direction' => $dir, 'threshold' => (float)$thresh, 'enabled' => true]);
        exit;
    }
    if ($method === 'PUT') {
        $body = json_decode(file_get_contents('php://input'), true);
        $id  = $body['id'] ?? '';
        $uid = $body['user_id'] ?? '';
        $enabled = isset($body['enabled']) ? ($body['enabled'] ? 1 : 0) : null;
        if (!$id || !$uid) { http_response_code(400); echo json_encode(['error' => 'id e user_id obrigatórios']); exit; }
        if ($enabled !== null) {
            $stmt = $pdo->prepare('UPDATE user_price_alerts SET enabled = :en WHERE id = :id AND user_id = :uid');
            $stmt->execute([':en' => $enabled, ':id' => $id, ':uid' => $uid]);
        }
        echo json_encode(['ok' => true]);
        exit;
    }
    if ($method === 'DELETE') {
        $body = json_decode(file_get_contents('php://input'), true);
        $id  = $body['id'] ?? '';
        $uid = $body['user_id'] ?? '';
        if (!$id || !$uid) { http_response_code(400); echo json_encode(['error' => 'id e user_id obrigatórios']); exit; }
        $stmt = $pdo->prepare('DELETE FROM user_price_alerts WHERE id = :id AND user_id = :uid');
        $stmt->execute([':id' => $id, ':uid' => $uid]);
        echo json_encode(['ok' => true]);
        exit;
    }
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

CREATE TABLE IF NOT EXISTS user_price_alerts (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    asset_key VARCHAR(50) NOT NULL,
    asset_label VARCHAR(100) NOT NULL,
    direction ENUM('above','below') NOT NULL,
    threshold DECIMAL(18,4) NOT NULL,
    enabled TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_alerts (user_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS user_favorite_assets (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    asset_key VARCHAR(50) NOT NULL,
    asset_label VARCHAR(100) NOT NULL,
    asset_category VARCHAR(30) NOT NULL,
    asset_icon VARCHAR(10) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_user_asset (user_id, asset_key),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

*/

// Já foi adicionado acima — esse bloco é reservado para append via script

