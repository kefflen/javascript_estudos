export interface IBuyedPiece {
  readonly quantity: number
  readonly pieceName: string
  readonly price: number
  readonly value: number
}

export default class BuyedPiece implements IBuyedPiece {
  #quantity!: number
  #pieceName!: string
  #price!: number
  #value!: number

  constructor(
      pieceName: string,
      price: number,
      value: number,
      quatity: number
  ) {
      this.quatity = quatity
      this.price = price
      this.value = value
      this.pieceName = pieceName
  }

  set pieceName(value: string) {
      this.#pieceName = value
  }
  set price(value: number) {
      if (value < 0) throw Error("Invalid price")
      this.#price = value
  }
  set value(value: number) {
      if (value < 0) throw Error("Invalid value")
      this.#value = value
  }
  set quatity(value: number) {
      if (value < 0) throw Error("Invalid quantity")
      this.#quantity = value
  }

  get pieceName() {
      return this.#pieceName
  }
  get price() {
      return this.#price
  }
  get value() {
      return this.#value
  }
  get quantity() {
      return this.#quantity
  }
}