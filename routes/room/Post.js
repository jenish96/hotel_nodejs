const { ObjectId } = require('mongodb')
const RoomCollection = require('../../model/room/index')

exports.Post = async (req, res) => {
    
    const payload = req.body
    const roomResult = await RoomCollection.insertMany(payload)
    res.send(roomResult)
}