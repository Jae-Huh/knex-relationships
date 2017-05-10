
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favourites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourites').insert([
        {id: 1, user_id: 99901, favourite_id: 99902},
        {id: 2, user_id: 99902, favourite_id: 99905},
        {id: 3, user_id: 99903, favourite_id: 99921},
        {id: 4, user_id: 99904, favourite_id: 99921},
        {id: 5, user_id: 99905, favourite_id: 99921},
        {id: 6, user_id: 99906, favourite_id: 99921},
        {id: 7, user_id: 99907, favourite_id: 99921},
        {id: 8, user_id: 99908, favourite_id: 99921},
        {id: 9, user_id: 99909, favourite_id: 99921},
        {id: 10, user_id: 99910, favourite_id: 99921},
        {id: 11, user_id: 99911, favourite_id: 99901},
        {id: 12, user_id: 99912, favourite_id: 99901},
        {id: 13, user_id: 99913, favourite_id: 99901},
        {id: 14, user_id: 99914, favourite_id: 99901},
        {id: 15, user_id: 99915, favourite_id: 99901},
        {id: 16, user_id: 99916, favourite_id: 99901},
        {id: 17, user_id: 99917, favourite_id: 99926},
        {id: 18, user_id: 99918, favourite_id: 99926},
        {id: 19, user_id: 99919, favourite_id: 99926},
        {id: 20, user_id: 99920, favourite_id: 99926},
        {id: 21, user_id: 99921, favourite_id: 99926},
        {id: 22, user_id: 99922, favourite_id: 99926},
        {id: 23, user_id: 99923, favourite_id: 99919},
        {id: 24, user_id: 99924, favourite_id: 99919},
        {id: 25, user_id: 99925, favourite_id: 99919},
        {id: 26, user_id: 99926, favourite_id: 99919},
        {id: 27, user_id: 99926, favourite_id: 99918}
      ]);
    });
};
