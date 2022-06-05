import { IUnregisteredBuyedPiece } from "../entities/BuyedPiece"
import Pec, { IUnregisteredPec, PecDTO } from "../entities/Pec"
import IRepository from "../repositories/IRepositories"

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

    async getPecs() {
        return await this.repositories.pecRepository.getAll()
    }

    async update(pecDTO: PecDTO) {
        const { pecRepository } = this.repositories
        const isBlocked = await pecRepository.isBlocked(pecDTO)
        if (isBlocked) throw Error('Cannot update')

        const pec = new Pec(pecDTO)
        const createdPec = await pecRepository.update(pec)
        return createdPec
    }
}