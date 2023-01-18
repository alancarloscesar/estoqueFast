/*
  Warnings:

  - You are about to alter the column `amount` on the `salesNow` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,2)`.
  - You are about to alter the column `price` on the `salesNow` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,2)`.

*/
-- AlterTable
ALTER TABLE "salesNow" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(9,2),
ALTER COLUMN "price" SET DATA TYPE DECIMAL(9,2);
