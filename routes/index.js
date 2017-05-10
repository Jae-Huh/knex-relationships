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
      const newData = {
        email: result[0].email,
        user_id: result[0].user_id,
        profile_picture: result[0].profile_picture,
        url: result[0].url,
        blogPosts: []
      }

      for(let i = 0; i < result.length; i++) {
        const blogEntry = {title: result[i].title, body: result[i].body, id: result[i].id}
        newData.blogPosts.push(blogEntry)
      }

      console.log(result)
      res.render('userProfile', newData)

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

router.get('/blogs/:id', (req, res) => {
  const id = req.params.id
  db.viewBlogEntry(id, req.app.get('connection'))
    .then((result) => {

      console.log(result)
      res.render('blogEntry', result[0])

    })





})



module.exports = router
