import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import HttpResponse from "../utils/HttpResponse";
import AppException from "../exceptions/appException"

/**
 * TESTS
 * Precisa tratar o erro caso code não seja passado
 */

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    if (!req.body?.code) {
      const response = HttpResponse.badRequest("Need to receive code on body")
      return res.status(response.statusCode).json(response.body)
    }
    const { code } = req.body

    const service = new AuthenticateUserService()
    let result

    try {
      result = await service.execute(code)
    } catch (e) {
      let response
      if (e instanceof AppException) {
        response = HttpResponse.unauthorized({
          message: e.message
        })
      } else {
        response = HttpResponse.serverError("Server error")
      }

      return res.status(response.statusCode).json(response.body)
    }

    const response = HttpResponse.ok(result)
    return res.status(response.statusCode).json(response.body)
  }
}

export {
  AuthenticateUserController
}