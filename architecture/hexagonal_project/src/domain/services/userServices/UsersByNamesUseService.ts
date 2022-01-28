import User from "../../entities/User";
import IUserRepository from '../../port/IUserRepository'
import IUserService, { IUserDTO } from '../IUserService'

class UsersByNameUserService implements IUserService {

  constructor(
    private userRepository: IUserRepository
  ) {}
  async execute(userDTO: IUserDTO): Promise<User[]> {
    const { name } = userDTO
    if (name != null) {
      const users = await this.userRepository.usersByName(name)
      return users
    } else throw "Valor do nome invalido"
  }
}
export default UsersByNameUserService