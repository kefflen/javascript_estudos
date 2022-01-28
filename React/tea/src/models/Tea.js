
module.exports = class Tea {
  constructor({
    id=null,
    name, image, description,
    keywords, origin, brew_time,
    temperature
  }) {
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    this.keywords = keywords
    this.origin = origin
    this.brew_time = brew_time
    this.temperature = temperature
  }
}