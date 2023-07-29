const express = require('express');
const fs = require('fs');
const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/api/users', usersRouter);

// Read data from the JSON file
const readData = () => {
    const rawData = fs.readFileSync('./data/book.json');
    return JSON.parse(rawData);
};

app.get('/', (req, res) => {
    res.status(200).send({code:200, status: true, msg: "Hello"});
});

app.get('/test', (req, res) => {
    res.status(200).send({code:200, status: true, msg: "Test"});
});

app.get('/book', (req, res) => {
    try {
        const data = readData();
        res.status(200).json({status:true,code:200,data:data.books});
    } catch (error) {
        res.status(500).json({status:false,code:500,msg:"Error"});
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;