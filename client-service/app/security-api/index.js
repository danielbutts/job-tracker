const rp = require('request-promise')
const router = require('express').Router()

router.post('/login', authenticateUser)
router.delete('/logout', logout)

function authenticateUser(req,res,next){
  const options = {method: 'POST', uri: 'https://job-tracker-user-service.herokuapp.com/users/login', body: req.body, json: true}
  return rp(options)
    .then((response) => {
      if(response.id){
        req.session.userId = response.id
        return res.send({id: req.session.userId})
      }
      else{
        return res.send({id: null})
      }
    })
    .catch((err) => next(err))
}

function logout(req,res,next){
  req.session = null
  // res.redirect('/')
}


module.exports = router
