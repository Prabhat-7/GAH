import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "./actions/getUser";
import db from "./db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signIn",
  },
  callbacks: {
    async signIn({ user, account }) {
      // For OAuth providers (Google, GitHub, etc.)
      if (
        account?.provider === "google" ||
        account?.provider === "credentials"
      ) {
        const dbUser = await db.user.findUnique({
          where: { email: user.email! },
          select: { id: true },
        });

        if (!dbUser) {
          return false;
        }
      }
      // For credentials provider, hasAccess should already be set or handled by authorize flow
      // if a user signs in with credentials, their hasAccess status is determined by what's in the DB

      return true; // Continue the sign-in process
    },
  },
  trustHost: true,
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const user = await getUser(credentials?.email as string);
        if (user) {
          if (user.password == credentials?.password) {
            return user;
          } else throw new Error("Invalid password");
        } else {
          throw new Error("No user found");
        }
      },
    }),
    GoogleProvider({
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],
});
