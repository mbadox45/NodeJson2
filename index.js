const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
    res.status(200).send({code:200, status: true, msg: "Hello"});
});

app.get('/test', (req, res) => {
  res.status(200).send({code:200, status: true, msg: "Test"});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;