const express = require('express')

const app = express()

//

const mongoose = require("mongoose")

const methodOverride = require('method-override')

require('dotenv').config()

//

app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({extended: false}))

app.use(methodOverride("_method"))

app.use((req, res, next) => {
    console.log('I run on all routes')
    next()
})

//

const Planet = require('./models/planets')

// --------------[Connect] ------------------- //

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

// ----------------[Middleware]------------------ //




// ------------------[Show]---------------------- //




// -----------------[Routes]-------------------- //

app.get('/', (req, res) => {
    res.render('Index')
})


app.listen("5000", () => {
    console.log("Server Active")
})


// -------------[Seeds] ------------- //

app.get('/planets/seed', (req, res) => {
    Planet.create([
        {
            name: 'Jupiter',
            moons: '3.6',
            everVisible: true 
        },
        {
            name: 'Venus',
            moons: '3.2',
            everVisible: true 
        },
        {
            name: 'Neptune',
            moons: '2.4',
            everVisible: true 
        },
    ], (err, data) => {
        res.redirect('/')
    })
})