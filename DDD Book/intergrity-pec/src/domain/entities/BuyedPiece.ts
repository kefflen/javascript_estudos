
export interface BuyedPieceDTO {
  readonly id: string
  readonly quantity: number
  readonly pieceName: string
  readonly price: number
  readonly value: number
}

export type IUnregisteredBuyedPiece = Omit<BuyedPieceDTO, 'id'>

export default class BuyedPiece implements BuyedPieceDTO {
  #id!: BuyedPieceDTO['id']
  #quantity!: BuyedPieceDTO['quantity']
  #pieceName!: BuyedPieceDTO['pieceName']
  #price!: BuyedPieceDTO['price']
  #value!: BuyedPieceDTO['value']

  constructor({
    quantity, price, value, pieceName, id
  }: BuyedPieceDTO) {
    this.quantity = quantity
    this.price = price
    this.value = value
    this.pieceName = pieceName
    this.id = id
  }

  set id(value: string) {
    this.#id = value
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

  set quantity(value: number) {
    if (value < 0) throw Error("Invalid quantity")
    this.#quantity = value
  }

  get id() {
    return this.#id
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