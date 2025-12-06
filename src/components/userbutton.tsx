"use client";
import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { LogOut } from "lucide-react";
import { logout } from "@/lib/actions/auth";

export default function UserButton({ user }: { user: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Avatar>
            <Image
              src={user.image || "/dummy_user.jpg"}
              alt={"Avatar"}
              width={40}
              height={40}
            />
          </Avatar>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>
            <Image
              src={user.image || "/dummy_user.jpg"}
              alt={"Avatar"}
              width={100}
              height={100}
              className="rounded-full"
            />
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-bold">{user.name.split(" ")[0]}</p>
            <p className="text-md text-muted-foreground">{user.email}</p>
          </div>
          <hr className="w-full bg-muted-foreground" />
          <button
            className="flex flex-row items-center gap-3  p-3 rounded-md  cursor-pointer active:bg-muted-foreground/20"
            onClick={logout}
          >
            Sign out <LogOut />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
