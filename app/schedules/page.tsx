import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Share2Icon, Search } from "lucide-react"
import schedules from "../../data/schedules.json"
import Link from "next/link"

const shuttleBusRoutes = [
  { name: "Route A", stops: ["Main Gate", "Block A", "Block B", "Shopping Center"] },
  { name: "Route B", stops: ["Main Gate", "Block C", "Block D", "Park"] },
]

export default function SchedulesPage() {
  const handleShare = (title: string, data: any) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: JSON.stringify(data),
        url: window.location.href,
      })
    } else {
      alert("Sharing is not supported on this browser")
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Schedules</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Garbage Collection</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare("Garbage Collection", schedules.garbageCollection)}
            >
              <Share2Icon className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedules.garbageCollection.map((schedule, index) => (
                <TableRow key={index}>
                  <TableCell>{schedule.day}</TableCell>
                  <TableCell>{schedule.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Shuttle Bus</h2>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors"
              >
                <Link href="/bus-tracking">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">View Live Bus Tracking</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleShare("Shuttle Bus", schedules.shuttleBus)}>
                <Share2Icon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Departures</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedules.shuttleBus.map((schedule, index) => (
                <TableRow key={index}>
                  <TableCell>{schedule.day}</TableCell>
                  <TableCell>{schedule.departures.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shuttleBusRoutes.map((route, index) => (
                <div key={index} className="bg-card text-card-foreground p-4 rounded-lg">
                  <h4 className="font-medium mb-2">{route.name}</h4>
                  <div className="space-y-2">
                    {route.stops.map((stop, stopIndex) => (
                      <div key={stopIndex} className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                            {stopIndex + 1}
                          </div>
                          {stopIndex < route.stops.length - 1 && <div className="w-px h-full bg-border my-1"></div>}
                        </div>
                        <span className="mt-1">{stop}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

