/*
  Warnings:

  - A unique constraint covering the columns `[entitieId,entitieName]` on the table `ReserveEntitie` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ReserveEntitie_entitieId_entitieName_key" ON "ReserveEntitie"("entitieId", "entitieName");
