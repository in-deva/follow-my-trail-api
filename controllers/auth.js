// Packages
const express = require('express')
const router = express.Router()

const Users = require('../models/users')

// login get
router.get('/login', async (req, res) => {
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

// login post
// !!! add sending username ID or name/avatar details in response // or do we pull this from the session somehow?
router.post('/login', async (req, res) => {
  // console.log('login post route')
  try {
    // find user with email and password match
    let user = await Users.findOne(req.body)
    if (user) {
      // login match
      req.login(user, err => {
        res.send(true)
      })
			console.log('logged in')
		} else {res.send(false)}
  } catch (err) {
    console.log(err)
  }
})

// Get logout
router.get('/logout', async (req, res) => {
  // console.log('logout get route')
  try {
    req.logout()
    req.session.destroy(err => {
      res.clearCookie('connect.sid')
			res.send(false)
    })
  } catch (err) {
		console.log(err);
  }
})

router.get('/signup', async (req, res) => {
  // console.log('signup get route')
  try {
		// delete this route?
		let users = await Users.find({})
		// console.log(users[0].name)
		res.send(users[0])
  } catch (err) {
		console.log(err)
		res.send(err)
  }
})

router.post('/signup', async (req, res) => {
  // console.log('signup post route')
  try {
    await Users.create(req.body)
		console.log('user created')
		res.send(true)
  } catch (err) {
		console.log(err)
		res.send(err)
  }
})

// get ...
router.get('/user', async (req, res) => {
  console.log('index get route')
  try {
		let user = await Users.findById('633d29b6e4273dea88bda749')
		// console.log(users[0].name)
    res.send(user)
  } catch (err) {
    console.log(err)
		res.send(err)
  }
})

// Export
module.exports = router
