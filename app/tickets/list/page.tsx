import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const sampleTickets = [
  { id: 1, title: "Broken elevator", status: "Open", date: "2 May 2024" },
  { id: 2, title: "Noisy neighbor", status: "Ongoing", date: "3 May 2024" },
  { id: 3, title: "Water leak in bathroom", status: "Closed", date: "4 May 2024" },
  { id: 4, title: "Parking issue", status: "Open", date: "5 May 2024" },
  { id: 5, title: "Garbage not collected", status: "Ongoing", date: "6 May 2024" },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Open":
      return "bg-yellow-500"
    case "Ongoing":
      return "bg-blue-500"
    case "Closed":
      return "bg-green-500"
    default:
      return "bg-gray-500"
  }
}

export default function TicketListPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-yellow-500"
      case "Ongoing":
        return "bg-blue-500"
      case "Closed":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Ticket List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleTickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.id}</TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
              </TableCell>
              <TableCell>{ticket.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-6">
        <Button asChild>
          <Link href="/tickets">Back to Tickets</Link>
        </Button>
      </div>
    </div>
  )
}

