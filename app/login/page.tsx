"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = (isAdmin: boolean) => {
    if (isAdmin) {
      router.push("/admin")
    } else {
      router.push("/")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen relative pointer-events-none">
      <Image
        src="https://plus.unsplash.com/premium_photo-1671358689953-ee06a6671fce?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Login Background"
        layout="fill"
        objectFit="cover"
        className="z-0 filter grayscale"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="p-6 max-w-sm w-full bg-card text-card-foreground shadow-md rounded-md z-20">
        <h1 className="text-3xl font-bold mb-6 text-center text-foreground">Login to Jabu</h1>
        <div className="space-y-4">
          <Button onClick={() => handleLogin(false)} className="w-full pointer-events-auto">
            Resident Login
          </Button>
          <Button onClick={() => handleLogin(true)} className="w-full pointer-events-auto" variant="outline">
            Admin Login
          </Button>
        </div>
      </div>
    </div>
  )
}

