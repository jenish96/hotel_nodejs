const HotelTypeCollection = require('../../model/hotelType/HotelType')

exports.Post = async (req, res) => {
    const payload = req.body

    const hotelType = await HotelTypeCollection.findOne({ hoteltype: payload.hoteltype })
    console.log('hotelType----', hotelType)
    if (hotelType) {
        res.send({ Message: "HotelType is already Exists" })
    } else {
        const hotelTypeResult = await HotelTypeCollection.insertMany(payload);
        res.send(hotelTypeResult)
    }
}