import db from "../db";

export async function getUser(email: string) {
  const foundUser = await db.user.findUnique({ where: { email } });
  return foundUser;
}
