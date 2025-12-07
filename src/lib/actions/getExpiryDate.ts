"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import "server-only";
import db from "../db";

export async function GetExpiryDate() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value as string;
  const JWT_SECRET = process.env.JWT_SECRET as string;
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    const id = decoded.id;
    const user = await db.pendingUser.findUnique({
      where: {
        id,
      },
    });
    return user?.otp_expiry;
  } catch (err) {
    console.log(err);
  }
}
