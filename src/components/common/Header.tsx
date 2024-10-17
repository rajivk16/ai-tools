// components/header.tsx

"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div 
        className="bg-background/80 backdrop-blur-md rounded-full shadow-lg border border-primary/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <nav className="px-12 py-3 flex items-center space-x-10">
          <Link href="/" className="text-lg font-heading font-bold text-primary mr-4">
            <Image src="/images/logo.png" height={50} width={50} alt="logo"/>
          </Link>
          <ul className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-full text-sm font-medium transition-colors relative",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-auto"
            >
              {theme === "dark" ? (
                <SunIcon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </nav>
      </motion.div>
    </header>
  )
}
