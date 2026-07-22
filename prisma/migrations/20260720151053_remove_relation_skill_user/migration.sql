/*
  Warnings:

  - You are about to drop the column `icon` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `skills` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,iconKey]` on the table `skills` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "skills" DROP CONSTRAINT "skills_userId_fkey";

-- DropIndex
DROP INDEX "skills_userId_icon_key";

-- AlterTable
ALTER TABLE "skills" DROP COLUMN "icon",
DROP COLUMN "userId",
ADD COLUMN     "iconKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "skills_name_iconKey_key" ON "skills"("name", "iconKey");
