import bcrypt from 'bcryptjs'

export function encrypted(password: string|number) {
  const str_password = password.toString()
  const salt = bcrypt.genSaltSync()
  return bcrypt.hashSync(str_password, salt)
}

export function comparewithToken(password: string, token: string) {
  return bcrypt.compareSync(password, token)
}

export default {
  encrypted, comparewithToken
}
