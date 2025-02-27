import Link from "next/link"
import { Button } from "@/components/ui/button"
import content from "../data/content.json"
import announcements from "../data/announcements.json"
import { TicketIcon, BanknoteIcon, CalendarIcon, ShieldIcon, UserIcon, InfoIcon, Settings } from "lucide-react"
import AnnouncementCarousel from "./components/announcement-carousel"

export default function Home() {
  const icons = {
    "Report an Issue": <TicketIcon className="h-6 w-6" />,
    Billing: <BanknoteIcon className="h-6 w-6" />,
    "Check Schedules": <CalendarIcon className="h-6 w-6" />,
    "Security Information": <ShieldIcon className="h-6 w-6" />,
    "Admin Portal": <UserIcon className="h-6 w-6" />,
    "Information Board": <InfoIcon className="h-6 w-6" />,
  }

  const quickActionLinks = {
    "Report an Issue": "/tickets",
    Billing: "/billing",
    "Check Schedules": "/schedules",
    "Security Information": "/security",
    "Admin Portal": "/admin",
    "Information Board": "/info",
  }

  return (
    <div>
      <section className="bg-black text-white py-20 px-4 rounded-lg mx-4 mb-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Jabu</h1>
          <p className="text-xl mb-8">{content.hero.description}</p>
          <Button
            asChild
            variant="outline"
            className="text-black bg-white border-white hover:bg-black hover:text-white"
          >
            <Link href="/tickets/new">{content.hero.ctaText}</Link>
          </Button>
        </div>
      </section>

      <section className="py-2">
        <div className="container mx-auto px-4">
          <AnnouncementCarousel announcements={announcements} />
        </div>
      </section>

      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">Quick Actions</h2>
            <Link href="/quick-actions-settings">
              <Button variant="ghost" size="sm" className="ml-2">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Quick Actions Settings</span>
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.quickActions.map((action, index) => (
              <Link
                key={index}
                href={quickActionLinks[action.title as keyof typeof quickActionLinks]}
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full h-40 text-lg bg-card text-card-foreground flex flex-col items-center justify-center"
                >
                  {icons[action.title as keyof typeof icons]}
                  <span className="mt-2">{action.title}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

