// components/feature-showcase.tsx
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SparklesIcon, LinkIcon, RocketLaunchIcon } from "@heroicons/react/24/outline"

const features = [
  {
    title: "AI-Powered Discovery",
    description: "Our intelligent algorithm curates a personalized selection of AI tools tailored to your unique needs.",
    icon: SparklesIcon
  },
  {
    title: "Seamless Integration",
    description: "Effortlessly incorporate AI tools into your existing workflow with our step-by-step guides.",
    icon: LinkIcon
  },
  {
    title: "Continuous Innovation",
    description: "Stay at the forefront of AI technology with our regularly updated catalog of cutting-edge tools.",
    icon: RocketLaunchIcon
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function FeatureShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-heading mb-12 text-center text-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose AI Tools Catalyst
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-gradient-secondary" />
                  <CardTitle className="text-xl font-heading text-gradient-secondary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}