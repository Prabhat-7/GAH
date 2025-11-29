"use server";

import { signIn, signOut } from "../auth";

export async function login() {
  await signIn("google", { redirectTo: "/dashboard" });
}
export async function logout() {
  await signOut({ redirectTo: "/signIn" });
}
export async function loginWithCredentials(formData: FormData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
}
