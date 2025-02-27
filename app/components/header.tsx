"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  MoonIcon,
  SunIcon,
  PhoneIcon,
  TicketIcon,
  CreditCardIcon,
  CalendarIcon,
  ShieldIcon,
  UserIcon,
  InfoIcon,
  UsersIcon,
  MenuIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-none">
          <Link href="/" className="text-2xl font-bold">
            Jabu
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="hover:bg-primary-foreground hover:text-primary"
                >
                  {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle UI</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                    <PhoneIcon className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Call Admin</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/directory">
                    <UsersIcon className="h-5 w-5" />
                    <span className="sr-only">Directory</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Directory</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground hover:text-primary">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/tickets" className="flex items-center">
                  <TicketIcon className="h-4 w-4 mr-2" />
                  Tickets
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/billing" className="flex items-center">
                  <CreditCardIcon className="h-4 w-4 mr-2" />
                  Billing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/schedules" className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Schedules
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/security" className="flex items-center">
                  <ShieldIcon className="h-4 w-4 mr-2" />
                  Security
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/admin" className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-2" />
                  Admin
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/info" className="flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2" />
                  Info Board
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/directory" className="flex items-center">
                  <UsersIcon className="h-4 w-4 mr-2" />
                  Directory
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login" className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-2" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}

