import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-end h-screen p-6">
      <h1></h1>
      <Button>
        <Link href="/signIn">Sign In</Link>
      </Button>
    </div>
  );
}
