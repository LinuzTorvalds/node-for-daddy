-- CreateTable
CREATE TABLE "reports" (
    "code" TEXT NOT NULL,
    "lote" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("code")
);
