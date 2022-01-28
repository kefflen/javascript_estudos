import {v4 as uuidv4} from 'uuid'
import { comparewithToken, encrypted } from '../utils/encrypt'

class User {
  #id: string
  #name: string
  #email: string
  #password: string

  constructor(id: string, name: string, email: string, password: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }

  static createUser(name: string, email: string, password: string) {
    let id = uuidv4()
    let passwordToken = encrypted(password)

    return new this(id, name, email, passwordToken)
  }

  hasOwnAtt(other: User) {
    return other.id === this.id || other.email === this.email
  }

  isValidPassword(password: string) {
    return comparewithToken(password, this.#password)
  }
  get id() {
    return this.#id
  }

  private set id(id) {
    this.#id = id
  }

  get name() {
    return this.#name
  }

  set name(name) {
    this.#name = name
  }
  get email() {
    return this.#email
  }

  set email(email) {
    this.#email = email
  }

  get password() {
    return this.#password
  }

  set password(password) {
    this.#password = password
  }
}

export default User