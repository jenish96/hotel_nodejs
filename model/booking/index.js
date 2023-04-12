const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    user_id: ObjectId,
    check_in: Date,
    check_out: Date,
    room_id: Array,
    total_amount: Number,
    payment: Boolean,
    booking_date: Date,
    offer_id: ObjectId,
    guest: Number
})

module.exports = mongoose.model('bookings', bookingSchema)