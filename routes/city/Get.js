const CityCollection = require('../../model/city/index')

exports.Get = async (req, res) => {

    let condition = []

    condition.push([
        {
            $lookup: {
                // from: "states",
                // let: { id: "$_id" },
                // pipeline: [
                //     {
                //         $match: {
                //             $expr: {
                //                 $eq: ["$state_id", "$$id"],
                //             },
                //         },
                //     },
                // ],
                from: "states",
                localField: "state_id",
                foreignField: "_id",
                as: 'state'
            },
        },
        {
            "$unwind": "$state"
        },
        {
            $project: {
                _id: 1,
                city_name: 1,
                state: "$state.state_name"
            }
        }
    ])

    const cityResult = await CityCollection.aggregate(condition)

    console.log('city----', cityResult)
    res.send(cityResult)
}