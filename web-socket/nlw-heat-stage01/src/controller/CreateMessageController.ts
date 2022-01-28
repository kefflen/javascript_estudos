import { Request, Response } from "express"
import CreateMessageService from "../services/CreateMessageService"
import HttpResponse from "../utils/HttpResponse"

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body
    const result = await new CreateMessageService().execute(message, request.body.userId)
    
    const httpReponse = HttpResponse.created(result)
    return response.status(httpReponse.statusCode).json(httpReponse.body)
  }
}

export default CreateMessageController