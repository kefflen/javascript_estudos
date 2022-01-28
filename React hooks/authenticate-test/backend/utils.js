const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = 'secrets'

module.exports = class Utils {
  static encryptPassword(password) {
    const str_password = String(password)
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(str_password, salt)
  }

  static verifyPasswordWithToken(password, token) {
    return bcrypt.compare(password, token)
  }

  static genJwt(payload) {
    return 'Bearer ' + jwt.sign(payload, secret)
  }

  static decode(tokenJwt) {
    const hasBearer = /^Bearer /
    if (hasBearer.test(tokenJwt)) {
      return jwt.verify(tokenJwt, secret)
    } else {
      return null
    }
  }

}