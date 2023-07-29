const express = require('express');
var path = require('path');
const fs = require('fs');
const app = express();
var filename = path.basename(__filename);
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/api/users', usersRouter);

// Read data from the JSON file
// const readData = () => {
    //     const rawData = fs.readFileSync('./data/book.json');
    //     return JSON.parse(rawData);
    // };
    
app.get('/', (req, res) => {
    console.log(filename);
    res.status(200).send({code:200, status: true, msg: "Hello"});
});

app.get('/test', (req, res) => {
    res.status(200).send({code:200, status: true, msg: "Test"});
});

app.get('/user', (req, res) => {
    fs.readFile('data/users.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return res.status(500).send({ error: 'Server Error' });
        }
    
        try {
            const users = JSON.parse(data);
            res.status(200).send(users);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(500).send({ error: 'Server Error' });
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;