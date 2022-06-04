import Pec, { IUnregisteredPec } from "../entities/Pec";

export default interface IPecRepository {
  create(pec: IUnregisteredPec): Awaited<Promise<Pec>>
}