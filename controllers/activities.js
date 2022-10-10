// Packages
const express = require('express')
const router = express.Router()

// Models
const Activities = require('../models/activities')

// Routes
router.post('/', async (req, res, next) => {
  try {
		await Activities.create(req.body)
		res.send('done')
  } catch (err) {
    next(err)
  }
})

// Export
module.exports = router
