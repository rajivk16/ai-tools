import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 my-20">
      <h1 className="text-4xl md:text-5xl font-heading mb-6 text-gradient-primary text-center">
        Contact Us
      </h1>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  )
}