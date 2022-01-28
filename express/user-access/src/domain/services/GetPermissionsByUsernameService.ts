import { AppError } from "../errors/AppError";
import { GetPermissionsFromUser } from "../helpers/getPermissionFromUser";
import { IPermissionRepository } from "../repositories/IPermissionRepository";
import { IRoleRepository } from "../repositories/IRoleRepository";
import { IUserRepository } from "../repositories/IUserRepository";

type executeParams = {
  username: string
}

export class GetPermissionsByUsernameService {
  getPermissionsFromUser: GetPermissionsFromUser
  constructor(
    private readonly permissionRepository: IPermissionRepository,
    private readonly roleRepository: IRoleRepository,
    private readonly userRepository: IUserRepository
  ) {
    this.getPermissionsFromUser = new GetPermissionsFromUser(this.permissionRepository, this.roleRepository)
  }

  async execute({ username }: executeParams) {
    const user = await this.userRepository.getByUsername(username)
    if (!user) throw new AppError("There is no user with this usename", 404)
    return this.getPermissionsFromUser.execute(user)
  }
}