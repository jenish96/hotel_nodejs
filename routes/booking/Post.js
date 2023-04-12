const { ObjectId } = require('mongodb')
const BookingCollection = require('../../model/booking/index')
const moment = require('moment/moment')

exports.Post = async (req, res) => {

    var payload = req.body
    let Ids = payload.room_id.map(id => ObjectId(id))
    payload['room_id'] = Ids
    payload['check_in'] = moment(payload.check_in).format('MM/DD/YYYY')
    payload['check_out'] = moment(payload.check_out).format('MM/DD/YYYY')
    payload['booking_date'] = moment().format('MM/DD/YYYY')
    // payload['booking_date'] = new Date()


    const bookingResult = await BookingCollection.insertMany(payload);
    res.send(bookingResult)

}