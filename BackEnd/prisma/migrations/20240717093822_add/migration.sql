/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `imageUrl`,
    ADD COLUMN `imageUrls` VARCHAR(191) NOT NULL DEFAULT 'https://asset.cloudinary.com/djfmzphje/494af7883fd6df6e2e8cc928dd3c07bd',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
