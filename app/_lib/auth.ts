import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import Discord from "@auth/core/providers/discord";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
  ],
  callbacks: {},
  // pages: {
  //     signIn: '/login',
  // }
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
