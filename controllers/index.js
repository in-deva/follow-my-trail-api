// Packages
const express = require('express')
const router = express.Router()

const Users = require('../models/users')

// get ...
router.get('/', async (req, res) => {
  // console.log('index get route')
  try {
		let users = await Users.find({})
		// console.log(users[0].name)
    res.send(users[0])
  } catch (err) {
    console.log(err)
		res.send(err)
  }
})

router.get('/signup', async (req, res) => {
  // console.log('signup get route')
  try {
		// let user = {
		// 	avatar: '',
		// 	email: '',
		// 	name: '',
		// 	password: ''
		// }
		// await Users.create(user)
		// console.log(user)
		// let userF = await Users.find(user)
		// res.send(userF.name)
  } catch (err) {
		console.log(err)
		res.send(err)
  }
})

// Export
module.exports = router
