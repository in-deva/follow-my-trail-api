// Packages
const express = require('express')
const router = express.Router()

const Users = require('../models/users')

// login get
router.post('/add-location', async (req, res) => {
  // console.log('index get route')
  try {
		// console.log(req.body.location)
		let user = await Users.findById(req.body.user.id)
		user = await Users.findByIdAndUpdate(req.body.user.id, {
		  trips: [req.body.location]
			},
			{ new: true }
		)
		res.send(user)

		// console.log(user)
		// // console.log(users[0].name)
    // res.send(users[0])
  } catch (err) {
    console.log(err)
		res.send(err)
  }
})

// Export
module.exports = router
