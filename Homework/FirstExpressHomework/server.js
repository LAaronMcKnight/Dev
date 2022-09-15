const express = require('express')

const app = express()

const eightBallResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

//Greeting
app.get('/greeting/:name', (req, res) =>{
    res.send(`Hello ${[req.params.name]}`)
})


// Magic 8 ball
app.get('/magic/:question', (req, res)=>{
    res.send(`You asked: ${req.params.question}? || The Magic 8 Ball responds: ${eightBallResponse[Math.floor(Math.random() * eightBallResponse.length)]}`)
})



//tip calculator
app.get ('/tip/:total/:tipPercentage', (req, res)=>{
    res.send(`The tip for a bill totalling $${req.params.total} with a tip of ${req.params.tipPercentage}% is $${req.params.total / 100 * req.params.tipPercentage}`)
})    




const isSquare = (number) =>{
    return number > 0 && Math.sqrt(number) % 1 === 0;
}

console.log(isSquare(4))

//attempting fibonacci sequence
app.get('/fibonacci/:number', (req, res)=>{
    if ( isSquare(5 * req.params.number * req.params.number + 4) || isSquare(5 * req.params.number * req.params.number - 4 ) || isSquare(5 * req.params.number * req.params.number + 4) && isSquare(5 * req.params.number * req.params.number - 4 ) ){
        res.send('Fibby')
    }else{
        res.send('not so fibby')
    }
})


//Take one down
app.get('/', (req, res) =>{
    res.send(`99 bottles of beer on the wall, 99 bottles of beer..<br><a href="http://localhost:5000/98"><p>Take one down, pass it around</p></a>`)
})
                
app.get('/:NumberOfBottles', (req, res)=>{
    res.send(`${req.params.NumberOfBottles} bottles of beer on the wall! ${req.params.NumberOfBottles} bottles of beer! <br><a href='http://localhost:5000/${req.params.NumberOfBottles - 1}'><p>Take one down, pass it around</p></a>`)
})


//=======================================================//
app.listen(5000, ()=>{
    console.log('Listening on PORT 5000')
})

console.log(eightBallResponse.length)
console.log(Math.random())
console.log(Math.floor(Math.random() * eightBallResponse.length))