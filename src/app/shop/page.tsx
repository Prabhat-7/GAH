import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Shop() {
  const session = await auth();
  if (!session?.user) {
    redirect("/signIn");
  }
  return <div className="flex flex-col justify-center items-center ">Shop</div>;
}
