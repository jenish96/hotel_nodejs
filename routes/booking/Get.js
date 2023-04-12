const BookingCollection = require('../../model/booking/index')

exports.Get = async (req, res) => {

    let condition = []

    let payload = req.query
    for (const key in payload) {
        condition.push({
            $match: {
                [key]: payload[key]
            }
        })
    }

    condition.push([
        {
            $lookup: {
                from: "users",
                localField: "user_id",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $lookup: {
                from: "rooms",
                localField: "room_id",
                foreignField: "_id",
                as: "rooms"
            }
        },
        // {
        //     $lookup: {
        //         from: "rooms",
        //         let: { id: "$_id" },
        //         pipeline: [
        //             {
        //                 $match: {
        //                     $expr: {
        //                         $eq: ["$$id", "$room_id"]
        //                     }
        //                 }
        //             }
        //         ],
        //         as: "rooms"
        //     }
        // }
    ])


    const bookingResult = await BookingCollection.aggregate(condition)
    res.send(bookingResult)

}