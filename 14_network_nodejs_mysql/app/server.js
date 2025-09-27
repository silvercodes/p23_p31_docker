const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

// Конфигурация подключения к БД
const dbConfig = {
    host: 'mysql-db',    // Использовать имя контейнера с БД
    user: 'appuser',
    password: 'userpassword',
    database: 'test_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

app.get('/', async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const [rows] = await conn.execute('SELECT * FROM users');

        conn.release();

        res.json({
            success: true,
            data: rows,
            message: 'Data fetched successfully from MySQL'

        });
    } catch (error) {
        console.error('Database error: ', error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

app.get('/health', async (req, res) => {
    try {
        const conn = await pool.getConnection();

        await conn.ping();

        conn.release();

        res.json({
            status: 'OK',
            database: 'connected'

        });
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            database: 'disconnected',
            error: error.message            
        });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log('🟢', `Server started at http://0.0.0.0:${port}`);
});
