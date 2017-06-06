const express = require('express')

function authorize(req,res,next){
  const id = req.params.id
  const error = {status: 401, message: 'You must be logged in to access this feature'}
  if(parseInt(req.session.userId) === parseInt(id)){
    return next()
  }
  else{
    next(error)
  }
}

module.exports = authorize
