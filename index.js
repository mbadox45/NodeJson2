import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.status(200).json({code:200, status:true, msg: "Hello World"});
});


// Read data from the JSON file
const readData = () => {
    const rawData = fs.readFileSync('./data/book.json');
    return JSON.parse(rawData);
};
  
// Write data to the JSON file
// const writeData = (data) => {
//     fs.writeFileSync('./json/book.json', JSON.stringify(data, null, 2));
// };
  
// Get all books
app.get('/books', (req, res) => {
    const data = readData();
    res.status(200).json({status:true,code:200,data:data.books});
});
  

app.listen(5000, () => {
    console.log('App running di port 5000');
})