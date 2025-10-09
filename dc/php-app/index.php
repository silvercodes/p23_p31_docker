<?php

header('Content-Type: application/json');

// DB configuration
$host = getenv('POSTGRES_HOST') ?: 'postgres-db';
$dbname = getenv('POSTGRES_DB') ?: 'php_app';
$user = getenv('POSTGRES_USER') ?: 'root';
$password = getenv('POSTGRES_PASSWORD') ?: 'rootpassword';

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$path = trim($_SERVER['PATH_INFO'] ?? '', '/')

switch ($method) {
    case 'GET':

        break;
    case 'POST':
        
        break;
    case 'PUT':

        break;
    case 'DELETE':

        break;
    default:

        break;
}

