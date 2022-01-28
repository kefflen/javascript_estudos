import User from '../../entities/User'
import IUserRepository from '../../port/IUserRepository'
import IUserService, { IUserDTO } from '../IUserService'



export default class SaveUserService implements IUserService{
  constructor(
    private userRepo: IUserRepository
  ) {}

  async execute(userDTO: IUserDTO): Promise<void> {
    const { name, email, password } = userDTO
    if (name && email && password) {
      const user = User.createUser(name, email, password)
      await this.userRepo.save(user)
    } else throw "Esta faltando informações para criar o usuario!"
  }
}