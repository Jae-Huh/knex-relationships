var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/user/:id', (req, res) => {
  const id = req.params.id
  db.getUserProfile(id, req.app.get('connection'))
    .then((result) => {
      console.log(result)
      res.render('userProfile', result[0])
    })
})

router.post('/', (req, res) => {
  const name = req.body.user_name
  const email = req.body.email
  const picture = req.body.picture
  const url = req.body.url

  db.createUser(name, email, picture, url, req.app.get('connection'))
  .then( () => {
    res.redirect('/')
  })



})



module.exports = router
