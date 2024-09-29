// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, Inconsolata } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
})

export const metadata: Metadata = {
  title: {
    default: 'AI Tools Catalyst',
    template: '%s | AI Tools Catalyst',
  },
  description: 'Discover cutting-edge AI tools to supercharge your productivity.',
  keywords: ['AI', 'artificial intelligence', 'productivity', 'tools', 'workflow'],
  authors: [{ name: 'AI Tools Catalyst Team' }],
  creator: 'AI Tools Catalyst',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inconsolata.variable} font-body min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}