const express = require('express');
const { Get } = require('./Get');
const { Post } = require('./Post');
const { Patch } = require('./Patch');
const router = express.Router();

router.get('/room', Get)
router.post('/room', Post)
router.patch('/room', Patch)

module.exports = router