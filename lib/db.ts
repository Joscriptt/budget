// import { PrismaClient } from "@prisma/client";

// declare global {
//   const prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = db;
// }

// // lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Optional: Enable query logging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
