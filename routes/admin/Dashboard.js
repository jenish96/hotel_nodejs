const UserColletion = require('../../model/user')

exports.TotalCount = async (req, res) => {

    let condition = []

    condition.push([
        {
            $facet: {
                "users": [{ $count: 'total' }],
                "hotels": [{ $unionWith: { coll: "hotels", pipeline: [{ $count: "total" }] } }],
                "bookings": [{ $unionWith: { coll: "bookings", pipeline: [{ $count: "total" }] } }],
                "rooms": [{ $unionWith: { coll: "rooms", pipeline: [{ $count: "total" }] } }]
            }
        },
        {
            $project: {
                users: { $first: "$users.total" },
                hotels: { $first: "$hotels.total" },
                bookings: { $first: "$bookings.total" },
                rooms: { $first: "$rooms.total" },
            }
        }
    ])

    const countResult = await UserColletion.aggregate(condition)
    res.send(countResult)
}