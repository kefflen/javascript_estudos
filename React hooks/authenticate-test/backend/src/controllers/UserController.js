
module.exports = class UserController {
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