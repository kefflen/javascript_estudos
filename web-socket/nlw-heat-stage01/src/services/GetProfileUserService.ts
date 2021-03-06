import prismaClient from "../prisma"

class GetProfileUserService {
  async execute(userId: string) {
    const user  = await prismaClient.user.findFirst({
      where: { id: userId }
    })

    return user
  }
}


export {
  GetProfileUserService
}