// components/hero.tsx

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { RainbowButton } from "@/components/ui/rainbow-button"
import SparklesText from "@/components/ui/sparkles-text"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import RetroGrid from "@/components/ui/retro-grid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <RetroGrid className="w-full h-full" />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl font-heading mb-6 text-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SparklesText text="Disrupt Your Workflow"/>
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover Cutting-edge tools for the modern creator, designed to push the boundaries of what's possible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <RainbowButton>
            <Link href="/catalog" className="inline-flex items-center">
              Explore Tools
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </RainbowButton>
        </motion.div>
      </div>
    </section>
  )
}

// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { RainbowButton } from "@/components/ui/rainbow-button"
// import SparklesText from "@/components/ui/sparkles-text"
// import Globe from "@/components/ui/globe"
// import { ChevronRightIcon } from "@heroicons/react/24/solid"
// import RetroGrid from "@/components/ui/retro-grid";
// import Meteors from "@/components/ui/meteors";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
//       <RetroGrid className="absolute inset-0 z-0" />
//       <div className="relative z-10 text-center max-w-4xl">
//         <motion.h1 
//           className="text-4xl md:text-6xl font-heading mb-6 text-gradient-primary"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <SparklesText text="Disrupt Your Workflow"/>
//           {/* Disrupt Your Workflow */}
//         </motion.h1>
//         <motion.p 
//           className="text-lg md:text-xl mb-8 text-muted-foreground"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Discover Cutting-edge tools for the modern creator, designed to push the boundaries of what's possible.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <RainbowButton>
//             <Link href="/catalog" className="inline-flex items-center">
//               Explore Tools
//               <ChevronRightIcon className="ml-2 h-4 w-4" />
//             </Link>
//           </RainbowButton>
//         </motion.div>
//       </div>
//       {/* <div className="relative w-full max-w-lg mt-12">
//         <Globe />
//         <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
//       </div> */}
//     </section>
//   )
// }