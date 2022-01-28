const HttpResponse = require("../../contracts/HttpResponse")

module.exports = class UserServices {
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
