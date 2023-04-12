const HotelCollection = require('../../model/Hotel/Hotel')

exports.Post = async (req, res) => {
    const payload = req.body
    const hotel = await HotelCollection.findOne({ name: payload.name })

    if (hotel) {
        res.send({ Message: "Hotel is already Exists" })
    } else {

        const hotelResult = await HotelCollection.insertMany(payload);
        // res.send({Message : 'Record inserted Sucessfully'},{result : result})
        res.send(hotelResult)
    }
}