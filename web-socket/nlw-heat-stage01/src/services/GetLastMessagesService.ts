import prismaClient from "../prisma"

class GetLastMessagesServices {
  async execute({page=1, quantity=3}) {
    if (quantity > 10) quantity = 10
    if (quantity < 0) quantity = 1

    const skip = (page - 1) * quantity
    const messages = await prismaClient.message.findMany({
      skip, take:quantity,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        user: true
      }
    })

    return messages
  }
}

export {
  GetLastMessagesServices
}