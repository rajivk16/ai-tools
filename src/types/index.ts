// types/index.ts
export interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  features: string[];
  useCases: string[];
  pricing: {
    model: string;
    free?: {
      plan: string;
      features: string[];
    };
    paid?: PricingPlan | PricingPlan[];
  };
  rating?: number;
  reviewCount?: number;
  imageUrl: string;
  demoUrl?: string;
  websiteUrl: string;
  supportedPlatforms: string[];
  languagesSupported: string[];
  testimonials?: Array<{
    name: string;
    title: string;
    quote: string;
    avatarUrl: string;
  }>;
  additionalRoutes?: Array<{
    route: string;
    description: string;
  }>;
}