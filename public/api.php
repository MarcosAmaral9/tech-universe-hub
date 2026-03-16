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

// ========== CHAVES DE API (Painel Social + Google OAuth) ==========
// Crie/edite o arquivo /public_html/.env.php na Hostinger com o conteúdo:
//   <?php
//   $GEMINI_KEY       = 'AIza...';  // aistudio.google.com — gratuito, sem cartão
//   $GOOGLE_CLIENT_ID = 'XXXXXXX.apps.googleusercontent.com';
//   $GOOGLE_SECRET    = 'GOCSPX-...';
$GEMINI_KEY       = '';
$GOOGLE_CLIENT_ID = '';
$GOOGLE_SECRET    = '';
$_env_file = __DIR__ . '/.env.php';
if (file_exists($_env_file)) {
    include $_env_file; // define $GEMINI_KEY, $GOOGLE_CLIENT_ID, $GOOGLE_SECRET
}
// =================================================================

// URL base do site (usada no redirect_uri do OAuth)
define('SITE_URL', 'https://viciocode.com');

// Diretório para avatars (relativo à raiz pública)
define('AVATAR_DIR', __DIR__ . '/avatars/');
define('AVATAR_URL', '/avatars/');

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';


// ─── Helper: fetch HTTP com curl (preferido) ou file_get_contents ─────────────
function httpGet(string $url, int $timeout = 10): ?string {
    // Tenta curl primeiro (mais confiável no Hostinger)
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => $timeout,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_USERAGENT      => 'VicioCode/1.0',
            CURLOPT_HTTPHEADER     => ['Accept: application/json'],
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
        $ctx = stream_context_create(['http' => [
            'timeout'       => $timeout,
            'ignore_errors' => true,
            'header'        => "Accept: application/json\r\nUser-Agent: VicioCode/1.0\r\n",
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

// ─── GET: diagnóstico — não precisa de banco ──────────────────────────────────
if ($method === 'GET' && $action === 'ping') {
    $cacheDir = __DIR__ . '/cache';
    @mkdir($cacheDir, 0755, true);

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

    echo json_encode([
        'status'          => 'ok',
        'php'             => PHP_VERSION,
        'time'            => date('Y-m-d H:i:s'),
        'pdo_mysql'       => extension_loaded('pdo_mysql') ? 'disponível' : 'AUSENTE',
        'curl'            => function_exists('curl_init') ? 'disponível' : 'AUSENTE',
        'allow_url_fopen' => ini_get('allow_url_fopen') ? 'ativado' : 'desativado',
        'cache_dir'       => is_writable(cacheDir()) ? 'gravável' : 'SEM PERMISSÃO',
        'env_file'        => file_exists(__DIR__ . '/.env.php') ? 'encontrado' : 'NÃO encontrado',
        'env_file_path'   => __DIR__ . '/.env.php',
        'google_key'      => !empty($GOOGLE_CLIENT_ID) ? 'configurado' : 'NÃO configurado',
        'gemini'          => !empty($GEMINI_KEY) ? 'configurado' : 'NÃO configurado',
        'database'        => $dbStatus,
        'tables'          => $tables,
    ]);
    exit;
}

// ─── GET: proxy de câmbio + metais ───────────────────────────────────────────
if ($method === 'GET' && $action === 'rates') {
    $CACHE_FILE = cacheDir() . '/viciocode_rates.json';
    $CACHE_TTL  = 300; // 5 min

    if (file_exists($CACHE_FILE) && (time() - filemtime($CACHE_FILE)) < $CACHE_TTL) {
        $cached = file_get_contents($CACHE_FILE);
        if ($cached) { echo $cached; exit; }
    }

    $raw    = httpGet('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,ARS-BRL,PYG-BRL,XAU-BRL,XAG-BRL');
    $result = [];
    if ($raw) {
        $data = json_decode($raw, true);
        if ($data) {
            foreach (['USDBRL','EURBRL','ARSBRL','PYGBRL','XAUBRL','XAGBRL'] as $key) {
                if (!empty($data[$key])) {
                    $result[$key] = [
                        'bid'       => $data[$key]['bid'],
                        'pctChange' => $data[$key]['pctChange'],
                        'high'      => $data[$key]['high'],
                        'low'       => $data[$key]['low'],
                    ];
                }
            }
        }
    }

    if (empty($result)) {
        http_response_code(503);
        echo json_encode(['error' => 'Dados de câmbio indisponíveis', 'curl' => function_exists('curl_init'), 'allow_url_fopen' => (bool)ini_get('allow_url_fopen')]);
        exit;
    }

    $result['_meta'] = ['source' => 'awesomeapi-proxy', 'fallback' => false, 'updatedAt' => date('c')];
    $json = json_encode($result);
    @file_put_contents($CACHE_FILE, $json);
    echo $json;
    exit;
}

// ─── GET: proxy criptomoedas — CoinGecko ─────────────────────────────────────
if ($method === 'GET' && $action === 'crypto') {
    $CACHE_FILE = cacheDir() . '/viciocode_crypto.json';
    $CACHE_TTL  = 300; // 5 min

    if (file_exists($CACHE_FILE) && (time() - filemtime($CACHE_FILE)) < $CACHE_TTL) {
        $cached = file_get_contents($CACHE_FILE);
        if ($cached) { echo $cached; exit; }
    }

    $raw  = httpGet('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=8&page=1&sparkline=false');
    $data = $raw ? json_decode($raw, true) : null;

    if (is_array($data) && count($data) > 0) {
        $result = ['coins' => $data, '_meta' => ['source' => 'coingecko-proxy', 'updatedAt' => date('c')]];
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
if ($method === 'GET' && $action === 'b3') {
    $CACHE_FILE = cacheDir() . '/viciocode_b3.json';
    $CACHE_TTL  = 180; // 3 min

    if (file_exists($CACHE_FILE) && (time() - filemtime($CACHE_FILE)) < $CACHE_TTL) {
        $cached = file_get_contents($CACHE_FILE);
        if ($cached) { echo $cached; exit; }
    }

    $raw  = httpGet('https://brapi.dev/api/quote/PETR4,VALE3,ITUB4,BBDC4,ABEV3,WEGE3,BBAS3,RENT3,MGLU3,SUZB3?fundamental=false');
    $data = $raw ? json_decode($raw, true) : null;

    if (!empty($data['results']) && count($data['results']) > 0) {
        $result = ['results' => $data['results'], '_meta' => ['source' => 'brapi-proxy', 'updatedAt' => date('c')]];
        $json   = json_encode($result);
        @file_put_contents($CACHE_FILE, $json);
        echo $json;
        exit;
    }

    http_response_code(503);
    echo json_encode(['error' => 'Dados B3 indisponíveis', 'curl' => function_exists('curl_init'), 'allow_url_fopen' => (bool)ini_get('allow_url_fopen')]);
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
// ─── POST: proxy Anthropic API (Painel Social Media) ─────────────────────────
// Chamado apenas pelo admin — não expõe a chave ao browser
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

if ($method === 'POST' && $action === 'generate_social') {

    // Gemini API (Google AI Studio) — gratuito, sem cartão de crédito
    // Obtenha sua chave em: aistudio.google.com
    if (!$GEMINI_KEY) {
        http_response_code(503);
        echo json_encode(['error' => 'Chave do Gemini não configurada. Adicione $GEMINI_KEY no .env.php. Obtenha grátis em aistudio.google.com']);
        exit;
    }

    $body     = json_decode(file_get_contents('php://input'), true);
    $title    = trim($body['title']    ?? '');
    $excerpt  = trim($body['excerpt']  ?? '');
    $category = trim($body['category'] ?? '');
    $platform = trim($body['platform'] ?? 'instagram');
    $genImage = !empty($body['generateImage']);
    $genMusic = !empty($body['suggestMusic']);

    if (!$title || !$excerpt) {
        http_response_code(400);
        echo json_encode(['error' => 'title e excerpt são obrigatórios']);
        exit;
    }

    $imageField  = $genImage ? '"image":"prompt de imagem para criar com IA"' : '"image":null';
    $musicField  = $genMusic ? ',"musicSuggestion":"artista - música sugerida"' : '';
    $imagePrompt = $genImage ? "\nSugira também um prompt de imagem para criar com IA." : '';
    $musicPrompt = $genMusic ? "\nSugira uma música de fundo adequada." : '';

    $prompt = "Você é um especialista em marketing digital e redes sociais brasileiro.\n"
            . "Crie conteúdo para {$platform} sobre o artigo \"{$title}\" (categoria: {$category}).\n"
            . "Resumo do artigo: {$excerpt}\n"
            . ($imagePrompt ? $imagePrompt . "\n" : "")
            . ($musicPrompt ? $musicPrompt . "\n" : "")
            . "\nRETORNE APENAS O JSON ABAIXO, SEM NENHUM TEXTO ANTES OU DEPOIS, SEM MARKDOWN:\n"
            . "{\"caption\":\"legenda engajante em português\",\"hashtags\":[\"hashtag1\",\"hashtag2\",\"hashtag3\"],\"cta\":\"chamada para ação\",\"hookLine\":\"frase de gancho para capturar atenção\",{$imageField}{$musicField}}";

    $payload = json_encode([
        'contents' => [['parts' => [['text' => $prompt]]]],
        'generationConfig' => [
            'maxOutputTokens'  => 1000,
            'temperature'      => 0.8,
            'responseMimeType' => 'application/json',
        ],
    ]);

    // gemini-2.0-flash — modelo estável e gratuito (1.500 req/dia)
    // gemini-1.5-flash: 15 req/min, 1.500 req/dia — limite maior que 2.0-flash no free tier
    $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={$GEMINI_KEY}";
    $raw = null;

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        ]);
        $raw = curl_exec($ch);
        $curlError = curl_error($ch);
        curl_close($ch);
    } elseif (ini_get('allow_url_fopen')) {
        $ctx = stream_context_create(['http' => [
            'method'        => 'POST',
            'header'        => "Content-Type: application/json\r\n",
            'content'       => $payload,
            'timeout'       => 30,
            'ignore_errors' => true,
        ]]);
        $raw = @file_get_contents($url, false, $ctx);
    }

    if (!$raw) {
        http_response_code(503);
        echo json_encode(['error' => 'Falha ao conectar com o Gemini. Verifique se a chave está correta no .env.php.', 'curl_error' => $curlError ?? '']);
        exit;
    }

    $resp = json_decode($raw, true);

    if (!empty($resp['error'])) {
        http_response_code(502);
        echo json_encode(['error' => $resp['error']['message'] ?? 'Erro na API Gemini', 'status' => $resp['error']['status'] ?? '']);
        exit;
    }

    $text = $resp['candidates'][0]['content']['parts'][0]['text'] ?? '';

    // Extrai JSON da resposta — remove markdown e texto extra ao redor
    $text = preg_replace('/^```(?:json)?\s*/m', '', $text);
    $text = preg_replace('/\s*```\s*$/m', '', $text);
    $text = trim($text);

    // Tenta encontrar o bloco JSON mesmo que haja texto antes/depois
    if (!str_starts_with($text, '{')) {
        preg_match('/\{.*\}/s', $text, $matches);
        $text = $matches[0] ?? $text;
    }

    $parsed = json_decode($text, true);
    if (!$parsed) {
        // Tenta novamente com resposta mais simples
        http_response_code(502);
        echo json_encode(['error' => 'O Gemini não retornou JSON válido. Tente novamente.', 'raw' => substr($text, 0, 300)]);
        exit;
    }

    echo json_encode($parsed);
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

// ─── GET: callback do Google (troca code por token, cria/loga usuário) ─────────
if ($method === 'GET' && $action === 'google_callback') {
    $code  = $_GET['code']  ?? '';
    $error = $_GET['error'] ?? '';

    if ($error || !$code) {
        header('Location: ' . SITE_URL . '/entrar?google_error=cancelled');
        exit;
    }

    if (!$GOOGLE_CLIENT_ID || !$GOOGLE_SECRET) {
        header('Location: ' . SITE_URL . '/entrar?google_error=not_configured');
        exit;
    }

    // 1. Trocar code por access_token (usa curl — mais confiável que file_get_contents para POST)
    $redirect_uri  = SITE_URL . '/auth/google';
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
            CURLOPT_TIMEOUT        => 10,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_HTTPHEADER     => ['Content-Type: application/x-www-form-urlencoded'],
        ]);
        $tokenRaw = curl_exec($ch);
        curl_close($ch);
    } elseif (ini_get('allow_url_fopen')) {
        $ctx = stream_context_create(['http' => [
            'method'  => 'POST',
            'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $tokenPostData,
            'timeout' => 10,
            'ignore_errors' => true,
        ]]);
        $tokenRaw = @file_get_contents('https://oauth2.googleapis.com/token', false, $ctx);
    }

    $tokenData = $tokenRaw ? json_decode($tokenRaw, true) : null;
    if (!$tokenData || empty($tokenData['access_token'])) {
        header('Location: ' . SITE_URL . '/entrar?google_error=token_failed');
        exit;
    }

    // 2. Buscar informações do usuário (usa curl)
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
    } elseif (ini_get('allow_url_fopen')) {
        $ctx2 = stream_context_create(['http' => [
            'header'  => 'Authorization: Bearer ' . $tokenData['access_token'] . "\r\n",
            'timeout' => 10,
            'ignore_errors' => true,
        ]]);
        $userInfoRaw = @file_get_contents('https://www.googleapis.com/oauth2/v3/userinfo', false, $ctx2);
    }

    $googleUser = $userInfoRaw ? json_decode($userInfoRaw, true) : null;
    if (!$googleUser || empty($googleUser['email'])) {
        header('Location: ' . SITE_URL . '/entrar?google_error=userinfo_failed');
        exit;
    }

    $googleId  = $googleUser['sub'];
    $email     = $googleUser['email'];
    $name      = $googleUser['name'] ?? explode('@', $email)[0];
    $avatarUrl = $googleUser['picture'] ?? null;

    // 3. Criar ou encontrar o usuário no banco
    try {
        $pdo = new PDO(
            "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
            $DB_USER, $DB_PASS,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );

        // Busca por google_id primeiro, depois por email
        $stmt = $pdo->prepare('SELECT id, email FROM users WHERE google_id = :gid OR email = :email LIMIT 1');
        $stmt->execute([':gid' => $googleId, ':email' => $email]);
        $existing = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($existing) {
            $userId = $existing['id'];
            // Atualiza google_id se ainda não estava associado
            $pdo->prepare('UPDATE users SET google_id = :gid WHERE id = :id AND google_id IS NULL')
                ->execute([':gid' => $googleId, ':id' => $userId]);
        } else {
            // Cria novo usuário (sem senha — apenas OAuth)
            $userId = bin2hex(random_bytes(16));
            $pdo->prepare('INSERT INTO users (id, email, password_hash, google_id) VALUES (:id, :email, :hash, :gid)')
                ->execute([':id' => $userId, ':email' => $email, ':hash' => '', ':gid' => $googleId]);

            // Cria perfil
            $nickname = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', explode(' ', $name)[0]));
            $nickname = $nickname ?: 'usuario' . substr($userId, 0, 6);
            $pdo->prepare('INSERT INTO profiles (id, name, nickname, avatar_url) VALUES (:id, :name, :nick, :avatar)')
                ->execute([':id' => $userId, ':name' => $name, ':nick' => $nickname, ':avatar' => $avatarUrl]);
        }

        // 4. Busca o perfil atualizado
        $profileStmt = $pdo->prepare('SELECT * FROM profiles WHERE id = :id');
        $profileStmt->execute([':id' => $userId]);
        $profile = $profileStmt->fetch(PDO::FETCH_ASSOC);
        $profile['notifications_site'] = (bool)($profile['notifications_site'] ?? false);
        $profile['notifications_app']  = (bool)($profile['notifications_app']  ?? false);

        // 5. Monta sessão e redireciona para o frontend
        $sessionData = base64_encode(json_encode([
            'user'    => ['id' => $userId, 'email' => $email],
            'profile' => $profile,
        ]));
        header('Location: ' . SITE_URL . '/entrar?google_session=' . urlencode($sessionData));
        exit;

    } catch (PDOException $e) {
        header('Location: ' . SITE_URL . '/entrar?google_error=db_error');
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

