// components/tool-card.tsx
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from "@heroicons/react/24/solid"
import { Tool } from "@/types"

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={`/catalog/${tool.slug}`}>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-gradient-primary">{tool.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-48 mb-4">
              <img src={tool.imageUrl} alt={tool.name} className="absolute inset-0 w-full h-full object-cover rounded-md" />
            </div>
            <p className="text-muted-foreground mb-4">{tool.tagline}</p>
            <div className="flex justify-between items-center">
              <span className="text-gradient-secondary font-semibold">{tool.pricing.model}</span>
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{tool.rating.toFixed(1)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}