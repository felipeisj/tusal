/*
  Warnings:

  - Added the required column `url_img` to the `Profesional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_img` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `nombre` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profesional" ADD COLUMN     "url_img" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "url_img" TEXT NOT NULL,
ALTER COLUMN "nombre" SET NOT NULL;
