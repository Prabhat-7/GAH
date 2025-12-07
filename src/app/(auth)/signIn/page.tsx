import SignIn from "@/components/SignIn";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  const user = session?.user;
  if (user) redirect("/shop");
  return (
    <div>
      <SignIn />
    </div>
  );
}
