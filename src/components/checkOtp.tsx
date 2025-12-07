"use client";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { CompareOTP } from "@/lib/actions/compareOtp";
import { CreateUserViaTemp } from "@/lib/actions/createUserViaTemp";
import { GetExpiryDate } from "@/lib/actions/getExpiryDate";
import { HandleResend } from "@/lib/actions/handleResend";
import { time } from "console";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CheckOtp() {
  const [otp, setOtp] = useState("");
  const [otpResponse, setOtpResponse] = useState<
    "userNotFound" | "invalid" | "valid" | "expired" | ""
  >("");
  const [expiry, setExpiry] = useState<Date | undefined>();
  const [timeLeft, setTimeLeft] = useState(300);
  const [isExpired, setIsExpired] = useState(false);

  const [canResend, setCanResend] = useState(false);

  async function fetchExpiryDate() {
    const response = await GetExpiryDate();
    setExpiry(response);
  }
  const handleClick = async () => {
    const response = await CompareOTP(otp);
    console.log(response);
    if (response == "valid") {
      // toast the user that they registered successfully
      redirect("/signIn");
    }
    setOtpResponse(response);
    setOtp("");
  };
  const handleResend = async () => {
    HandleResend();
    fetchExpiryDate();
    setOtpResponse("");
    setCanResend(false);
    setIsExpired(false);
  };

  useEffect(() => {
    if (timeLeft <= 270) setCanResend(true);
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    fetchExpiryDate();
  }, []);

  useEffect(() => {
    setTimeLeft(Math.floor((Number(expiry) - Date.now()) / 1000));
  }, [expiry]);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-1 pb-8">
          <h1 className="font-bold text-4xl text-foreground pt-4">
            Verify Your Email
          </h1>
          <p className="text-muted-foreground/70">
            Enter the 6-digit code sent to your email
          </p>

          {(otpResponse == "expired" || otpResponse == "userNotFound") && (
            <p className=" text-red-500 pt-3">
              Some error has occured. Try Signing Up again .
            </p>
          )}
          {!(otpResponse == "expired" || otpResponse == "userNotFound") &&
            !isExpired &&
            otpResponse == "invalid" && (
              <p className=" text-red-500 pt-3">
                OTP is incorrect. Please try again OR Resend new OTP
              </p>
            )}
          {!(otpResponse == "expired" || otpResponse == "userNotFound") &&
            isExpired && (
              <p className="text-red-500 pt-3">
                Your OTP has expired . Please request new one.
              </p>
            )}
        </div>
        <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className="border-2 border-foreground/20 text-lg font-bold size-15 "
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={1}
              className="border-2 border-foreground/20 text-lg font-bold size-15"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={2}
              className="border-2 border-foreground/20 text-lg font-bold size-15"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={3}
              className="border-2 border-foreground/20 text-lg font-bold size-15"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={4}
              className="border-2 border-foreground/20 text-lg font-bold size-15"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={5}
              className="border-2 border-foreground/20 text-lg font-bold size-15"
            />
          </InputOTPGroup>
        </InputOTP>
        {/* Timer and Status */}
        <div
          className={`flex items-center  w-full ${
            expiry ? "justify-between" : "justify-end"
          }`}
        >
          {expiry && (
            <div
              className={`flex items-center gap-2 ${
                isExpired || otpResponse == "expired"
                  ? "text-destructive"
                  : "text-muted-foreground"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.293.707l-1.414 1.414a1 1 0 001.414 1.414L9 9.414V6z"
                  clipRule="evenodd"
                />
              </svg>
              {isExpired ? (
                <div className="font-semibold">Code expired</div>
              ) : (
                <div className="flex items-center justify-center gap-1">
                  Code expires in
                  <div className="font-semibold">{formatTime(timeLeft)}</div>
                </div>
              )}
            </div>
          )}
          <button
            className={`text-primary hover:underline font-medium ${
              canResend ? " cursor-pointer" : " cursor-not-allowed"
            }`}
            onClick={handleResend}
            disabled={!canResend}
          >
            Resend Code
          </button>
        </div>
        <Button
          className="my-4 py-3 text-lg w-full bg-primary/80 cursor-pointer"
          onClick={handleClick}
        >
          Verify OTP
        </Button>
      </div>
    </div>
  );
}
