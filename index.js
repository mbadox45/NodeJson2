const express = require('express');
var path = require('path');
const fs = require('fs');
const app = express();
// const usersRouter = require('./routes/users');

app.use(express.json());
const route = require('./src/routes/users')
route(app);
// app.use('/api/users', usersRouter);

// // Read data from the JSON file
// app.get('/', (req, res) => {
//     const filePath = path.join(process.cwd(), 'data', 'users.json');
//     console.log(filePath);
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           return res.status(500).json({ code: 500, status: false, message: 'Internal server error' });
//         }
    
//         try {
//           const jsonData = JSON.parse(data);
//           return res.status(200).json({ code: 200, status: true, data: jsonData });
//         } catch (parseErr) {
//           console.error('Error parsing JSON:', parseErr);
//           return res.status(500).json({ code: 500, status: false, message: 'Error parsing JSON' });
//         }
//     });
// });

// app.get('/test', (req, res) => {
//     res.status(200).send({code:200, status: true, msg: "Test"});
// });

// app.get('/books', (req, res) => {
//     const filePath = path.join(process.cwd(), 'data', 'book.json');
//     console.log(filePath);
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//           console.error('Error reading file:', err);
//           return res.status(500).json({ code: 500, status: false, message: 'Internal server error' });
//         }
    
//         try {
//           const jsonData = JSON.parse(data);
//           return res.status(200).json({ code: 200, status: true, data: jsonData });
//         } catch (parseErr) {
//           console.error('Error parsing JSON:', parseErr);
//           return res.status(500).json({ code: 500, status: false, message: 'Error parsing JSON' });
//         }
//     });
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
