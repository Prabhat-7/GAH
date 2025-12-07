import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "./actions/getUser";
import bcrpyt from "bcrypt";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const user = await getUser(credentials?.email as string);
        const isValidPassword = await bcrpyt.compare(
          credentials?.password as string,
          user?.password as string
        );

        if (user) {
          if (isValidPassword) {
            return user;
          } else throw new Error("Invalid password");
        } else {
          throw new Error("No user found");
        }
      },
    }),
    GoogleProvider({
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      clientId: process.env.AUTH_GOOGLE_ID,
    }),
  ],
});
