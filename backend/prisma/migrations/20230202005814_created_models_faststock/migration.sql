/*
  Warnings:

  - Changed the type of `amount` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "amount",
ADD COLUMN     "amount" DECIMAL(9,2) NOT NULL;
