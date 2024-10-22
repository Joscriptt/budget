"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

async function deleteMe(id: string) {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    await db.transactions.delete({
      where: { id: id, userId },
    });

    revalidatePath("/");
    return { message: "Transaction Deleted" };
  } catch (error) {
    return { error: "Database Error" };
  }
}

export default deleteMe;
