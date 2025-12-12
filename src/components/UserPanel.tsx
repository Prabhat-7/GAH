import { auth } from "@/lib/auth";
import UserButton from "./UserButton";
import type { User } from "next-auth";

export default async function UserPanel() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className=" flex items-center justify-start gap-3">
      <UserButton user={user as User} />
      <p className="font-bold text-muted-foreground">{user?.name}</p>
    </div>
  );
}
