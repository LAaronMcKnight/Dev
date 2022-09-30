const express = require('express')

const app = express()

//--------------------------------------

const mongoose = require('mongoose')

const Planet = require('./models/planets') // ---------Call Planet Model

const Star = require('./models/stars')

require('dotenv').config()

const methodOverride = require('method-override')

//
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// -------------------------------------------- MIDDLEWARE -------------

app.use(express.urlencoded({extended: false}))

app.use(methodOverride("_method"))

app.use((req, res, next) => {
    console.log("I run on all routes")
    next()
})

app.use(express.static("public"))

//

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once("open", () => {
    console.log("connected to mongodb")
})

//


//


//--------------------------------------------- ROUTES ---------------

app.get('/', (req, res) => {
    res.render('Index')
})

app.get('/planets', (req, res) => {
    Planet.find({}, (err, allPlanets) => {
        console.log(err)

        res.render('Planets', {
            planets: allPlanets
        })
    })
})

app.get('/stars', (req, res) => {
    Star.find({}, (err, allStars) => {
        console.log(err)

        res.render('Stars', {
            stars: allStars
        })
    })
})

//--------------------------------------------------- NEW / Create

app.get('/planets/new', (req, res) => {
  res.render('NewPlanet', {})
})



app.get('/stars/new', (req, res) => {
  res.render('NewStar', {})
})

app.get('/planets/:id/', (req, res) => {
    Planet.findById(req.params.id, (err, foundPlanet) => {
        console.log(err)
        if (!err) {
            res.render('Planet', {
                planet: foundPlanet
            })
        }
    } )
})

// app.get('/planets/:id', (req, res) => {
//     res.render('Planet')
// })

// ------------------------------------------ POST

app.post('/planets', (req, res) => {
    if (req.body.hasRings === "on"){
        req.body.hasRings = true;
    }else{
        req.body.hasRings = false;
    }
    Planet.create(req.body, (err, createdPlanet) => {
        console.log(err)
        console.log("Added: ", createdPlanet)
    })
    res.redirect("/planets")
})

app.post('/stars', (req, res) => {
    Star.create(req.body, (err, createdStar) => {
        console.log(err)
        console.log("Added: ", createdStar)
    })
    res.redirect("/stars")
})

//---------------------------------------------- EDIT
app.get("/planets/:id/edit", (req, res) => {
    Planet.findById(req.params.id, (err, foundPlanet) => {
        console.log(err)
        if (!err) {
            res.render("EditPlanet", {
                planet: foundPlanet,
            })
        }else{
            res.send("Error")
        }
    })
})

app.put("/planets/:id", (req, res) => {
    if (req.body.hasRings === "on"){
        req.body.hasRings = true;
    }else{
        req.body.hasRings = false;
    }
    Planet.findByIdAndUpdate(req.params.id, req.body, (err, updatedPlanet) => {
        console.log(err)
        console.log(updatedPlanet)
        res.redirect('/planets')
    })
})

app.get("/stars/:id/edit", (req, res) => {
    Star.findById(req.params.id, (err, foundStar) => {
        console.log(err)
        if (!err) {
            res.render("EditStar", {
                star: foundStar,
            })
        }else{
            res.send("Error")
        }
    })
})

app.put("/stars/:id", (req, res) => {
    Star.findByIdAndUpdate(req.params.id, req.body, (err, updatedStar) => {
        console.log(err)
        console.log(updatedStar)
        res.redirect('/stars')
    })
})

//---------------------------------------------- DELETE

app.delete("/planets/:id", (req, res) => {
    Planet.findByIdAndRemove(req.params.id, (err) => {
        console.log(err)
        res.redirect("/planets")
    })
})

app.delete("/stars/:id", (req, res) => {
    Star.findByIdAndRemove(req.params.id, (err) => {
        console.log(err)
        res.redirect("/stars")
    })
})






// --------------------------------------//
app.listen('3000', () => {
    console.log("Listening on Port 3000")
})