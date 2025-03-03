"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyleDark,
} from "@/components/ui/navigation-menu"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Startup Week', href: '/startup-week' },
  { name: 'Blog', href: '/blog' },
  { name: 'Events', href: '/events' },
]

export function NavigationMenuDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className={`shadow-sm z-50 fixed top-0 left-0 right-0 ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Wharton eClub</span>
            <Image
              className="h-8 w-auto"
              src="/eclub-logo.png"
              alt=""
              width={128}
              height={128}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name} className="text-white hover:text-gray-300">
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyleDark()}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white">Team</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/team/leadership" title="Leadership">
                      Meet our club leadership team
                    </ListItem>
                    <ListItem href="/team/members" title="Members">
                      View all club members
                    </ListItem>
                    <ListItem href="/team/join" title="Join Us">
                      Learn how to become a member
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900/95 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="p-1.5" onClick={() => setMobileMenuOpen(false)}>
            <Image
              className="h-16 w-auto invert"
              src="/eclub-logo.png"
              alt="Wharton eClub"
              width={128}
              height={128}
            />
          </Link>
          <button
            type="button"
            className="rounded-full p-2.5 text-white hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="px-4 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Team</p>
            <Link
              href="/team/leadership"
              className="block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
            </Link>
            <Link
              href="/team/members"
              className="block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Members
            </Link>
            <Link
              href="/team/join"
              className="block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
