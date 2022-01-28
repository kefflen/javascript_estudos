const { Router } = require('express')
const express = require('express')
const cors = require('cors')

const UserRepository = require('./userRepository')
const Utils = require('./utils')
let userRepository = new UserRepository()

function expressAdaptRouter (route) {
  async function handleErrors(req, res, next) {
    try {

    } catch (e) {
      const httpResponse = HttpReponse.badRequest(e.message)
    }
  }
  return async function(req, res) {
    const httpRequest = {
      body: req.body
    }
    console.log(httpRequest)
    let { statusCode, body } = await route(httpRequest)
    res.status(statusCode).json(body)
  }
}

//Devia ser aqui que os httpResponse deviam estar sendo criados
class UserController {
  static async signin(httpRequest) {
    const { email, password } = httpRequest.body
    console.log(httpRequest)
    return UserServices.signin(email, password)
  }
  static async signup(httpRequest) {
    const { name, email, password, repeatPassword } = httpRequest.body
    return UserServices.signup(name, email, String(password), String(repeatPassword))
  }
  static async getUsers() {
    return UserServices.getUsers()
  }
}


class HttpResponse {
  constructor(statusCode, body) {
    this.statusCode = statusCode
    this.body = body
  }

  static badRequest(body) {
    return new HttpResponse(400, body)
  }

  static ok(body) {
    return new HttpResponse(201, body)
  }
}


class UserServices {
  static async signin(email, password) {
    let user = await userRepository.getByEmail(email)
    if (user!=null && user.testPassword(password)) {
      let userToFrontend = {name: user.name, email: user.email}
      return HttpResponse.ok({
        user: userToFrontend,
        token: Utils.genJwt(userToFrontend)
      })
    } else return HttpResponse.badRequest("Invalid password or no user with this email")
  }

  static async signup(name, email,  password, repeatPassword) {
    if (password != repeatPassword) return HttpResponse.badRequest("The confirmation password is not equal to password passed")
    if (!name.trim() || !email.trim() || password.trim().length < 8) return HttpResponse.badRequest("Invalid information to create user")
    if (await userRepository.getByEmail(email)) return HttpResponse.badRequest("Alrealdy have a user with this email")

    let user = await userRepository.createUser(name, email, password)
    return HttpResponse.ok(user)
  }

  static async getUsers() {
    let users = await userRepository.getUsers()
    return HttpResponse.ok(users)
  }
}

const app = express()
app.use(express.json())
app.use(cors())
router = express.Router()


router.post('/signin', expressAdaptRouter(UserController.signin))
router.post('/signup', expressAdaptRouter(UserController.signup))
router.get('/', expressAdaptRouter(UserController.getUsers))
app.use("/user", router)

app.listen(3333, () => {
  console.log('Running at port: http://localhost:' + 3333)
})

