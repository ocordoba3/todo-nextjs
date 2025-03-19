/*
  Warnings:

  - Added the required column `user_id` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Todo_user_id_idx" ON "Todo"("user_id");
