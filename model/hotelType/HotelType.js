const mongoose = require('mongoose')

const HotelTypeSchema = new mongoose.Schema({
    hoteltype: String,
    img: String
})

module.exports = mongoose.model('hotelTypes', HotelTypeSchema)