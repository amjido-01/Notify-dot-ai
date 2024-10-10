import GoogleProvider from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
 // please
// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [GoogleProvider
        ({
          clientId: process.env.AUTH_GOOGLE_ID!,
          clientSecret: process.env.AUTH_GOOGLE_SECRET!,
          allowDangerousEmailAccountLinking: true,
        }),
      ]
} satisfies NextAuthConfig