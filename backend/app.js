const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 5000;

// Wait for database to be ready
const connectWithRetry = () => {
  const dbClient = new Client({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'testdb',
    port: process.env.DB_PORT || 5432,
  });

  dbClient.connect()
    .then(() => {
      console.log('Connected to Postgres');
      
      app.get('/api', async (req, res) => {
        try {
          const result = await dbClient.query('SELECT NOW() AS time');
          res.send(`Hello from Express + Postgres! Server time: ${result.rows[0].time}`);
        } catch (err) {
          console.error('DB query error:', err);
          res.status(500).send('Database error');
        }
      });

      app.listen(port, () => {
        console.log(`Backend listening at http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.error('Failed to connect to Postgres, retrying in 5 seconds...', err.message);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();