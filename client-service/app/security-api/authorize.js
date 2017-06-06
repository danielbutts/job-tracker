const express = require('express')

function authorize(req,res,next){
  const error = {status: 401, message: 'You must be logged in to access this feature'}
  if(req.session.userId){
    return next()
  }
  else{
    next(error)
  }
}

module.exports = authorize
