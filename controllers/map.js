// Packages
const express = require('express')
const router = express.Router()

const Locations = require('../models/locations')
const Places = require('../models/places')

// get ...
router.get('/koh-phangan', async (req, res) => {
  // console.log('index get route')
  try {
		let location = await Locations.findById('633e935606d3ec012494bf7a') //!!!
		// console.log(users[0].name)
    res.send(location)
  } catch (err) {
    console.log(err)
		res.send(err)
  }
})

router.get('/koh-phangan/places', async (req, res) => {
  // console.log('index get route')
  try {
		// await Places.create({
		// 	name: 'La Casa',
		// 	geometry: {
		// 		lat: 9.70236980795479,
		// 		lng: 100.01601351306192,
		// 		zoom: 15
		// 	}
		// })
		// console.log('created');
		let place = await Places.findById('633ea46d07dfe04ee4a669cc') //!!!
		// console.log(users[0].name)
    res.send(place)
  } catch (err) {
    console.log(err)
		res.send(err)
  }
})

// Export
module.exports = router
