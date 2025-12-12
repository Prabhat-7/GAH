"use server";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import "server-only";
interface UserData {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}
export default async function createUser(userData: UserData) {
  const password = userData.password;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await db.user.create({
      data: {
        email: userData.email,
        name: userData.name,
        password: hashedPassword,
        role: userData.role,
      },
    });
    console.log(user);
  } catch (err) {
    return "user already exists";
  }
}
