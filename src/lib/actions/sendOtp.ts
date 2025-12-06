"use server";
import "server-only";
import { otpEmailTemplate } from "@/templates/emailTemplates";
import nodemailer from "nodemailer";

export async function SendOtp(email: string, verificationCode: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "prabhatsitaula@gmail.com",
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });
  try {
    const info = await transporter.sendMail({
      from: '"Girls Accessories Hub" <prabhatsitaula@gmai.com>',
      to: email,
      subject: `OTP [${verificationCode}]`,
      text: "Verify your Email",
      html: otpEmailTemplate.replace("{{OTP_CODE}}", verificationCode),
    });
  } catch (error) {
    console.log(error);
  }
  return "Otp sent successfully";
}
