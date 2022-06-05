import { PieceBuy, Pec as PecPrisma } from "@prisma/client";
import db from "../config/db";
import Pec, { IUnregisteredPec, PecDTO } from "../domain/entities/Pec";
import IPecRepository from "../domain/repositories/IPecRepository";

export default class PecRepository implements IPecRepository {
  block(pecId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(pec: IUnregisteredPec): Promise<Pec> {
    const { limit } = pec
    const pecData = await db.pec.create({
      data: {
        limit,
        piecesBuy: {
          create: pec.itens
        }
      }, include: { piecesBuy: true }
    })

    const pecDTO: PecDTO = this.data2DTO(pecData)

    return new Pec(pecDTO)
  }

  async getAll(): Promise<Pec[]> {
    const pecsData = await db.pec.findMany({
      include: { piecesBuy: true }
    })
    const pecs = pecsData
      .map(pecData => this.data2DTO(pecData))
      .map(pecDTO => new Pec(pecDTO))

    return pecs
  }

  async isBlocked(pec: PecDTO): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async update(pec: Pec): Promise<Pec> {
    throw new Error("Method not implemented.");
  }

  private data2DTO(pecData: PecPrisma & { piecesBuy: PieceBuy[] }): PecDTO {
    return {
      limit: pecData.limit,
      id: pecData.id,
      itens: pecData.piecesBuy
    };
  }

}