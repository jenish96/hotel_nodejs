const mongoose = require('mongoose')

const stateSchema = mongoose.Schema({
    state_name: String
})

module.exports = mongoose.model('state', stateSchema)