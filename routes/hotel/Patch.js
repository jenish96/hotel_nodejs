const HotelCollection = require('../../model/Hotel/Hotel');
const { ObjectId } = require('mongodb');

exports.Patch = async (req, res) => {
    const payload = req.body;
    const hotelResult = await HotelCollection.updateOne({ _id: ObjectId(req.query.id) }, { $set: payload });
    // res.send({ Message: 'Record Updated Sucessfully' }, { result: result });
    res.send(hotelResult)
}