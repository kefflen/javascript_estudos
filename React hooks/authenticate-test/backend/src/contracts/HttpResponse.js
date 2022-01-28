

module.exports = class HttpResponse {
  constructor(statusCode, body) {
    this.statusCode = statusCode
    this.body = body
  }

  static badRequest(body) {
    return new HttpResponse(400, body)
  }

  static ok(body) {
    return new HttpResponse(201, body)
  }
}