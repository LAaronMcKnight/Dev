const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
    name: {type:String, required: true},
    moons: {type:String, required: true},
    everVisible: Boolean
})

const Planet = mongoose.model("Planet", planetSchema)

module.exports = Planet