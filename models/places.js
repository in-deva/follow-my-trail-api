// Packages
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// make default lat-lng-zoom the centre of the location (also make it required)

// Model
module.exports = mongoose.model('places', {
  name: {
    type: String,
		required: false
  },
  geometry: {
    type: {
			lat: Number,
			lng: Number,
			zoom: Number,
		},
    required: false,
		default: {
			lat: 0,
			lng: 0,
			zoom: 15,
		}
  },
	location: {
		type: ObjectId,
		required: false,
		ref: 'locations'
	},
	address: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	category: {
		type: String,
		required: false
	},
	images: {
		type: [String],
		required: false
	},
})
