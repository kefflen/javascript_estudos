const express = require('express')
const DatabaseMock = require('./DatabaseMock')
const db = new DatabaseMock()
const cors = require('cors')
const { genToken } = require('./utils')
const { authMiddleware } = require('./middlewares')
const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res, next) => {
  console.log('get: "/"')
  next()
})

app.get('/users/:id', (req, res) => {
  console.log(req.user)
  const id = req.params.id
  let user = db.getById(id)
  user.token = genToken(user)
  res.status(201).json(user)
})

app.get('/users', authMiddleware)
app.get('/users', (req, res) => {
  console.log('get users')
  res.status(201).json(db.getUsers())
})

app.post('/users', (req, res) => {
  let {name, password, email} = req.body

  db.save({name, password, email})
  res.send()
})

app.listen(3333, () => {
  console.log('Listen the port 3333')
})