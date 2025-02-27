import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TicketsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Ticketing System</h1>
      <p>Report issues or concerns in your neighborhood.</p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
        <Button asChild>
          <Link href="/tickets/new">Create New Ticket</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/tickets/list">View My Tickets</Link>
        </Button>
      </div>
    </div>
  )
}

