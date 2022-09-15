const express = require('express')

const app = express()

//Greeting
app.get('/greeting/:name', (req, res) =>{
    res.send(`Hello ${[req.params.name]}`)
})







//=======================================================//
app.listen(5000, ()=>{
    console.log('Listening on PORT 5000')
})