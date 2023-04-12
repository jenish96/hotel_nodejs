const express = require('express')
const { Get } = require('./Get')
const { Post } = require('./Post')
const router = express.Router()

router.get('/state', Get)
router.post('/state', Post)

module.exports = router