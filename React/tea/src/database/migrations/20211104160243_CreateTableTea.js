
exports.up = function(knex) {
  return knex.schema.createTable('tea', table => {
    table.increments('id').primary()
    table.string('name', 30).notNull()
    table.string('image')
    table.string('description')
    table.string('keywords')
    table.string('origin')
    table.float('brew_time')
    table.integer('temperature')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tea')
};
