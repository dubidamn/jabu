import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Droplet, Flame, Car } from "lucide-react"
import Link from "next/link"

const paymentLink = "https://sample-demo-dot-midtrans-support-tools.et.r.appspot.com/api/core-api"

export default function BillingPage() {
  const payments = [
    {
      title: "Iuran Pengelolaan Lingkungan (IPL)",
      amount: 160000,
      icon: Home,
      dueDate: "15 Jan 2024",
    },
    {
      title: "Air PDAM",
      amount: 100000,
      icon: Droplet,
      dueDate: "20 Jan 2024",
    },
    {
      title: "Gas",
      amount: 80000,
      icon: Flame,
      dueDate: "18 Jan 2024",
    },
    {
      title: "Parking",
      amount: 75000,
      icon: Car,
      dueDate: "15 Jan 2024",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Bill</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {payments.map((payment, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex-1">{payment.title}</CardTitle>
              <payment.icon className="h-5 w-5" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">Rp {payment.amount.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-1">Due by {payment.dueDate}</p>
              <Button className="mt-4" asChild>
                <Link href={paymentLink} target="_blank" rel="noopener noreferrer">
                  Pay Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

