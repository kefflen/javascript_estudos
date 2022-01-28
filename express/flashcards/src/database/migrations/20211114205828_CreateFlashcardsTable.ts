import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('flashcard', table => {
    table.string('id').primary()
    table.string('question')
    table.string('reply')
    table.string('userId')
      .references('id').inTable('user')
      .onDelete('CASCADE').notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('flashcard')
}

