const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    contact_no: Number,
    email: String,
    password: String,
    isVerify: Boolean
})

module.exports = mongoose.model('users', userSchema)