const express = require('express')
const { TotalCount } = require('./Dashboard')
const router = express.Router()

router.get('/totalcount', TotalCount)

module.exports = router