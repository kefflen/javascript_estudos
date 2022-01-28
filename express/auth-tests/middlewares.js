const jwt = require('jsonwebtoken')
const authSecret = require('./authConfig.json')


function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({Erros: 'No token founded'})
  }

  const parts = authHeader.split(' ');
  const [scheme, token ] = parts

  if (!/^Bearer/i.test(scheme)) return res.status(401).json({Error: 'No authorization Bearer on header'})
  jwt.verify(token, authSecret.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token invalid"})

    console.log(decoded)
    req.user = decoded

    return next()
  })
}

module.exports = {
  authMiddleware
}