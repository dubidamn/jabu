"use client"

import { useState, useEffect } from "react"
import type { Announcement } from "@/types/announcements"

interface AnnouncementCarouselProps {
  announcements: Announcement[]
}

export default function AnnouncementCarousel({ announcements }: AnnouncementCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [announcements.length])

  return (
    <div className="relative bg-card text-card-foreground p-4 rounded-lg">
      <div className="overflow-hidden h-32 w-3/4 mx-auto">
        {announcements.map((announcement, index) => (
          <div
            key={announcement.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center text-sm text-muted-foreground mb-1">Announcement</div>
            <p className="text-base text-center mb-1">{announcement.content}</p>
            <p className="text-xs text-muted-foreground text-center">
              Posted on{" "}
              {new Date(announcement.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-1">
        {announcements.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-1 rounded-full ${index === currentSlide ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

