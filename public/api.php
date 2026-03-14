<?php
/**
 * VICIO<CODE> Comments API
 * Connects to MySQL on Hostinger via phpMyAdmin-managed database.
 *
 * SETUP INSTRUCTIONS:
 * 1. In Hostinger hPanel, go to Databases → MySQL Databases
 * 2. Create a database (e.g. u123456789_viciocode)
 * 3. Create a user and assign it to the database
 * 4. Update the credentials below
 * 5. Run the SQL at the bottom of this file in phpMyAdmin to create the table
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ========== DATABASE CREDENTIALS ==========
// Update these with your Hostinger MySQL credentials
$DB_HOST = 'localhost';
$DB_NAME = 'u123456789_viciocode';  // Change this
$DB_USER = 'u123456789_viciouser';  // Change this
$DB_PASS = 'SuaSenhaAqui';          // Change this
// ==========================================

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

// GET /api.php?action=comments&post_id=xxx
if ($method === 'GET' && $action === 'comments') {
    $postId = $_GET['post_id'] ?? '';
    if (!$postId) {
        http_response_code(400);
        echo json_encode(['error' => 'post_id required']);
        exit;
    }
    $limit = isset($_GET['limit']) ? intval($_GET['limit']) : 100;

    $stmt = $pdo->prepare('SELECT * FROM comments WHERE post_id = :post_id ORDER BY created_at DESC LIMIT :lim');
    $stmt->bindValue(':post_id', $postId, PDO::PARAM_STR);
    $stmt->bindValue(':lim', $limit, PDO::PARAM_INT);
    $stmt->execute();
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

// POST /api.php?action=comments
if ($method === 'POST' && $action === 'comments') {
    $body = json_decode(file_get_contents('php://input'), true);
    $postId = $body['post_id'] ?? '';
    $userId = $body['user_id'] ?? '';
    $authorName = $body['author_name'] ?? '';
    $content = $body['content'] ?? '';

    if (!$postId || !$userId || !$authorName || !$content) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields']);
        exit;
    }

    // Basic sanitization
    $content = htmlspecialchars(strip_tags($content), ENT_QUOTES, 'UTF-8');
    $authorName = htmlspecialchars(strip_tags($authorName), ENT_QUOTES, 'UTF-8');

    if (strlen($content) > 1000) {
        http_response_code(400);
        echo json_encode(['error' => 'Comment too long']);
        exit;
    }

    $id = bin2hex(random_bytes(16));
    $stmt = $pdo->prepare('INSERT INTO comments (id, post_id, user_id, author_name, content) VALUES (:id, :post_id, :user_id, :author_name, :content)');
    $stmt->execute([
        ':id' => $id,
        ':post_id' => $postId,
        ':user_id' => $userId,
        ':author_name' => $authorName,
        ':content' => $content,
    ]);

    echo json_encode(['id' => $id, 'success' => true]);
    exit;
}

// DELETE /api.php?action=comments&id=xxx&user_id=yyy
if ($method === 'DELETE' && $action === 'comments') {
    $id = $_GET['id'] ?? '';
    $userId = $_GET['user_id'] ?? '';

    if (!$id || !$userId) {
        http_response_code(400);
        echo json_encode(['error' => 'id and user_id required']);
        exit;
    }

    // Only allow deleting own comments
    $stmt = $pdo->prepare('DELETE FROM comments WHERE id = :id AND user_id = :user_id');
    $stmt->execute([':id' => $id, ':user_id' => $userId]);

    echo json_encode(['success' => $stmt->rowCount() > 0]);
    exit;
}

http_response_code(404);
echo json_encode(['error' => 'Not found']);

/*
SQL to run in phpMyAdmin to create the comments table:

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
