-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "img_url" TEXT NOT NULL DEFAULT '',
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "quantity" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

