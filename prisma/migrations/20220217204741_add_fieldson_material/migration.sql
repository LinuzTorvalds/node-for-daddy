/*
  Warnings:

  - The primary key for the `material` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `code` to the `material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "material" DROP CONSTRAINT "material_pkey",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "material_pkey" PRIMARY KEY ("id");
