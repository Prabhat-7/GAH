"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login, loginWithCredentials } from "@/actions/auth";

export default function SignIn() {
  const router = useRouter();

  const [error, setError] = useState("");
  const CredentialsLogin = async (formData: FormData) => {
    try {
      const response = await loginWithCredentials(formData);
      router.push("/shop");
      if (response.error) {
        setError(response.error.message);
      }
    } catch (error) {
      setError("Check your credentials");
    }
  };

  return (
    <div className="space-y-6 gap-3  flex flex-col justify-center items-center pt-6">
      <Card className="border shadow-lg w-[35%] p-6 mt-4 ">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>

        <CardContent>
          {error && <p className="text-red-500">{error}</p>}
          <form
            action={(formData: FormData) => CredentialsLogin(formData)}
            className="space-y-6"
          >
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="h-10"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Forgot?
                </a>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="h-10"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            {/* Sign In Button */}
            <Button type="submit" className="w-full h-10 text-base font-medium">
              Sign in
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          {/* Social Sign In */}
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              className="h-10 bg-transparent w-[80%]"
              onClick={login}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link
          href="/signUp"
          className="text-primary hover:underline font-medium"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
