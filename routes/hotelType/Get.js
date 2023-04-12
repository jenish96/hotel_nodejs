const HotelTypeCollection = require('../../model/hotelType/HotelType')

exports.Get = async (req, res) => {

    const hotelTypeResult = await HotelTypeCollection.find();
    // console.log('result---',hotelTypeResult)
    res.send(hotelTypeResult);

}