/*
  Warnings:

  - You are about to drop the column `updated_at` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `salesNow` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `salesNow` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `sizes` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "salesNow" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ALTER COLUMN "date_sale" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "sizes" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "updated_at";
