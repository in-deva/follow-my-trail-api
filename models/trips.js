// Packages
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Model
module.exports = mongoose.model('trips', {
	location: {
    type: String,
    // ref: 'locations',
    required: false
  },
	author: {
    type: String,
    // ref: 'users',
    required: false
  },
	activities: {
			likes: [],
			dislikes: [],
			been: []
	}
})
