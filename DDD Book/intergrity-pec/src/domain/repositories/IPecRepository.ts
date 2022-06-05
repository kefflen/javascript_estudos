import Pec, { IUnregisteredPec, PecDTO } from "../entities/Pec";

export default interface IPecRepository {
  create(pec: IUnregisteredPec): Promise<Pec>
  getAll(): Promise<Pec[]>
  isBlocked(pec: PecDTO): Promise<boolean>
  block(pecId: string): Promise<void>
  update(pec: Pec): Promise<Pec>
}