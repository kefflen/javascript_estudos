import User from '../../entities/User'
import IUserRepository from '../../port/IUserRepository'
import { comparewithToken } from '../../utils/encrypt'
import FindByEmailService from './ByEmailUserService'
import IUserService, { IUserDTO } from '../IUserService'

export default class UpdateUserService implements IUserService{
  constructor(
    private userRepo: IUserRepository
  ) {}

  async execute({name, email, password}: IUserDTO): Promise<void> {
    if (name && email && password) {
      let user = await new FindByEmailService(this.userRepo).execute({email})
      if (comparewithToken(password, user.password)) {
        user.name = name
        user.email = email
        await this.userRepo.update(user)
      }
    } else throw "Esta faltando dados para dar update"
  } 
}
