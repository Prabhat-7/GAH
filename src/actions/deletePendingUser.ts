"use server";
import db from "@/lib/db";
import "server-only";
export async function DeletePendingUser(id: string) {
  return await db.pendingUser.delete({
    where: {
      id,
    },
  });
}
