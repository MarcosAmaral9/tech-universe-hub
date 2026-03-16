<?php
/**
 * Google OAuth Callback — arquivo separado para evitar conflito com .htaccess/SPA
 * URL de redirect no Google Cloud Console: https://viciocode.com/google-auth.php
 */

ini_set('display_errors', '0');
error_reporting(0);

// Carrega credenciais do .env.php
$GOOGLE_CLIENT_ID = '';
$GOOGLE_SECRET    = '';
$DB_HOST = 'localhost';
$DB_NAME = 'u980153444_Viciocode';
$DB_USER = 'u980153444_viciocode';
$DB_PASS = 'b^0xFECWjX';

$_env_file = __DIR__ . '/.env.php';
if (file_exists($_env_file)) {
    include $_env_file;
}

define('SITE_URL', 'https://viciocode.com');

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

// 1. Trocar code por access_token
$redirect_uri  = SITE_URL . '/google-auth.php';
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
