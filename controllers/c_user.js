const express = require('express');
var path = require('path');
const fs = require('fs');
const filePath = path.join(process.cwd(), 'data', 'users.json');

const c_user = express();
c_user.use(express.json());

c_user.get('/', (req, res) => {
    console.log(filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            const datas = { code: 500, status: false, message: 'Internal server error' }; 
            return res.status(500).json(datas);
            // return datas
        }
    
        try {
            const jsonData = JSON.parse(data);
            const datas = {code:200, status:true, data:jsonData}
            return res.status(200).json(datas);
            // return datas
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            const datas = { code: 500, status: false, message: 'Error parsing JSON' };
            return res.status(500).json(datas);
            // return datas
        }
    });
});

c_user.get('/:id', (req, res) => {
    const id =  req.params.id;
    console.log(filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            const datas = { code: 500, status: false, message: 'Internal server error' }; 
            return res.status(500).json(datas);
            // return datas
        }
    
        try {
            const jsonData = JSON.parse(data);
            const user = jsonData.find((user) => user.id === id);
            const datas = {code:200, status:true, data:user}
            return res.status(200).json(datas);
            // return datas
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            const datas = { code: 500, status: false, message: 'Error parsing JSON' };
            return res.status(500).json(datas);
            // return datas
        }
    });
});

c_user.post('/', (req, res) => {
    const body =  req.body;
    console.log(filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            const datas = { code: 500, status: false, message: 'Internal server error' }; 
            return res.status(500).json(datas);
            // return datas
        }
    
        try {
            const jsonData = JSON.parse(data);
            const user = jsonData.find((user) => user.id === id);
            const datas = {code:200, status:true, data:user}
            return res.status(200).json(datas);
            // return datas
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            const datas = { code: 500, status: false, message: 'Error parsing JSON' };
            return res.status(500).json(datas);
            // return datas
        }
    });
});

module.exports = c_user;