import CheckOtp from "@/components/checkOtp";
import { auth } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function VerifyOTP() {
  const user = await auth();
  if (user) {
    redirect("/shop");
  }
  const cookieStore = await cookies();
  if (!cookieStore.get("token")) redirect("/signIn");
  return (
    <div>
      <CheckOtp />
    </div>
  );
}
