const express = require('express');
const app = express();

const fruits = require('./models/fruits.js')
// const moreFruits = require('./models/fruits.js')




app.get('/fruits/', (req, res) =>{
    res.send(fruits);
    res.send(moreFruits);
})

// app.get('/moreFruits/', (req, res) =>{
//     res.send(moreFruits)
// })

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});


app.listen(3000, ()=>{
    console.log('Listening on PORT 3000')
})