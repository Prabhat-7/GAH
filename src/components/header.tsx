import { auth } from "@/lib/auth";
import Logo from "./logo";
import NavBar from "./navbar";
import UserButton from "./userbutton";

export default async function Header() {
  const session = await auth();
  const user = session?.user;
  return (
    <div className=" flex flex-row justify-start p-6 gap-4 h-[12vh] bg-background/95 border-b border-border sticky top-0 z-50">
      <Logo />
      <NavBar />
      {user && (
        <div className="flex absolute top-4 right-4 border-2 rounded-full p-0 border-primary">
          <UserButton user={user} />
        </div>
      )}
    </div>
  );
}
