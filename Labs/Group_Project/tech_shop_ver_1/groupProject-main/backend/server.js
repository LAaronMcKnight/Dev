const express = require('express')

const path = require('path')

const logger = require('morgan')

const favicon = require('serve-favicon')

const dotenv = require('dotenv')

const mongoose = require('mongoose')

const userRouter = require("./routes/api/users");

dotenv.config()

const port = 5000;

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once("open", () => {
  console.log("connected to mongodb")
})


//   //   //   //   //   //   //   //   //   //   //

// app.use((req, res, next) => {
//   console.log("I run on all routes")
//   next()
// })

const app = express()

app.use(logger("dev"));

app.use(express.json());

app.use("/api/users", userRouter);

// app.all("*", (request, response) => {
//   response.send("Undefined route");
// });



//   //   //   //   //   //   //   //   //   //   //


app.listen(port, ()=> {
  console.log(`Listening on port ${port}`)
})