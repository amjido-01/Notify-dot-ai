import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GoogleProvider
    ({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  // callbacks
  // callbacks: {
  //   async jwt({token, user}) {
  //     if (user) {
  //       token.id = user.id
  //     }
  //     return token
  //   },
  //   async session({session, token}) {
  //     if (token) {
  //       session.id = token.id
  //     }
  //     return session
  //   },
  // }
})