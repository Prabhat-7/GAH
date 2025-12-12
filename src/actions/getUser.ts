"use server";
import db from "@/lib/db";
import "server-only";

export async function getUser(email: string) {
  const foundUser = await db.user.findUnique({ where: { email } });
  return foundUser;
}
