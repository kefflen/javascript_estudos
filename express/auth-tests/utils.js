const jwt = require('jsonwebtoken')
const authSecret = require('./authConfig.json')
function genToken(user) {
  const { id, name, email } = user
  const token = jwt.sign({ id, name, email }, authSecret.secret, {expiresIn: 86400})
  return token
}


module.exports = {
  genToken
}