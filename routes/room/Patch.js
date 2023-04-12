const RoomCollection = require('../../model/room/index')
const { ObjectId } = require('mongodb')

exports.Patch = async (req, res) => {
    const payload = req.body
    const roomResult = await RoomCollection.updateOne(
        { _id: ObjectId(req.query.id) },
        { $set: payload }
    )
    res.send(roomResult)
}