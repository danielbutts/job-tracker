const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const dotenv = require('dotenv').config()
const authorize = require('./security-api/authorize.js')


const app = express()

if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan')
  app.use(logger('dev'))
}

const sessionOptions = {
  name: 'job-tracker',
  secret: process.env.SESSION_SECRET,
  secure: app.get('env') === 'production'
}

app.use(cookieParser())
app.use(bodyParser.json())
app.use(cookieSession(sessionOptions))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/api/auth', require('./security-api'))

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.error(err)
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app
