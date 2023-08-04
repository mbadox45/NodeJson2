const express = require('express');
// const bodyParser = require('body-parser');
const { Pool } = require('pg');

// Configure the PostgreSQL connection
const connectionString = "postgres://default:C5Iq9zgUcRbk@ep-green-surf-743146.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb";

const pool = new Pool({
  connectionString: connectionString,
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results.rows);
        }
    });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(201).json({ message: 'User created successfully' });
        }
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
