"use server";
import "server-only";
import jwt from "jsonwebtoken";
import db from "@/lib/db";

export async function GenerateJWT(email: string) {
  const JWT_SECRET = process.env.JWT_SECRET as string;
  const user = await db.pendingUser.findUnique({
    where: { email },
  });

  const payload = {
    id: user?.id,
  };
  const options = {
    expiresIn: 30 * 60, // expires in 30 minutes
  } as jwt.SignOptions;
  return jwt.sign(payload, JWT_SECRET, options);
}
