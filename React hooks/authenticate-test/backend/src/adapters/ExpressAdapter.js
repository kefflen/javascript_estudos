
module.exports = function expressAdaptRouter (route) {
  async function handleErrors(req, res, next) {
    try {

    } catch (e) {
      const httpResponse = HttpReponse.badRequest(e.message)
    }
  }
  return async function(req, res) {
    const httpRequest = {
      body: req.body
    }
    console.log(httpRequest)
    let { statusCode, body } = await route(httpRequest)
    res.status(statusCode).json(body)
  }
}