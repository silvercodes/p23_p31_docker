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
$path = trim($_SERVER['PATH_INFO'] ?? '', '/');

switch ($method) {
    case 'GET':
        if ($path === 'tasks') {
            $stmt = $pdo->query('SELECT * FROM tasks ORDER BY created_at DESC');
            $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($tasks);
        } elseif (preg_match('#^tasks/(\d+)$#', $path, $matches)) {
            $id = $matches[1];
            $stmt = $pdo->prepare('SELECT * FROM tasks WHERE id = ?');
            $stmt->execute([$id]);
            $task = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($task) {
                echo json_encode($task);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Task not found']);
            }
        }
        break;
    case 'POST':
        if ($path === 'tasks') {
            $input = json_decode(file_get_contents('php://input'), true);

            $title = $input['title'] ?? '';
            $description = $input['description'] ?? '';

            if (empty($title)) {
                http_response_code(400);
                echo json_encode(['error' => 'Title is required']);
                break;
            }

            $stmt = $pdo->prepare("INSERT INTO tasks (title, description) VALUES(?, ?)");
            $stmt->execute([$title, $description]);
            $taskId = $pdo->lastInsertId();

            http_response_code(201);
            echo json_encode(['message' => 'Task created', 'id' => $taskId]);
        }
        break;
    case 'PUT':
        if (preg_match('#^tasks/(\d+)$#', $path, $matches)) {
            $id = $matches[1];
            $input = json_decode(file_get_contents('php://input'), true);

            $title = $input['title'] ?? '';
            $description = $input['description'] ?? '';
            $completed = $input['completed'] ?? false;

            $stmt = $pdo->prepare('UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?');
            $stmt->execute([$title, $description, $completed ? 't' : 'f', $id]);

            echo json_encode(['message' => 'Task updated']);
        }
        break;
    case 'DELETE':
        if (preg_match('#^tasks/(\d+)$#', $path, $matches)) {
            $id = $matches[1];

            $stmt = $pdo->prepare('DELETE FROM tasks WHERE id = ?');
            $stmt->execute([$id]);

            echo json_encode(['message' => 'Task deleted']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => "Method not allowed"]);
        break;
}

