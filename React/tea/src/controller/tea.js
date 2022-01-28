const db = require('../database/db')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

const uploadImg = multer({storage}).single('image')

async function create(req, res) {
  const {
    name: passedName, description,
    keywords, origin, brew_time,
    temperature
  } = req.body
  const image = req.file.path

  if ([passedName, description, image, keywords, origin, brew_time, temperature].some(value => value == undefined)) {
    return res.status(400).json({errors: "Esta faltando algum atributo"})
  }
  const name = passedName.toLowerCase()
  const alreadyExistWithName = await getTeaByName(name)
  if (alreadyExistWithName) return res.status(400).json({errors: "Already exist a tea with that name"})

  const tea = await db('tea').insert({
    name, image, description,
    keywords, origin, brew_time,
    temperature
  })
  return res.status(201).json(tea)
}

async function getAll(req, res) {
  const teaArr = await db('tea')
  return res.json(teaArr)
}

async function remove(req, res) {
  const { name } = req.params
  if (name == undefined) return res.status(400).json({errors: "Need to pass a name"})
  const existTea = await getTeaByName(name)
  if (!existTea) return res.status(404).json({errors: "Was not able to complete the request. Beacause the tea with this name don´t exist"})

  const tea = await db('tea').where({ name }).delete()

  return res.send()
}


async function get(req, res) {
  const { name } = req.params
  const tea = await getTeaByName(name)
  if (!tea) return res.status(404).json({ errors: "dont have a tea with that name"})
  return res.status(200).json(tea)
}

async function newComment(req, res) {
  const { text } = req.body
  console.log(text)
  if (!text) return res.status(400).json({ errors: "Need to pass text"})
  if (text.length == 0 ) return res.status(400).json({ errors: "Text can´t be blank"})

  const { name } = req.params
  const date = new Date()
  const tea = await getTeaByName(name)
  if (!tea) return res.status(400).json({ errors: "Was passed invalid tea "})
  await db('comment').insert({ text, date, teaId: tea.id})
  return res.send('ok')
}


async function getTeaComments(req, res) {
  const { name } = req.params
  const tea = await getTeaByName(name)
  if (!tea) return res.status(404).json({ errors: "dont have a tea with that name"})
  const comments = await db('comment').where({teaId: tea.id})
  return res.status(200).json(comments)
}


module.exports = {
  create, getAll, remove, get, newComment,
  getTeaComments, uploadImg
}

async function getTeaByName(name) {
  return await db('tea').where({ name }).first()
}
