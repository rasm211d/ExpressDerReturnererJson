const cars = require("../../data/cars.json");
const express = require('express')
const router = express.Router();
const uuid = require('uuid')

// Gets all cars 
router.get('/', (req, res) => {
    res.json(cars)
})

module.exports = router;