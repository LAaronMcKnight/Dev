// -------------------------[requiring / initializing express] //
const express = require('express')

const app = express()

// ------------------------

const mongoose = require('mongoose')
// ---- Create a Mongo SCHEMA

const Student = require('./models/students')

const methodOverride = require('method-override')
// ---- override setting for CRUD methods

require('dotenv').config()
// ---- Link our ENV variables to our app

app.set('view engine', 'jsx')
// ----------- Creates link to JSX
app.engine('jsx', require('express-react-views').createEngine())
// Links JSX / ReactViews to App

// -------------------------------------------------------- //
// ------------------------[Middleware] ------------------- //
// -------------------------------------------------------- //

app.use(express.urlencoded({extended: false}))
// ------------ Parse Req.Body

app.use(methodOverride("_method"))
// ---------- instantiates methodOverride for CRUD actions

app.use((req, res, next) => {
    console.log('I run on all routes')
    next()
})
// ------- Establishes Middleware Process

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });


// ----------------------[routes]



    // ----------- Index  [C]
    app.get('/students', (req, res) => {
        Student.find({}, (err, allStudents) => {
            console.log(err)

            res.render('Index', {
                students: allStudents
            })
        })
    })



    // ---------- New

    app.get('/students/new', (req, res) => {
        res.render('New', {})
    })

    // ---------- Post
    app.post('/students', (req, res) => {
        if (req.body.isPassing === "on") {
            req.body.isPassing = true;
        }else{
            req.body.isPassing = false;
        }
        Student.create(req.body, (err, createdStudent) => {
            console.log(err)
            console.log("Just Added : ", createdStudent)
        })
        res.redirect('/students')
    })


    // ------------ Edit
    app.get("/students/:id/edit", (req, res) => {
        Student.findById(req.params.id, (err, foundStudent) => {
          //findStudent
        console.log(err)
        if (!err) {
            res.render("Edit", {
            student: foundStudent,
              //pass in the foundStudent so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
        });
    });

    // ------------ Update PUT / PATCH [U]

    app.put("/students/:id", (req, res) => {
        if (req.body.isPassing === "on") {
        req.body.isPassing = true;
        } else {
        req.body.isPassing = false;
        }
        Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
            console.log(err)
        console.log(updatedStudent);
        res.redirect(`/students/${req.params.id}`);
        });
    });

    // ------------ Delete [D]
    app.delete("/students/:id", (req, res) => {
        Student.findByIdAndRemove(req.params.id, (err) => {
            console.log(err)
            res.redirect("/students")
        })
    })


    // ------------- Seeds*

    app.get('/students/seed', (req, res) => {
        Student.create([
            {
                name: 'John',
                gpa: '3.6',
                isPassing: true 
            },
            {
                name: 'Ringo',
                gpa: '3.2',
                isPassing: true 
            },
            {
                name: 'Paul',
                gpa: '2.4',
                isPassing: true 
            },
        ], (err, data) => {
            res.redirect('/students')
        })
    })





    // ------------- Show  [R]
    app.get("/students/:id", (req, res) => {
        Student.findById()
    })





// ---------------------------
app.listen('3000', () => {
    console.log("Listening on port 3000")
})