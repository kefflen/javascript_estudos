import { container } from "tsyringe"
import { GetUsersService } from "../services/GetUsersServices"

const userResolvers = {
  Query: {
    async getAllUsers() {
      const getUserService = container.resolve(GetUsersService)
      const users = await getUserService.execute()
      return users
    }
  },
  Mutation: {
    
  }
}

export default userResolvers