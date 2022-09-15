const express = require('express')

const app = express()

//Greeting
app.get('/greeting/:name', (req, res) =>{
    res.send(`Hello ${[req.params.name]}`)
})


app.get ('/tip/:total/:tipPercentage', (req, res)=>{
    res.send(`The tip for a bill totalling $${req.params.total} with a tip of ${req.params.tipPercentage}% is $${req.params.total / 100 * req.params.tipPercentage}`)
})




//=======================================================//
app.listen(5000, ()=>{
    console.log('Listening on PORT 5000')
})