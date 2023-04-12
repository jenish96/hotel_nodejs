const HotelCollection = require('../../model/Hotel/Hotel');

exports.Get = async (req, res) => {

    let condition = []

    condition.push([
        {
            $lookup: {
                from: "hoteltypes",
                localField: "hotelType_id",
                foreignField: "_id",
                as: "hotelType"
            }
        },
        { "$unwind": "$hotelType" },
        {
            $project: {
                _id: 1,
                name: 1,
                owner_name: 1,
                contact_no: 1,
                email: 1,
                website_url: 1,
                address: 1,
                landmark: 1,
                pincode: 1,
                city: 1,
                hotelType: "$hotelType.hoteltype",
                userName: 1,
                password: 1,
                status: 1,
                approve: 1,
                star: 1,
                longittude: 1,
                lattitude: 1
            }
        }
    ])

    const hotelResult = await HotelCollection.aggregate(condition);
    res.send(hotelResult);
}