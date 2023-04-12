const express = require('express')
const auth = require('../../middleware/auth')
const { Get } = require('./Get')
const { Post } = require('./Post')
const { Patch } = require('./Patch')
const router = express.Router()

router.get('/user', Get)
router.post('/user', Post)
router.patch('/user', Patch)

module.exports = router