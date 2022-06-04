import Pec, { IUnregisteredPec } from "../entities/Pec";

export default interface IPecRepository {
  create(pec: IUnregisteredPec): Awaited<Promise<Pec>>
  getAll(): Awaited<Promise<Pec>>
  isBlocked(pecId: string): Awaited<Promise<boolean>>
  update(pec: Pec): Awaited<Promise<Pec>>
}