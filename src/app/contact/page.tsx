import { ContactForm } from '@/components/ContactForm'
import { Metadata } from 'next'
import SparklesText from "@/components/ui/sparkles-text"

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Toolzzy team for inquiries or support.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 my-20">
      {/* <h1 className="text-4xl md:text-5xl font-heading mb-6 text-gradient-primary text-center">
        Contact Us
      </h1> */}
      <SparklesText className="text-center text-4xl md:text-5xl font-heading mb-6 text-gradient-primary" text="Contact Toolzzy" />

      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  )
}