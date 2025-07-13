-- AlterTable
ALTER TABLE `User` ADD COLUMN `provider` VARCHAR(191) NOT NULL DEFAULT 'local',
    MODIFY `password` VARCHAR(100) NULL;
