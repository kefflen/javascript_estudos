import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import HttpResponse from "../utils/HttpResponse"

interface IPayload {
  sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization
  if(!authToken  || !authToken.startsWith("Bearer")) {
    const httpResponse = HttpResponse.unauthorized("Invalid token")
    return response.status(httpResponse.statusCode).json(httpResponse.body)
  }
  
  const [, token] = authToken.split(" ")
  try {
    const { sub } = verify(token, process.env.SECRET?? "secret") as IPayload
    request.body.userId = sub
    return next()
  } catch(e) {
    const httpResponse = HttpResponse.unauthorized("Invalid token was given or is expired")
    return response.status(httpResponse.statusCode).json(httpResponse.body)
  }

  return
}