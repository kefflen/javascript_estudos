const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('Hello dev')
})

app.listen(8080, () => {
  console.log('http://localhost:8080')

  const key = process.env.PARENT_KEY
  if (key !== undefined && process.send) {
    process.send(`${key}:ok`)
  }
})