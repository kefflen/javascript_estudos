const bcryptjs = require('bcryptjs')

module.exports = class User {
  constructor(id, name, email, passwordToken) {
    this.id = id
    this.name = name
    this.email = email
    this.passwordToken = passwordToken
  }

  testPassword(password) {
    return bcryptjs.compareSync(String(password), this.passwordToken)
  }

  static createUser(obj) {
    return new User(obj.id, obj.name, obj.email, obj.password)
  }
}