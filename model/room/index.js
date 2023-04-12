const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: String,
    discription: String,
    price: Number,
    status: Boolean,
    type: String,
    capacity: Number,
    room_no: String,
    hotel_id: ObjectId
})

module.exports = mongoose.model('rooms', roomSchema)