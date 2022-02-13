const { Router } = require('express')
const routes = new Router()

routes.get('/health', (req, res) => {
  res.json({ message: 'Connect with success!'})
})

routes.get('/', (req, res) => {
  res.send('Verificar nodemon')
})

module.exports = routes