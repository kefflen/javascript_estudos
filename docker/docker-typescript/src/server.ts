import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello dev')
})

app.listen(5050, () => console.log('Running at: http://localhost:5050'))

