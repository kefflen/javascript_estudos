const User = require("./model/User");
const Utils = require("./utils");

module.exports = class UserRepository {
  constructor() {
    this.index = 2
    this.data = [
      {id: 1, name: 'joao', email: 'joao@gmail.com', password: Utils.encryptPassword('12345678')}
    ]
  }

  async getByEmail(email) {
    const user = this.data.find(user => user.email === email)
    if (user) {
      return User.createUser(user)
    } else null
  }

  async createUser(name, email, password) {
    const user = {id: this.index, name, email, password}
    this.data.push(user)
    this.index++
    return User.createUser(user)
  }

  async getUsers() {
    return this.data.map(user => User.createUser(user))
  }
}