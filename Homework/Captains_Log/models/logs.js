// Create a mongoose "Schema"

const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    title: {type:String, required: true},
    entry: {type:String, required: true},
    shipIsBroken: Boolean
})

// Make the Schema a variable that can be exported

const Log = mongoose.model("Log", logSchema)

module.exports = Log