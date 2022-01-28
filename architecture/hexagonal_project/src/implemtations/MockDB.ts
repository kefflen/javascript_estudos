import User from "../domain/entities/User"
import IUserRepository from "../domain/port/IUserRepository"

export default class mockDB implements IUserRepository {
  data: User[]
  constructor() {
    this.data = []
  }
  async findByEmail(email: string) {
    let user = this.data.find(user => user.email == email)
    if (user == undefined) throw "Não tem usuario com esse email"
    return user
  }

  async save(user: User) {
    this.data.push(user)
  }

  async update(user: User) {
    for (let indexUser in this.data) {
      if (this.data[indexUser].id === user.id) {
        this.data[indexUser] = user
        return
      }
    }
    throw "Não tem esse usuario no banco de dados"
  }

  async usersByName(name: string) {
    let users = this.data.filter(user => user.name.toLowerCase() === name.trim().toLowerCase())
    return users
  }
}