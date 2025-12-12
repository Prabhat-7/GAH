"use server";
import "server-only";
import bcrypt from "bcrypt";
import { SendOtp } from "./sendOtp";
import { GenerateJWT } from "./generateJWT";
import { SetJWT } from "./setJwtCookies";
import { getUser } from "./getUser";
import db from "@/lib/db";

export async function CreatePendingUser(formData: FormData) {
  const existingUser = await getUser(formData.get("email") as string);

  if (existingUser) return "userExists";
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const hashedPassword = (await bcrypt.hash(password, 10)) as string;

  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString() as string;

  const otp = (await bcrypt.hash(verificationCode, 10)) as string;
  try {
    const pendingUser = await db.pendingUser.create({
      data: {
        name,
        email,
        password: hashedPassword,
        otp,
        otp_expiry: new Date(Date.now() + 5 * 60 * 1000),
        expires_at: new Date(Date.now() + 30 * 60 * 1000), //expires after 30 minutes
      },
    });
    await SendOtp(pendingUser.email, verificationCode);

    const jwt = await GenerateJWT(pendingUser.email);

    await SetJWT(jwt);

    return pendingUser;
  } catch (err) {
    return "pendingUserExists";
  }
}
