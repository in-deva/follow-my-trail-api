// Packages
const express = require('express')
const router = express.Router()

const Users = require('../models/users')

// Get ...
router.get('/', async (req, res) => {
  // console.log('index get route')
  try {
		let users = await Users.find({})
		console.log(users);
    res.send(users)
  } catch (err) {
    console.log(err)
  }
})

// Export
module.exports = router
