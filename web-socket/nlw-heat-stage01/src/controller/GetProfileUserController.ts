import { Request, Response } from "express";
import { GetLastMessagesServices } from "../services/GetLastMessagesService";
import { GetProfileUserService } from "../services/GetProfileUserService";
import HttpResponse from "../utils/HttpResponse";


class GetProfileUserController {
  async handle(request: Request, response: Response) {
    const userId = request.body.userId
    const user = await new GetProfileUserService().execute(userId)
    const httpResponse = HttpResponse.ok(user)
    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}

export {
  GetProfileUserController
}
