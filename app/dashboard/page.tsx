"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
 
export default function Dashboard() {
  const { data: session } = useSession()
  const router = useRouter()
  
  if (!session) {
    router.push('/auth/signin')
  }
 
  return (
    <p>You are, welcome! {session?.user?.name}</p>
  )
}