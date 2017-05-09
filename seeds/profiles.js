
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 99901, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 2, user_id: 99902, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 3, user_id: 99903, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 4, user_id: 99904, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 5, user_id: 99905, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 6, user_id: 99906, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 7, user_id: 99907, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 8, user_id: 99908, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 9, user_id: 99909, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 10, user_id: 99910, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 11, user_id: 99911, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 12, user_id: 99912, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 13, user_id: 99913, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 14, user_id: 99914, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 15, user_id: 99915, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 16, user_id: 99916, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 17, user_id: 99917, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 18, user_id: 99918, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 19, user_id: 99919, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 20, user_id: 99920, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 21, user_id: 99921, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 22, user_id: 99922, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 23, user_id: 99923, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 24, user_id: 99924, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 25, user_id: 99925, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'},
        {id: 26, user_id: 99926, profile_picture: '/images/aardvark.JPG', url: 'http://www.nationalgeographic.com/'}
      ]);
    });
};
