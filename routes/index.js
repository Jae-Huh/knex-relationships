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

module.exports = router
