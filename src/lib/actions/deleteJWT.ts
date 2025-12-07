"use server";
import { cookies } from "next/headers";
import "server-only";

export async function DeleteJWT() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}
