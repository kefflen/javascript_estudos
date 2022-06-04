import { IUnregisteredBuyedPiece } from "../entities/BuyedPiece";
import { IUnregisteredPec } from "../entities/Pec";
import IRepository from "../repositories/IRepositories";

export default class PecService {
    private readonly repositories: IRepository
    constructor(
        repositories: IRepository
    ) {
        this.repositories = repositories
    }
    
    async create(limit: number, itens: IUnregisteredBuyedPiece[]) {
        const { pecRepository } = this.repositories
        const pecModel: IUnregisteredPec = {
            limit,
            itens
        }
        const pec = await pecRepository.create(pecModel)
        return pec
    }
}