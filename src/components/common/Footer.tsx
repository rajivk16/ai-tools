// app/components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RainbowButton } from '../ui/rainbow-button'


const footerSections = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Catalog', href: '/catalog' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Twitter', href: 'https://twitter.com/AIToolsCatalyst' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/aitoolscatalyst' },
      { name: 'GitHub', href: 'https://github.com/aitoolscatalyst' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Link href="/" className="text-2xl font-heading text-gradient-1">
              Toolzzy
            </Link>
            <p className="mt-2 text-gray-400">Elevating your workflow with AI-powered tools.</p>
          </motion.div>
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-heading mb-4 text-gradient-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-gradient-1-from transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <form className="max-w-md mx-auto mb-4">
            <h3 className="text-lg font-heading mb-2 text-gradient-2">Subscribe to Our Newsletter</h3>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow dark:bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gradient-1-from"
              />
              <RainbowButton 
                type="submit" 
                className="px-5 py-2 rounded-r-full text-background font-semibold transition-transform hover:scale-105"
              >
                Subscribe
              </RainbowButton>
            </div>
          </form>
          <p className="text-gray-400">&copy; 2024 Toolzzy. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}