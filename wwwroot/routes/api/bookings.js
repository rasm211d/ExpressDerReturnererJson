const bookings = require("../../data/bookings.json");
const express = require('express')
const router = express.Router();
const uuid = require('uuid')

// Gets all bookings 
router.get('/', (req, res) => {
    res.json(bookings)
})

module.exports = router;