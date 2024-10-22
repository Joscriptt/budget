"use server";

import { Transaction } from "@/types/Transaction";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getTransaction(): Promise<{
  transaction?: Transaction[];
  error: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transaction = await db.transactions.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { transaction };
  } catch (error) {
    return { error: "Database Error" };
  }
}

export default getTransaction;
