export default class HttpResponse {
  constructor(
    public body: any,
    public statusCode: number
  ){}

  static badRequest(message: string) {
    return new this({message}, 400)
  }

  static ok(body: any) {
    return new this(body, 200)
  }

  static created(body: any) {
    return new this(body, 201)
  }

  static unauthorized(body: any) {
    return new this(body, 401)
  }

  static serverError(message: string) {
    return new this({message}, 500)
  }
}

