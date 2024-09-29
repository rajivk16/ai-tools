// components/hero.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-heading mb-6 text-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Disrupt Your Workflow
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover Cutting-edge tools for the modern creator, designed to push the boundaries of what's possible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button asChild className="font-bold text-primary-foreground">
            <Link href="/catalog" className="inline-flex items-center">
              Explore Tools
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}