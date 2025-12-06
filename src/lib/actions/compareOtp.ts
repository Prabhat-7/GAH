"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import db from "../db";
import { it } from "node:test";
import { CreateUserViaTemp } from "./createUserViaTemp";
import { DeletePendingUser } from "./deletePendingUser";

export async function CompareOTP(otp: string) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value as string;
  if (token == undefined) return "expired";
  const JWT_SECRET = process.env.JWT_SECRET as string;
  const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
  const user_id = decoded.id;
  try {
    const user = await db.pendingUser.findUnique({
      where: {
        id: user_id,
      },
    });
    const trueOTP = user?.otp as string;

    const isValidOtp = await bcrypt.compare(otp, trueOTP);

    if (isValidOtp) {
      await CreateUserViaTemp(user_id);
      await DeletePendingUser(user_id);
      return "valid";
    }
    return "invalid";
  } catch (err) {
    return "userNotFound";
  }
}
