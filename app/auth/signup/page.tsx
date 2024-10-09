'use client'

import { useState } from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BrainCircuit } from "lucide-react"
import { signIn } from "next-auth/react"
// import { useSession } from "next-auth/react"

export default function Page() {
    // const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    signIn("google", { redirectTo: "/dashboard" })
    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen bg-[#000000] text-white items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mx-auto w-16 h-16 relative"
          >
            <BrainCircuit className="w-16 h-16 text-[#50E3C2]" />
            <div className="absolute inset-0 bg-[#50E3C2] rounded-full filter blur-xl opacity-50 animate-pulse" />
          </motion.div>
          <h2 className="mt-6 text-3xl font-bold">Join AI Pulse</h2>
          <p className="mt-2 text-sm text-gray-400">
            Stay ahead with personalized AI updates
          </p>
        </div>
        
        <form onSubmit={handleGoogleSignUp} className="mt-8">
          <Button
            type='submit'
            disabled={isLoading}
            className="w-full bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
              />
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Sign up with Google
              </>
            )}
          </Button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-400">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="font-medium text-[#50E3C2] hover:text-[#4FACFE] transition-colors">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="font-medium text-[#50E3C2] hover:text-[#4FACFE] transition-colors">
            Privacy Policy
          </Link>
        </p>
        
        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/auth/signin" className="font-medium text-[#50E3C2] hover:text-[#4FACFE] transition-colors">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}