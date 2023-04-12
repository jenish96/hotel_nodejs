const express = require('express')
const { Post } = require('./Post')
const { Get } = require('./Get')
const router = express.Router()

router.get('/city', Get)
router.post('/city', Post)

module.exports = router