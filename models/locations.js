// Packages
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// Model
module.exports = mongoose.model('locations', {
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
    required: false
  },
})
