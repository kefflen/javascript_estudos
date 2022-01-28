
exports.up = function(knex) {
  return knex.schema.table('comment', table => {
    table.integer('teaId')
      .notNull()
      .references('id')
      .inTable('user')
  })
};

exports.down = function(knex) {
  return knex.schema.table('comment', table => {
    table.dropColumn('teaId')
  })
};
