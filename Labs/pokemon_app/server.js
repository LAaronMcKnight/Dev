const express = require('express');

const app = express();

const PORT = 3000

app.set("view engine", "jsx")
app.engine("jsx", require ("express-react-views").createEngine())

const pokemon = require('./models/pokemon')

app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) =>{
    res.render('Index.jsx')
})



app.listen(3000, ()=>{
    console.log('Listening on PORT 3000')
})