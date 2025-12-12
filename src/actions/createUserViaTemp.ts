"use server";
import "server-only";
import { Whisper } from "next/font/google";
import db from "@/lib/db";

export async function CreateUserViaTemp(id: string) {
  try {
    const user = await db.pendingUser.findUnique({
      where: { id },
    });
    console.log("User:-", user);

    await db.user.create({
      data: {
        email: user?.email as string,
        password: user?.password as string,
        name: user?.name as string,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
