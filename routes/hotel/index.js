const { Get } = require('./Get')
const { Post } = require('./Post')
const { Patch } = require('./Patch')
const express = require('express');
const router = express.Router();

router.get('/hotel', Get)
router.post('/hotel', Post)
router.patch('/hotel', Patch)

module.exports = router