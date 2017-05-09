
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.string('profile_picture')
    table.string('url')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('profiles')
};
