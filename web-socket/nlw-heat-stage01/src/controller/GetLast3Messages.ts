import { Request, Response } from "express";
import { GetLastMessagesServices } from "../services/GetLastMessagesService";
import HttpResponse from "../utils/HttpResponse";


class GetLast3Messages {
  async handle(request: Request, response: Response) {
    const messages = await new GetLastMessagesServices().execute({
      page: 1, quantity: 3
    })
    const httpResponse = HttpResponse.ok(messages)
    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}

export {
  GetLast3Messages
}