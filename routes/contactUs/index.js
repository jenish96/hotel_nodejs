const express = require('express')
const { Get } = require('./Get')
const { Post } = require('./Post')
const router = express.Router()

router.get('/contactus', Get)
router.post('/contactus', Post)

module.exports = router