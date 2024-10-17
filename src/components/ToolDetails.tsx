"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingDisplay } from "@/components/PricingDisplay";
import { StarIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Tool } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SparklesText from "@/components/ui/sparkles-text"


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ToolDetails({ tool }: { tool: Tool }) {
  const [aspectRatio, setAspectRatio] = useState("16/9"); // Default aspect ratio

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    const ratio = (img.naturalWidth / img.naturalHeight).toFixed(2);
    setAspectRatio(`${ratio}/1`);
  };

  return (
    <div className="container mx-auto px-4 py-16 my-20">
      <NeonGradientCard borderSize={3}>
        <div className="mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-heading mb-6 text-gradient-primary text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SparklesText text={tool.name} />
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {tool.tagline}
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RainbowButton>
              <a
                href={tool.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </RainbowButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
              <div className="relative w-full mb-6 px-12">
                <Carousel className="w-full mb-6">
                  <CarouselContent>
                    {tool.imageUrl.map((url, index) => (
                      <CarouselItem key={index}>
                        <div
                          className={`relative w-full rounded-lg overflow-hidden`}
                          style={{ aspectRatio: aspectRatio }}
                        >
                          <Image
                            src={url}
                            alt={`${tool.name} - Image ${index + 1}`}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-2xl"
                            priority={index === 0} // Only set priority for the first image
                            onLoad={handleImageLoad}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient-secondary">
                  About {tool.name}
                </h3>
                <p className="text-foreground mb-6">{tool.description}</p>

                <h3 className="text-2xl font-semibold mb-4 text-gradient-secondary">
                  Key Features
                </h3>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gradient-secondary">
                  Use Cases
                </h3>
                <ul className="space-y-2">
                  {tool.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tool.rating && (
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-primary">
                    Rating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <StarIcon className="w-8 h-8 text-yellow-400 mr-2" />
                    <span className="text-3xl font-bold">
                      {tool.rating.toFixed(1)}
                    </span>
                    {tool.reviewCount && (
                      <span className="text-muted-foreground ml-2">
                        ({tool.reviewCount} reviews)
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-yellow-400 h-2.5 rounded-full"
                      style={{ width: `${(tool.rating / 5) * 100}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            )}

            <PricingDisplay
              model={tool.pricing.model}
              free={tool.pricing.free}
              paid={tool.pricing.paid}
            />
          </motion.div>
        </div>

        {/* Bento Grid for User Testimonials and Additional Information */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* User Testimonials */}
          {tool.testimonials && tool.testimonials.length > 0 && (
            <div
              className={`${
                tool.additionalRoutes && tool.additionalRoutes.length > 0
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
              }`}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-primary">
                    User Testimonials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {tool.testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"
                      >
                        <p className="mb-2 italic">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <img
                            src={testimonial.avatarUrl}
                            className="w-10 h-10 rounded-full mr-4"
                            alt={testimonial.name}
                          />
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Additional Information */}
          {tool.additionalRoutes && tool.additionalRoutes.length > 0 && (
            <div
              className={`${
                tool.testimonials && tool.testimonials.length > 0
                  ? "lg:col-span-1"
                  : "lg:col-span-3"
              }`}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-primary">
                    Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tool.additionalRoutes.map((route, index) => (
                      <Link
                        key={index}
                        href={`${tool.websiteUrl}${route.route}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                          <h4 className="font-semibold text-lg mb-2">
                            {route.route}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {route.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </motion.div>
      </NeonGradientCard>
    </div>
  );
}
