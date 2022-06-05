-- CreateTable
CREATE TABLE "ReserveEntitie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entitieId" TEXT NOT NULL,
    "reservedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entitieName" TEXT NOT NULL
);
