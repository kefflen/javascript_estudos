import BuyedPiece, { IBuyedPiece } from "./BuyedPiece";

export default class Pec {
    #itens!: BuyedPiece[]
    constructor(
        public readonly id: string,
        public readonly limit: number,
        itens: BuyedPiece[]
    ) {
        this.itens = itens
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
