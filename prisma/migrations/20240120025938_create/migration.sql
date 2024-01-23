-- CreateEnum
CREATE TYPE "Profile" AS ENUM ('admin', 'intern', 'master_admin');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('graduation', 'postgraduate');

-- CreateEnum
CREATE TYPE "VacationStatus" AS ENUM ('approved', 'reproved');

-- CreateTable
CREATE TABLE "users" (
    "email" VARCHAR(60) NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "profile" "Profile" NOT NULL,
    "status" "UserStatus" NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "cell_phone_number" VARCHAR(11) NOT NULL,
    "contract_id" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "termination_date" TIMESTAMP(3),
    "type" "ContractType" NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacations" (
    "id" TEXT NOT NULL,
    "contract_idd" TEXT NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "status" "VacationStatus",

    CONSTRAINT "vacations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cell_phone_number_key" ON "users"("cell_phone_number");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacations" ADD CONSTRAINT "vacations_contract_idd_fkey" FOREIGN KEY ("contract_idd") REFERENCES "contracts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
