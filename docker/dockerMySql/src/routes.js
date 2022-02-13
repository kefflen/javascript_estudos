const { Router } = require('express')
const routes = new Router()

routes.get('/health', (req, res) => {
  res.json({ message: 'Connect with success!'})
})

module.exports = routes