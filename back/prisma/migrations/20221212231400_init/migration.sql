/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Profesional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Profesional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profesional" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "nombre" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Profesional_email_key" ON "Profesional"("email");
