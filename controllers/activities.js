// Packages
const express = require('express')
const router = express.Router()

// Models
const Users = require('../models/users')
const Activities = require('../models/activities')

// Routes

router.post('/', async (req, res) => {
  try {
		await Activities.create(req.body)
		res.send('done')
  } catch (err) {
    console.log(err)
  }
})

router.post('/categorise', async (req, res) => {
  try {
		let userFull = await Users.findById(req.body.userID)
		if (req.body.category == 'likes') {
			userFull.activities.likes.push(req.body.activity)
			user = await Users.findByIdAndUpdate(req.body.userID, {
					activities: userFull.activities
				},
				{ new: true }
			)
		}
		if (req.body.category == 'dislikes') {
			userFull.activities.dislikes.push(req.body.activity)
			user = await Users.findByIdAndUpdate(req.body.userID, {
					activities: userFull.activities
				},
				{ new: true }
			)
		}
		if (req.body.category == 'been') {
			userFull.activities.been.push(req.body.activity)
			user = await Users.findByIdAndUpdate(req.body.userID, {
					activities: userFull.activities
				},
				{ new: true }
			)
		}


		// console.log(user)
		res.send(user)
		// res.send('done')
  } catch (err) {
    console.log(err)
  }
})

// Export
module.exports = router
