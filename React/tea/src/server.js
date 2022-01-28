const express = require('express')
const app = express()
const teaRoutes = require('./routes/tea')
const path =  require('path')
const cors = require('cors')
const UPLOADSPATH = path.resolve('uploads')
app.use(cors())



app.use('/tea', teaRoutes)

app.use('/static', express.static(UPLOADSPATH))

app.listen(3000, () => {
  console.log("running at: http://localhost:3000")
})

