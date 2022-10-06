// Packages
const express = require('express')
const router = express.Router()

const Locations = require('../models/locations')

// get ...
router.get('/', async (req, res) => {
  // console.log('index get route')
  try {
		// await Locations.create({
		// 	name: 'Koh Phangan',
		// 	geometry: {
		// 		lat: 9.730213,
		// 		lng: 100.017587,
		// 		zoom: 12
		// 	}
		// })
		// console.log('created');
		let location = await Locations.findById('633e935606d3ec012494bf7a') //!!!
		// console.log(users[0].name)
    res.send(location)
  } catch (err) {
    console.log(err)
		res.send(err)
  }
})

// Export
module.exports = router
