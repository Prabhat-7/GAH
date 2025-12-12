"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { redirect } from "next/navigation";

import { useState } from "react";
import { CreatePendingUser } from "@/actions/createPendingUser";

export default function SignUp() {
  const [pendingUserId, setPendingUserId] = useState("");
  const signUp = async (formData: FormData) => {
    const email = (formData.get("email") as string).trim();
    const name = (formData.get("name") as string).trim();
    const password = (formData.get("password") as string).trim();
    if (!email || !name || !password) {
      alert("Fill all the credentials");
      return;
    }
    try {
      const response = await CreatePendingUser(formData);
      if (response == "userExists") {
        alert("You already have an account, please sign in");
        redirect("/signIn");
      }
      if (response == "pendingUserExists") {
        alert(
          "You entered your credentials earlier . Please verify your email"
        );
      }
    } catch (error) {
      alert("You already have an account, please sign in");
      redirect("/signIn");
    }

    redirect("/verifyOTP");
  };
  return (
    <div className="flex items-center justify-center p-3 mt-6 ">
      <Card className=" w-[40vw] ">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center">
            Create an account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={(formData: FormData) => signUp(formData)}>
            <div className="flex  flex-col p-10 gap-4">
              <p className="">Name</p>
              <Input id="name" name="name" placeholder="John" />
              {/* Email Input */}
              <p className=""> Email Address</p>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />
              <p>Password</p>
              <Input name="password" type="password" placeholder="••••••••" />
            </div>
            <div className=" items-center justify-center flex px-9  ">
              <Button type="submit" className=" text-lg w-full py-4 ">
                Sign up{" "}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
