const express = require("express")
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('', (req, res) => {
  console.log('Hello dev')  
  res.send('Funcionou!!!')
})

//O segundo argumento é o 'Endereço IPv4' que aparece no ipconfig
const ipv4 = process.env.lan_ipv4
app.listen(3030, ipv4, () => {
  console.log(`Running at: http://${ipv4}:3030`)
  
})

