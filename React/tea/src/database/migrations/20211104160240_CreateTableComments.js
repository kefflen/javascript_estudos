
exports.up = function(knex) {
  return knex.schema.createTable('comment', table => {
    table.increments('id')
    table.string('text').notNullable()
    table.date('date').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comment')
};
