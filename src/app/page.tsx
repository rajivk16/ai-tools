// app/page.tsx
import { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeatureShowcase from '@/components/FeatureShowcase'

export const metadata: Metadata = {
  title: 'Toolzzy - Elevate Your Workflow',
  description: 'Discover and integrate cutting-edge AI tools to supercharge your productivity.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureShowcase />
    </>
  )
}