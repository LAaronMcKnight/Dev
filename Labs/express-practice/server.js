const express = require('express');

const app = express();

app.set('view engine', 'ejs');


const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', 'Witches Butter'];


app.get('/home', (req, res)=>{
    res.render('home.ejs')
})

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/about', (req, res)=>{
    res.render('about.ejs')
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})

app.get('/:indexOfPlantsArray', (req, res)=>{
    res.send (plants[req.params.indexOfPlantsArray])
    
    res.render('index.ejs')
})