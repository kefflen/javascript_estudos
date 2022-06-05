-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PieceBuy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL,
    "pieceName" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "value" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "pecId" TEXT,
    CONSTRAINT "PieceBuy_pecId_fkey" FOREIGN KEY ("pecId") REFERENCES "Pec" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PieceBuy" ("createdAt", "id", "pieceName", "price", "quantity", "updatedAt", "value") SELECT "createdAt", "id", "pieceName", "price", "quantity", "updatedAt", "value" FROM "PieceBuy";
DROP TABLE "PieceBuy";
ALTER TABLE "new_PieceBuy" RENAME TO "PieceBuy";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
