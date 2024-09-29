// components/contact-form.tsx
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
          <Input 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
          <Input 
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
          <Textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </div>
        <Button type="submit" className="w-full text-primary-foreground">
          Send Message
        </Button>
      </form>
    </motion.div>
  )
}