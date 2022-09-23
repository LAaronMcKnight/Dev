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

//

const Log = require('./models/logs')

  // ------------------------------------------ routes ----------


    app.get('/', (req, res) => {
        res.render('Index')
    })

    app.get('/new', (req, res) => {
        res.render('New')
    })

    app.get('/logs', (req, res) => {
        Log.find({}, (err, captainLogs) => {
            console.log(err)

            res.render('Show', {
                logs: captainLogs
            })
        })
    })

    app.get('/logs/:id/edit', (req, res) => {
        Log.findById(req.params.id, (err, foundLog) => {
            console.log(err)
            if (!err) {
                res.render("Edit", {
                    log: foundLog,
                })
            } else {
                res.send('Error')
            }
        })
    })

    app.get('/seed', (req, res) => {
        Log.create([
            {
                title: 'Log 1 - 3/18/2092 -- Successful take-off',
                entry: 'Today we successfully launched Karibo-15 into orbit. We will miss our home on Mars, but our research is vital.',
                shipIsBroken: false
            },
            {
                title: 'Log 2 - 3/19/2092 -- Getting adjusted',
                entry: 'Zero gravity is exciting.',
                shipIsBroken: false
            }
        ], (err, data) => {
            res.redirect('/')
        })
    })








// ------------------------------------------------//

app.listen(4000, () => {
    console.log("Listening on Port 4000")
})