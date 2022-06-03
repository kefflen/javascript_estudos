
interface IBuyedPiece {
    readonly quantity: number
    readonly pieceName: string
    readonly price: number
    readonly value: number
}

export default class Pec {
    constructor(
        public readonly id: string,
        public readonly limit: number,
        public readonly itens: IBuyedPiece[]
    ) {}
}
