-- CreateTable
CREATE TABLE "Pec" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "limit" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "PieceBuy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL,
    "pieceName" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "value" REAL NOT NULL
);
