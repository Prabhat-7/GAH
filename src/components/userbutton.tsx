"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { LogOut, Settings, Shield } from "lucide-react";
import type { User } from "next-auth";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Role } from "@/lib/auth";
import { logout } from "@/actions/auth";

export default function UserButton({ user }: { user: User & { role: Role } }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="relative group">
          <div className="absolute -inset-0.5 bg-linear-to-br from-purple-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
          {user?.image && (
            <Avatar className="relative h-10 w-10 border-2 border-background transition-all duration-300">
              <AvatarImage
                src={user.image || "/dummy_user.jpg"}
                alt={"Avatar"}
                className="object-cover"
              />
              <AvatarFallback>
                {user?.name?.[0]?.toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-0 bg-linear-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 shadow-2xl">
        <div className="relative">
          <DialogTitle>
            <div className="flex flex-col items-center pb-6">
              <div className="relative mb-4">
                <div className="absolute -inset-2 bg-linear-to-r from-purple-400 to-blue-400 rounded-full blur opacity-50"></div>
                {user?.image && (
                  <Avatar className="relative h-20 w-20 border-4 border-white dark:border-slate-950">
                    <AvatarImage
                      src={user.image || "/dummy_user.jpg"}
                      alt={"Avatar"}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl font-bold">
                      {user?.name?.[0]?.toUpperCase() ?? "U"}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  {user.name?.split(" ")[0]}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 break-all">
                  {user.email}
                </p>
              </div>

              <div className="w-full mt-6 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
            </div>
          </DialogTitle>

          <div className="space-y-2">
            {/* admin panel button */}
            {user.role == "admin" && !pathname.includes("/admin") && (
              <div>
                <Link href={"/admin"}>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-purple-50 dark:hover:bg-slate-800 transition-all duration-200 group/btn">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover/btn:bg-purple-200 dark:group-hover/btn:bg-purple-900/50 transition-colors">
                      <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="font-medium">Admin Panel</span>
                    </div>
                    <span className="text-xs text-muted-foreground">→</span>
                  </button>
                </Link>

                <div className="h-px bg-linear-to-r from-transparent via-border to-transparent my-2"></div>
              </div>
            )}

            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-200 group/btn font-medium"
              onClick={logout}
            >
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg group-hover/btn:bg-red-200 dark:group-hover/btn:bg-red-900/50 transition-colors">
                <LogOut className="h-4 w-4" />
              </div>
              <span className="flex-1 text-left">Sign out</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
