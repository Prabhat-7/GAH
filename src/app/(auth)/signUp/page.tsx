import SignUp from "@/components/Signup";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth();
  const user = session?.user;
  if (user) redirect("/shop");
  return <SignUp />;
}
