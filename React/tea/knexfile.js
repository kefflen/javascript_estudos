// Update with your config settings.
const path = require('path')

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './src/database/dev.sqlite3'
  },
  migrations: {
    directory: path.resolve('src/database/migrations')
  }
};
