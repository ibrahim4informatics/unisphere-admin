/*
  Warnings:

  - The primary key for the `_FieldToModule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_LevelToModule` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `_FieldToModule` DROP PRIMARY KEY;

-- AlterTable
ALTER TABLE `_LevelToModule` DROP PRIMARY KEY;
