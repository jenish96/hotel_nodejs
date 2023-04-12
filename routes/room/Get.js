const RoomCollection = require('../../model/room/index')

exports.Get = async (req, res) => {

    let condition = []

    condition.push([
        {
            $lookup: {
                from: "hotels",
                localField: "hotel_id",
                foreignField: "_id",
                as: "hotel"
            }
        },
        {
            $project: {
                name: 1,
                discription: 1,
                price: 1,
                status: 1,
                type: 1,
                capacity: 1,
                room_no: 1,
                hotel: { $arrayElemAt: ["$hotel.name", 0] }
            }
        }
    ])


    const roomResult = await RoomCollection.aggregate(condition)
    console.log('cond-----', roomResult)
    res.send(roomResult)
}