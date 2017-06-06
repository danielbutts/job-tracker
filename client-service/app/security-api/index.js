const rp = require('request-promise')
const router = require('express').Router()

router.post('/login', authenticateUser)
router.delete('/logout', logout)

function authenticateUser(req,res,next){
  const options = {method: 'POST', uri: 'http://localhost:8080/users/login', body: req.body, json: true}
  return rp(options)
    .then((response) => {
      if(response){
        req.session.userId = response.id
        console.log(req.session)
        return req.session
      }
    })
    .catch((err) => next(err))
}

function logout(req,res,next){
  req.session = null
  res.redirect('/')
}


module.exports = router
