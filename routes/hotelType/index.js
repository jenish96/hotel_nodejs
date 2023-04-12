const express = require('express');
const router = express.Router();
const { Get } = require('./Get');
const { Post } = require('./Post');
const { Patch } = require('./Patch');


router.get('/hotelType',Get)
router.post('/hotelType',Post)
router.patch('/hotelType',Patch)

module.exports = router