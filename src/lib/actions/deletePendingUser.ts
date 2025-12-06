"use server";
import "server-only";
import db from "../db";
export async function DeletePendingUser(id: string) {
  return await db.pendingUser.delete({
    where: {
      id,
    },
  });
}
