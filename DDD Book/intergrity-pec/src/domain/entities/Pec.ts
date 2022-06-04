import BuyedPiece, { BuyedPieceDTO, IUnregisteredBuyedPiece } from "./BuyedPiece";

export interface PecDTO {
  id: string
  itens: BuyedPieceDTO[]
  limit: number
}

export interface IUnregisteredPec {
  limit: number
  itens: IUnregisteredBuyedPiece[]
}

export default class Pec implements PecDTO {
  #itens!: BuyedPiece[]
  public readonly id: string
  public readonly limit: number
  constructor({
    itens, limit, id
  }: PecDTO) {
    this.itens = itens.map(item => new BuyedPiece(item))
    this.limit = limit
    this.id = id
  }

  set itens(value: BuyedPiece[]) {
    const total = value.reduce((sum, item) => sum + item.value, 0)
    if (total > this.limit) throw Error("The total cannot be greater than limit")
    this.#itens = value
  }
  get itens() {
    return this.#itens
  }
}