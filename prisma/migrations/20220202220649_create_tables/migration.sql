-- CreateTable
CREATE TABLE "users" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "material" (
    "lote" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "shelf_life" DATE NOT NULL,

    CONSTRAINT "material_pkey" PRIMARY KEY ("lote")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
