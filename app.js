// Require Packages
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const cors = require('cors')
require('dotenv').config()

// Build the App
const app = express()

// !!! replace server as str with read from env file

// Middleware
app.use(logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // sends cookies in the response headers
}))

// Database
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('Connected to MongoDB')
  }
)

// Security
require('./express-sessions')(app)

// Routes
// main
app.use('/', require('./controllers/index'))
// map
app.use('/map', require('./controllers/map'))
// auth
app.use('/auth', require('./controllers/auth'))
// create activity
app.use('/activities', require('./controllers/activities'))

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// Error Handler
app.use((err, req, res, next) => {
  // Only provides full error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.locals.coder = req.coder
  res.locals.hideSearch = true
  // Render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
