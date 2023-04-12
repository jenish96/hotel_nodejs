const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    city_name: String,
    state_id: ObjectId
})

module.exports = mongoose.model('city', citySchema)