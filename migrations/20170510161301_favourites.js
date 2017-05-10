
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favourites', function (table) {
    table.increments('id').primary()
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.integer('favourite_id').unsigned()
    table.foreign('favourite_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favourites')
};
