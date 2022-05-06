import { PrismaClient } from "@prisma/client";

//Se trocar o tipo do banco run npx prisma generate
export const Prisma = new PrismaClient({
    log: ['query']
})