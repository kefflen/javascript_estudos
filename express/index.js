const express = require("express")
// const bodyParser = require("body-parser") DEPRECIATED?

const port = 3000
const app = new express()
const usuarioApi = require("./api/usuario")

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let data = [
    {id: "1", name: "Smartphone", price: 1599.99},
    {id: "2", name: "Notebook", price: 2254.50},
    {id: "3", name: "HD 500GB", price: 400},
    {id: "4", name: "Travesseiro", price: 40},
]

app.get("/", (req, res) => {
    console.log(req.query) //Para ver os parametros passados diretamente na url
    res.json({
        data,
        url_params: req.query,
        target: data.filter(obj => obj.id == req.query["id"])
    })
})

/*
app.post("/corpo", (req, res) => {
    let corpo =""
    req.on("data", function (parte) {
        corpo += parte
    })

    req.on("end", function() {
        console.log(req.headers)
        res.send(corpo)
    })
})
*/

app.post("/corpo", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.post("/usuario", usuarioApi.salvar)
app.get("/usuario", usuarioApi.obter)

app.get("/produto/:id", (req, resp) => {
    resp.send(`Cliente ${req.params.id} selecionado!!!`)
})

app.listen(port, () => {
    console.log(`Processo na porta: ${port}`)
})
