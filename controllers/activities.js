// Packages
const express = require('express')
const router = express.Router()

// Models
const Activities = require('../models/activities')

// Routes
router.post('/', async (req, res, next) => {
  try {
    console.log('test')
    console.log(req.target)
		res.json(activity)
  } catch (err) {
    next(err)
  }
})

// Export
module.exports = router
