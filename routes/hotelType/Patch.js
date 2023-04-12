const HotelTypeCollection = require('../../model/hotelType/HotelType')
const { ObjectId } = require('mongodb');

exports.Patch = async (req, res) => {
    const payload = req.body
    const hotelTypeResult = await HotelTypeCollection.updateOne({ _id: ObjectId(req.query.id) }, { $set: payload })
    res.send(hotelTypeResult)
}