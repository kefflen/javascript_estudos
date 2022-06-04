/*
  Warnings:

  - Added the required column `updatedAt` to the `PieceBuy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pec` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PieceBuy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL,
    "pieceName" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "value" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_PieceBuy" ("id", "pieceName", "price", "quantity", "value") SELECT "id", "pieceName", "price", "quantity", "value" FROM "PieceBuy";
DROP TABLE "PieceBuy";
ALTER TABLE "new_PieceBuy" RENAME TO "PieceBuy";
CREATE TABLE "new_Pec" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "limit" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Pec" ("id", "limit") SELECT "id", "limit" FROM "Pec";
DROP TABLE "Pec";
ALTER TABLE "new_Pec" RENAME TO "Pec";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
