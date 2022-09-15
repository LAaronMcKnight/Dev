const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const pages = ['about.js', 'bobross.js', 'careers.js', 'cereal.ejs', 'history.ejs', 'home.ejs', 'home.ejs', 'index.ejs', 'locations.ejs', 'location.ejs', 'phones.ejs', 'wow.ejs']

// Figure out how to dynamically add links to each page, that link to the other pages


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

app.get('/bobross', (req, res)=>{
    res.render('bobross.ejs')
})

app.get('careers', (req, res)=>{
    res.render('careers.ejs')
})

app.get('/cereal', (req, res)=>{
    res.render('cereal.ejs')
})

app.get('/history', (req, res)=>{
    res.render('history.ejs')
})

app.get('/locations', (req, res)=>{
    res.render('locations.ejs')
})

app.get('/phones', (req, res)=>{
    res.render('phones.ejs')
})

app.get('/wow', (req, res)=>{
    res.render('wow.ejs')
})



app.get('/:indexOfPlantsArray', (req, res)=>{
    res.send (plants[req.params.indexOfPlantsArray])
    
    res.render('index.ejs')
})



app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})

console.log('hi')