import express from 'express'
const app = express()

app.use(express.json)

app.post('/lesson', (request, response) => {
  return response.status(201).send()
})


export default app
