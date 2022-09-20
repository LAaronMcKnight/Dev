const express = require('express');

const app = express();

const PORT = 3000

app.set("view engine", "jsx")
app.engine("jsx", require ("express-react-views").createEngine())

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

const pokemon = require('./models/pokemon')

app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

// app.get('/pokemon', (req, res) =>{
//     res.render('Show', {pokemon: pokemon})
// })

app.get('/pokemon', (req, res) =>{
    res.render('Index', {pokemon: pokemon})
})

app.get('/pokemon/new', (req, res) =>{
    res.render('New');
})

app.post('/pokemon', (req, res) =>{
    pokemon.push(req.body)
    console.log(pokemon)
    res.send('Pokemon added!')
    res.redirect('http://localhost:3000/pokemon/')
})

app.get('/pokemon/:i', (req, res) =>{
    res.render('Show', {pokemon: pokemon[req.params.i]})
})

app.delete('/pokemon/:i', (req, res) =>{
    res.send('deleting...')
    
})



app.listen(3000, ()=>{
    console.log('Listening on PORT 3000')
})