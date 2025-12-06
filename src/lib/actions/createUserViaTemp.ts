"use server";
import "server-only";
import db from "../db";
import { Whisper } from "next/font/google";

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
