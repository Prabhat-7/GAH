import NextAuth, { DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { JWT } from "next-auth/jwt";
import prisma from "./db";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";
import { getUser } from "@/actions/getUser";

export type Role = "admin" | "user";

declare module "next-auth/jwt" {
  interface JWT {
    role: Role;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      role: Role;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma as any) as any,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token.role) {
        session.user.role = token.role; // 👈 expose role to session
      }

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // 👈 put role inside token
      }
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const user = await getUser(credentials?.email as string);

        if (!user) throw new Error("No user found");

        const isValidPassword = await bcrypt.compare(
          credentials?.password as string,
          user.password as string
        );

        if (isValidPassword) {
          return user as any;
        } else {
          throw new Error("Invalid password");
        }
      },
    }),
    GoogleProvider({
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      clientId: process.env.AUTH_GOOGLE_ID,
    }),
  ],
});
