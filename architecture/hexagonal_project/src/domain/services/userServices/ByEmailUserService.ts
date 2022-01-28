import User from '../../entities/User'
import IUserRepository from '../../port/IUserRepository'
import IUserService, { IUserDTO } from '../IUserService'

export default class FindByEmailService implements IUserService {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(userDTO: IUserDTO): Promise<User> {
    const { email } = userDTO
    if (email) {
      return await this.userRepository.findByEmail(email)
    } else throw "Need to pass a valid email"
  }
}