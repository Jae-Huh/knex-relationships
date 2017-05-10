
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserProfile: getUserProfile,
  createUser: createUser
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function getUserProfile (id, connection) {
  return connection('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .join('blogs', 'users.id', 'blogs.user_id')
    .where('users.id', id)


}

function createUser (name, email, picture, url, connection) {
  return connection('users')
  .insert({name: name, email: email})
  .then((result) => {
     return connection('profiles')
    .insert({profile_picture: picture, url: url, user_id: result[0]})

  })
}
