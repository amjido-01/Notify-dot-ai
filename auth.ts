import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GoogleProvider
    ({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  //providers: [
    //Google
    // GoogleProvider({
    //clientId: process.env.GOOGLE_CLIENT_ID!,
    //clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  //],
})