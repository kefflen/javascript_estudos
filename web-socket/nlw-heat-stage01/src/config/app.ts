import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

import { router } from "../routes"

const app = express()
app.use(cors())

const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
  cors: {
    origin: "*"
  }
})

io.on("connection", socket => {
  console.log("Usuario conectado no socket: " + socket.id)
})


app.use(express.json())


app.use(router)

app.get("/github", (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID
  res.redirect(`http://github.com/login/oauth/authorize?client_id=${clientId}`)
})

app.get("/signin/callback", (req, res) => {
  const { code } = req.query
  res.json({code})
})



export default serverHttp
export {
  io
}