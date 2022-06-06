import { Request, Response } from "express"
import Joi from "joi"

import IRepository from "../domain/repositories/IRepositories"
import PecService from "../domain/services/PecServices"
import PecRepository from "../infra/pecRepository"

const buyedPieceSchema = Joi.object({
  quantity: Joi.number().required(),
  pieceName: Joi.string().required(),
  price: Joi.number().required(),
  value: Joi.number().required()
})

const pecSchema = Joi.object({
  limit: Joi.number().required(),
  itens: Joi.array().items(buyedPieceSchema)
})

const repositories: IRepository = {
  pecRepository: new PecRepository()
}

const pecServices = new PecService(repositories)

export default abstract class PecController {
  static async create(req: Request, res: Response) {
    const {
      limit, itens
    } = req.body
    const isValid = pecSchema.validate({
      limit, itens
    })

    console.log(isValid)
    return res.json(isValid)
  }
}