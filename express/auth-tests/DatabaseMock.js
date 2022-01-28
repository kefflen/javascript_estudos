module.exports = class DatabaseMock {
  constructor() {
    this.index = 3
    this.data = [{
      id: 1, name: 'maria', email: 'maria@gmail.com', password: 12345678
    }, {
      id: 2, name: 'roberto', email: 'roberto@gmail.com', password: 12345678
    }]
  }

  save(user) {
    let {name, password, email} = user

    this.data.push({
      id: this.index, name, password, email
    })
    this.index++
  }

  getById(id) {
    let user = this.data.find(user => user.id = id)
    if (user) {
      return user
    } else throw "Não tem usuario com esse id"
  }

  getByEmail(email) {
    let user = this.data.find(user => user.email = email)
    if (user) {
      return user
    } else throw "Não tem usuario com esse nome"
  }

  getUsers() {
    return [...this.data]
  }

}