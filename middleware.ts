// import NextAuth from "next-auth"
// import authConfig from "./auth.config"
// import { auth } from "./auth"
import { NextResponse, NextRequest } from "next/server"
import { cookies } from "next/headers"
import { decrypt } from "./lib/session"
 
// export const { auth: middleware } = NextAuth(authConfig)
// please
const protectedRoutes = ["/dashboard", "/interest", "/profile", "auth/setting"]
const publicRoutes = ["/auth/signin", "/auth/signup", "/"] 

export default async function middleware(req: NextRequest) {	

  const userCookies = cookies()
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path)
  const isPublic = publicRoutes.includes(path);

 
  // const sessionToken = userCookies.get("authjs.session-token")?.value;
  // const session = await decrypt(sessionToken);

  // if (isProtected && !session) {
  //   return NextResponse.redirect(new URL("/auth/signin", req.url))
  // }
  // if (isPublic && !session) {
  //   return NextResponse.redirect(new URL("/auth/signin", req.url))
  // }
  // return NextResponse.next()
}


export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }
