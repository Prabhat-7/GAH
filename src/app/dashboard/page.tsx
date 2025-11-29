import { auth } from "@/lib/auth";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import UserButton from "@/components/userbutton";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-row bg-muted-foreground/30 w-full justify-end px-3 py-2 shadow-sm">
        <h1 className="text-4xl font-bold fixed left-[45%]">GAH</h1>
        <UserButton user={session?.user} />
      </div>
    </div>
  );
}
