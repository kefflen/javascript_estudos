import IUserRepository from '../port/IUserRepository'
export interface IUserDTO {
  name?: string
  email?: string
  password?: string
  id?: string
}

export default interface IUserService {
  
  execute(userDTO: IUserDTO) : Promise<any>
}
