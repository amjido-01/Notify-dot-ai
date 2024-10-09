"use client"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
// import { useRouter } from "next/navigation"
 
export default function Dashboard() {
  const { data: session } = useSession()
  // const router = useRouter() //
 
  return (
    <div>
      <p>You are, welcome! {session?.user?.name}</p>
      <Button onClick={() => signOut( {redirectTo: "/"})}>Sign out</Button>
    </div>
  )
}