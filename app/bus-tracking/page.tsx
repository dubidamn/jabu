"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import the Map component to avoid SSR issues
const Map = dynamic(() => import("../components/map"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-muted animate-pulse" />,
})

export default function BusTrackingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Live Bus Tracking</h1>
      <Map />
      <Button asChild>
        <Link href="/schedules">Back to Schedules</Link>
      </Button>
    </div>
  )
}

