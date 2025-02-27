import events from "../../data/events.json"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2Icon } from "lucide-react"

export default function InfoBoardPage() {
  const handleShare = (event: any) => {
    if (navigator.share) {
      const text = `${event.title}\nDate: ${event.date}\nTime: ${event.time}\nLocation: ${event.location}`
      navigator.share({
        title: event.title,
        text: text,
      })
    } else {
      alert("Sharing is not supported on this browser")
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Information Board</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{event.title}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => handleShare(event)}>
                <Share2Icon className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Date:{" "}
                {new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <p className="text-sm text-muted-foreground">Time: {event.time}</p>
              <p className="text-sm text-muted-foreground">Location: {event.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

