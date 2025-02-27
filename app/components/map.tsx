"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import type { LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"

// Dynamically import MapContainer with no SSR
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-muted animate-pulse" />,
})

// Dynamically import other Leaflet components
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })

const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

interface Bus {
  id: number
  lat: number
  lng: number
}

// Static bus data
const staticBuses: Bus[] = [
  { id: 1, lat: -6.2088, lng: 106.8456 },
  { id: 2, lat: -6.2, lng: 106.84 },
]

export default function Map() {
  const [isMounted, setIsMounted] = useState(false)
  const center: LatLngExpression = [-6.2088, 106.8456]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[500px] w-full bg-muted animate-pulse" />
  }

  return (
    <div className="h-[500px] w-full">
      <MapContainer className="h-full w-full" center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {staticBuses.map((bus) => (
          <Marker key={bus.id} position={[bus.lat, bus.lng] as LatLngExpression}>
            <Popup>Bus {bus.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

