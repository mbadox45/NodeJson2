import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.status(200).json({code:200, status:true, msg: "Hello World"});
});

app.listen(5000, () => {
    console.log('App running di port 5000');
})