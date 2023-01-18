/*
  Warnings:

  - Added the required column `size_id` to the `salesNow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "salesNow" ADD COLUMN     "size_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "salesNow" ADD CONSTRAINT "salesNow_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
