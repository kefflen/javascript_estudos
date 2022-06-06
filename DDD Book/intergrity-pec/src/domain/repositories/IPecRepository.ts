import Pec, { IUnregisteredPec, PecDTO } from "../entities/Pec";

export default interface IPecRepository {
  create(pec: IUnregisteredPec): Promise<Pec>
  getAll(): Promise<Pec[]>
  isBlocked(pec: PecDTO, reserveId?: string): Promise<boolean>
  block(pecId: string): Promise<boolean>
  update(pec: Pec): Promise<Pec>
}