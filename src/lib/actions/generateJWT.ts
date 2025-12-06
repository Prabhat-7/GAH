"use server";
import "server-only";
import jwt from "jsonwebtoken";
import db from "../db";

export async function GenerateJWT(email: string) {
  const JWT_SECRET = process.env.JWT_SECRET as string;
  const user = await db.pendingUser.findUnique({
    where: { email },
  });

  const payload = {
    id: user?.id,
  };
  const options = {
    expiresIn: 5 * 60,
  };
  return jwt.sign(payload, JWT_SECRET, options as jwt.SignOptions);
}
