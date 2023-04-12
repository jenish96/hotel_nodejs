const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    name: String,
    owner_name: String,
    contact_no: String,
    email: String,
    website_url: String,
    address: String,
    landmark: String,
    pincode: Number,
    city: String,
    hotelType_id: ObjectId,
    userName: String,
    password: String,
    status: Boolean,
    approve: Boolean,
    star: Number,
    longittude: String,
    lattitude: String
})

module.exports = mongoose.model('hotels', HotelSchema)