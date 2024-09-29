// app/catalog/page.tsx
"use client"

import { motion } from "framer-motion"
import ToolCard from "@/components/ToolCard"
import { useAllTools } from "@/hooks/useToolData"

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

export default function CatalogPage() {
  const tools = useAllTools()

  return (
    <div className="container mx-auto px-4 py-16 my-20">
      <motion.h1 
        className="text-4xl md:text-5xl font-heading mb-12 text-center text-gradient-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI Tools Catalog
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tools.map((tool) => (
          <motion.div key={tool.id} variants={itemVariants}>
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}