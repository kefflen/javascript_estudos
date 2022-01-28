
export default class AppException extends Error {
  public statusCode: number
  public name: string

  constructor(message: string, statusCode: number) {
    super(message)
    this.message = message
    this.statusCode = statusCode
    this.name = "AppException"
  }

}

