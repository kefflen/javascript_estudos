const express = require('express')
const routes = require('./routes')

class App {
  constructor() {
    this.server = express()
    this.setupRoutes()
  }

  setupRoutes() {
    this.server.use(routes)
  }
}

module.exports = new App().server
