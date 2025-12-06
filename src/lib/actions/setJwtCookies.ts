"use server";
import { cookies } from "next/headers";
import "server-only";

export async function SetJWT(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("token", token);
}
