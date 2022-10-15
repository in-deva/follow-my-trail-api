// Packages
const express = require('express')
const router = express.Router()

// Models
const Users = require('../models/users')
const Activities = require('../models/activities')
const Trips = require('../models/trips')

// Routes
router.get('/trips', async (req, res) => {
  try {
		console.log('hi')
		// let user = await Users.findById(req.body.userID)
		// res.send(user.activities)
  } catch (err) {
    console.log(err)
  }
})

router.post('/trips', async (req, res) => {
  try {
		console.log('hi')
		// let user = await Users.findById(req.body.userID)
		// res.send(user.activities)
  } catch (err) {
    console.log(err)
  }
})

// Export
module.exports = router
