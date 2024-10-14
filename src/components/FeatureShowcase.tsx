// components/feature-showcase.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SparklesIcon,
  LinkIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam"


const features = [
  {
    title: "Explore Top-Rated Tools",
    description:
      "Discover a wide range of top-rated tools, meticulously curated to provide the best solutions for content creators and developers. Access detailed features, user reviews, and expert ratings to make informed choices.",
    icon: SparklesIcon,
  },
  {
    title: "Effortless Tool Discovery",
    description:
      "Quickly find the perfect tools to enhance your content workflows. With our intuitive platform, you can explore, compare, and choose from a variety of next-gen tools that are tailored to your specific needs.",
    icon: LinkIcon,
  },
  {
    title: "Stay Ahead with Cutting-Edge Solutions",
    description:
      "Leverage our regularly updated catalog of innovative tools to stay at the forefront of technology. Compare features, pricing, and ratings to ensure you’re using the most advanced tools for your projects.",
    icon: RocketLaunchIcon,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeatureShowcase() {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <motion.div
          className="flex justify-center items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl font-heading text-gradient-primary">
            <strong>Why Choose</strong>
          </h2>
          <Image
            src="/images/logo.png"
            height={150}
            width={150}
            alt="logo"
            className="ml-4"
          />
        </motion.div>
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
                  <CardTitle className="text-xl font-heading text-gradient-secondary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <BorderBeam size={250} duration={12} delay={6} colorFrom="#22d3ee" colorTo="#3b82f6" borderWidth={1}/>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
