import { Knex } from 'knex'

export default {
  client: 'sqlite3',
  connection: {
    filename: `./src/database/dev.sqlite3`
  },
  migrations: {
    directory: `./src/database/migrations`
  }
} as Knex.Config
