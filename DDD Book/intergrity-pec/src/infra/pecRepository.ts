import { PieceBuy, Pec as PecPrisma, prisma } from "@prisma/client";
import db from "../config/db";
import Pec, { IUnregisteredPec, PecDTO } from "../domain/entities/Pec";
import IPecRepository from "../domain/repositories/IPecRepository";

export default class PecRepository implements IPecRepository {
  async block(pecId: string): Promise<boolean> {
    const isBlocked = await this.verifyIsBlockedById(pecId)
    if (isBlocked) return false

    await db.reserveEntitie.upsert({
      where: {
        entitieId_entitieName: {
          entitieId: pecId, entitieName: 'pec'
        }
      },
      update: {
        reservedAt: new Date()
      },
      create: {
        entitieId: pecId,
        entitieName: 'pec'
      }
    })

    return true
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

  async isBlocked(pec: PecDTO, reserveId = ''): Promise<boolean> {
    return this.verifyIsBlockedById(pec.id, reserveId)
  }
  
  async update(pec: Pec): Promise<Pec> {

    for (let buyedPiece of pec.itens) {
      await db.pieceBuy.update({
        where: {
          id: buyedPiece.id
        },
        data: buyedPiece
      })
    }

    const pecData = await db.pec.update({
      where: { id: pec.id },
      data: {
        limit: pec.limit
      }, include: { piecesBuy: true }
    })

    const pecDTO = this.data2DTO(pecData)
    return new Pec(pecDTO)
  }

  private data2DTO(pecData: PecPrisma & { piecesBuy: PieceBuy[] }): PecDTO {
    return {
      limit: pecData.limit,
      id: pecData.id,
      itens: pecData.piecesBuy
    };
  }

  private async verifyIsBlockedById(pecId: string, reserveId?: string) {
    const lastReserve = await db.reserveEntitie.findUnique({
      where: {
        entitieId_entitieName: {
          entitieId: pecId, entitieName: 'pec'
        }
      }
    })

    if (lastReserve) {
      const difference =  (Date.now() - lastReserve.reservedAt.getTime())/1000/60
      if (reserveId === lastReserve.id) return false
      if (difference > 1) {
        return false
      }
    }
    return true
  }

}