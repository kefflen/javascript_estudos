const express = require('express')
const router = express.Router()

module.exports = () => {
  const signUpRouter =  SignUpRoute
  router.post('/signup', ExpressRouterAdapter.adapt(signUpRouter))
}


//Express-adapter
class ExpressRouterAdapter {
  static adapt(signUpRouter) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body
      }
      const httpResponse = await signUpRouter.route(httpRequest)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}

//Presentation
// signup-router
class SignUpRoute {
  static async route(httpRequest) {
    const {
      email, password, repeatPassword
    } = httpRequest
    const user = await SignUpUseCase.signup(email, password, repeatPassword)
    return {
      statusCode: 200,
      body: user
    }
  }
}

//Domain
//Use case. A confirmação de senha uma regra de negocio
class SignUpUseCase {
  async static signUp(email, password, repeatPassword) {
    if (password === repeatPassword) {
      // AccountRepository.add(user)
      let user = { email, password}
      console.log('Cadastrando: ', user)
      return user
    } else throw 'Senha de confirmação não é diferente da senha passada!'
  }
}

//Infra
class AccountRepository {

}