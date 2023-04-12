const CityCollection = require('../../model/city/index')

exports.Post = async (req, res) => {

    const payload = req.body
    const city = await CityCollection.findOne({ city_name: payload.city_name })
    if (city) {
        res.send({ Message: "City already Exists" })
    } else {
        const cityResult = await CityCollection.insertMany(payload)
        res.send(cityResult)
    }
}