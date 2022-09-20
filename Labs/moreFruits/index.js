// ------ instantiate express app
require('dotenv').config()

const express = require('express')

const app = express();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


// informs application that env variables are present and links them to it

const fruits = require('./models/fruits')


// --------- Middleware

app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

//-------- Routes

app.get('/fruits', (req, res) =>{
    res.render('Index', {fruits})
})

app.get('/fruits/new', (req, res) => {
    res.render('New');
});

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
    res.redirect('localhost:5000/fruits'); //send the user back to /fruits
});



app.get('/fruits/:indexOfFruitsArray', (req, res) =>{
    res.render('Show', {fruit: fruits[req.params.indexOfFruitsArray]})
})

//--- [Show - GET]  allows each instance in dataset to be assigned an id

app.listen(5000, () => {
    console.log('Listening on PORT 5000')
})