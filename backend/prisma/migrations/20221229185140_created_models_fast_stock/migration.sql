-- AlterTable
ALTER TABLE "products" ADD COLUMN     "stock" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "color" SET DEFAULT 'Sem cor';
