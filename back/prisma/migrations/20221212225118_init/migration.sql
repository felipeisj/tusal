/*
  Warnings:

  - Added the required column `fecha` to the `Ficha` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rut` to the `Profesional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rut` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ficha" ADD COLUMN     "fecha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profesional" ADD COLUMN     "rut" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rut" TEXT NOT NULL;
