const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.NODE_PORT || 3000;

app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.get('/', (req, res) => {
    res.json({
        message: "Hello from NodeJS with Postgres app! :-)",
        timestamp: new Date().toISOString()
    });
});

app.get('/health', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT NOW() as current_time');

        client.release();

        res.json({
            status: 'OK',
            database: 'connected',
            current_time: result.rows[0].current_time
        });
    } catch (error) {
        res.json({
            status: 'ERROR',
            database: 'disconnected',
            error: error.message
        });
    }
});

app.get('/init-db', async(req, res) => {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        await client.query(`
            INSERT INTO users (name, email)
            VALUES ('Vasia', 'vasia@mail.com')
            ON CONFLICT DO NOTHING
        `);

        await client.release();

        res.json({
            message: 'База данных инициализирована успешно'
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.get('/users', async(req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users;');
        client.release();

        res.json({
            users: result.rows,
            count: result.rowCount
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log('🟢', `Приложение запущено на порту ${port}`);
});
