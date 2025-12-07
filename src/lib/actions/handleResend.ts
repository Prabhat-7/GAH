"use server";
import "server-only";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import db from "../db";
import bcrypt from "bcrypt";
import { SendOtp } from "./sendOtp";

export async function HandleResend() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value as string;
  if (token == undefined) return "expired";
  const JWT_SECRET = process.env.JWT_SECRET as string;
  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString() as string;

  const otp = (await bcrypt.hash(verificationCode, 10)) as string;
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    const id = decoded.id;
    const pendingUser = await db.pendingUser.update({
      where: { id },
      data: {
        otp,
        otp_expiry: new Date(Date.now() + 5 * 60 * 1000),
      },
    });
    await SendOtp(pendingUser.email, verificationCode);
  } catch (err) {
    console.log(err);
  }
}
