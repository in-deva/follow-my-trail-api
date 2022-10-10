// Packages
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Model
module.exports = mongoose.model('activities', {
	title: {
		type: String,
		required: false
	},
  category: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  image: {
    type: String
  },
  geometry: {
    type: {
      lat: Number,
      lng: Number,
      zoom: Number
    },
    required: false,
    default: {
      lat: 0,
      lng: 0,
      zoom: 15
    }
  },
  author: {
    type: ObjectId,
    ref: 'users',
    required: false
  }
})
