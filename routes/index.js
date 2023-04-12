const express = require('express')
const router = express.Router()
const HotelType = require('./hotelType/index')
const Admin = require('./admin/index')
const Hotel = require('./hotel/index');


// admin
router.route('/hotelType').get(HotelType)



// // hotelType
// router.route('/getHotelType').get(HotelType.GET)
// router.route('/addHotelType').get(HotelType.POST)
// router.route('/updateHotelType').get(HotelType.PATCH)

// // hotel
// router.route('/getHotel').get(Hotel.GET)
// router.route('/addHotel').get(Hotel.POST)

module.exports = router