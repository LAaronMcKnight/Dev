const express = require('express');

const app = express();

const pokemon = require('./models/pokemon')

app.get('/pokemon', (req, res) =>{
    res.send(pokemon)
})

app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})


app.listen(3000, ()=>{
    console.log('Listening on PORT 3000')
})