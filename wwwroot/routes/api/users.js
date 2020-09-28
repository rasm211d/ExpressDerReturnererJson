const users = require("../../data/users.json");
const express = require('express')
const router = express.Router();
const uuid = require('uuid')

// Gets all users 
router.get('/', (req, res) => {
    res.json(users)
})

module.exports = router;