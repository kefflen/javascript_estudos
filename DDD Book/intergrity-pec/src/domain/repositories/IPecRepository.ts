import Pec from "../entities/Pec";

export default interface IPecRepository {
  create(pec: Pec): Awaited<Promise<Pec>>
}