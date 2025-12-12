"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { CreateUserViaTemp } from "./createUserViaTemp";
import { DeletePendingUser } from "./deletePendingUser";
import { DeleteJWT } from "./deleteJWT";
import db from "@/lib/db";

export async function CompareOTP(otp: string) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value as string;
  if (token == undefined) return "expired";
  const JWT_SECRET = process.env.JWT_SECRET as string;
  try {
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
        await DeleteJWT();
        return "valid";
      }
      return "invalid";
    } catch (err) {
      return "userNotFound";
    }
  } catch (err) {
    return "expired";
  }
}
