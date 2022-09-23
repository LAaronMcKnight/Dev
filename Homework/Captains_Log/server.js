// ---------------------------------------- initialize server ----------------
const express = require('express')

const app = express()

// ---------------------------------------- require dependencies ------------

const mongoose = require('mongoose')

// connect to ENV variables
require('dotenv').config()

const methodOverride = require('method-override')

// initialize view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//
// ----------------------------------------- middleware ------------
//

//enable body parser
app.use(express.urlencoded({extended: false}))

app.use(methodOverride("_method"))

app.use((req, res, next) => {
    console.log("I run on all routes")
    next()
})

// 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

  // ------------------------------------------ routes ----------


    app.get('/new', (req, res) => {
        res.render('New')
    })









// ------------------------------------------------//

app.listen(4000, () => {
    console.log("Listening on Port 4000")
})