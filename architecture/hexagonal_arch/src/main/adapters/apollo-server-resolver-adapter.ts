import { Request, Response } from "express"
import { Controller } from "../../presentation/controller/contracts"


export const adapterApoloServer = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle()
    return res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}