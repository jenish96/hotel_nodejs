const mongoose = require('mongoose')

const contactUsSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
})

module.exports = mongoose.model('contactUs', contactUsSchema)