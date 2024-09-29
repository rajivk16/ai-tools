// app/about/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About AI Tools Catalyst',
  description: 'Learn about our mission to revolutionize workflows with AI-powered tools.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 my-20">
      <h1 className="text-4xl md:text-5xl font-heading mb-6 text-gradient-primary text-center">About AI Tools Catalyst</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8">
          AI Tools Catalyst is dedicated to helping professionals discover and integrate cutting-edge AI tools into their workflows. Our mission is to empower individuals and businesses to harness the power of artificial intelligence, boosting productivity and fostering innovation.
        </p>
        <h2 className="text-2xl font-heading mb-4 text-gradient-secondary">Our Vision</h2>
        <p className="text-muted-foreground mb-8">
          We envision a future where AI tools are seamlessly integrated into every aspect of work, enhancing human capabilities and driving unprecedented levels of creativity and efficiency. AI Tools Catalyst aims to be the bridge that connects innovators with the tools they need to shape this future.
        </p>
        <h2 className="text-2xl font-heading mb-4 text-gradient-secondary">What We Offer</h2>
        <ul className="list-disc list-inside text-muted-foreground mb-8">
          <li>Curated selection of top-tier AI tools</li>
          <li>In-depth reviews and comparisons</li>
          <li>Integration guides and best practices</li>
          <li>Community forums for knowledge sharing</li>
          <li>Regular updates on the latest AI advancements</li>
        </ul>
        <p className="text-muted-foreground">
          Join us on this exciting journey as we explore the boundless possibilities of AI and transform the way we work, create, and innovate.
        </p>
      </div>
    </div>
  )
}