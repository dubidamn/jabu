"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

export default function SecurityPage() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const isOnDuty = (shift: string) => {
    const hour = currentTime.getHours()
    if (shift === "Morning (06:00 - 14:00)" && hour >= 6 && hour < 14) return true
    if (shift === "Afternoon (14:00 - 22:00)" && hour >= 14 && hour < 22) return true
    if (shift === "Night (22:00 - 06:00)" && (hour >= 22 || hour < 6)) return true
    return false
  }

  const securityGuards = [
    {
      name: "Budi Santoso",
      shift: "Morning (06:00 - 14:00)",
      phone: "081234567890",
      image: "https://avatar.iran.liara.run/public/boy?username=budi",
    },
    {
      name: "Agus Setiawan",
      shift: "Afternoon (14:00 - 22:00)",
      phone: "081234567891",
      image: "https://avatar.iran.liara.run/public/boy?username=agus",
    },
    {
      name: "Dedi Kurniawan",
      shift: "Night (22:00 - 06:00)",
      phone: "081234567892",
      image: "https://avatar.iran.liara.run/public/boy?username=dedi",
    },
  ]

  const securityCameras = [
    { id: 1, name: "Front Lobby", image: "https://i.imgur.com/mufITGR.jpeg" },
    { id: 2, name: "Parking Area", image: "https://i.imgur.com/MPgYeuD.jpeg" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Security Information</h1>
      <p>In case of emergency, please contact the security guard on duty:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {securityGuards.map((guard, index) => (
          <div key={index} className="bg-card text-card-foreground shadow-md rounded-lg p-4 flex flex-col items-center">
            <Image src={guard.image} alt={guard.name} width={100} height={100} className="rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">{guard.name}</h2>
            <p className="text-sm mb-1">Shift: {guard.shift}</p>
            <p className="text-sm mb-2">Phone: {guard.phone}</p>
            {isOnDuty(guard.shift) && <Badge className="mb-2 bg-green-500">On Duty</Badge>}
            <Button size="sm" className="rounded-full" asChild>
              <a href={`tel:${guard.phone}`} target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </a>
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Security Cameras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityCameras.map((camera) => (
            <div key={camera.id} className="relative">
              <Image
                src={camera.image}
                alt={`Camera ${camera.id}`}
                width={800}
                height={450}
                className="w-full h-auto aspect-video object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-sm font-medium">{camera.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

