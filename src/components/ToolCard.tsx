// components/tool-card.tsx
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import { Tool } from "@/types"

export default function ToolCard({ tool }: { tool: Tool }) {
    return (
      <Link href={`/catalog/${tool.slug}`} className="block h-full">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-full"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden h-full flex flex-col relative">
            <CardHeader className="border-b border-primary/10 p-4">
              <div className="flex items-center">
                <CardTitle className="text-gradient-primary text-xl font-bold mr-2">{tool.name}</CardTitle>
                <Badge variant="secondary" className="text-xs px-2 py-1">{tool.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow flex flex-col">
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <img src={tool.imageUrl} alt={tool.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground mb-4 flex-grow">{tool.tagline}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-gradient-secondary font-semibold">{tool.pricing.model}</span>
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>{tool.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground text-sm ml-1">({tool.reviewCount})</span>
                </div>
              </div>
            </CardContent>
            <a 
              href={tool.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute top-3 right-3 text-primary hover:text-primary-focus"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          </Card>
        </motion.div>
      </Link>
    )
  }

  // export default function ToolCard({ tool }: { tool: Tool }) {
//   return (
//     <Link href={`/catalog/${tool.slug}`}>
//       <motion.div 
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Card className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
//           <CardHeader>
//             <CardTitle className="text-gradient-primary">{tool.name}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="relative h-48 mb-4">
//               <img src={tool.imageUrl} alt={tool.name} className="absolute inset-0 w-full h-full object-cover rounded-md" />
//             </div>
//             <p className="text-muted-foreground mb-4">{tool.tagline}</p>
//             <div className="flex justify-between items-center">
//               <span className="text-gradient-secondary font-semibold">{tool.pricing.model}</span>
//               <div className="flex items-center">
//                 <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
//                 <span>{tool.rating.toFixed(1)}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </Link>
//   )
// }