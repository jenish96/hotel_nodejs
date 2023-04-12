const express = require('express')
const { Get } = require('./Get')
const { Post } = require('./Post')
const router = express.Router()

router.get('/booking',Get)
router.post('/booking',Post)

module.exports = router