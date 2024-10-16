// types/index.ts
export interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
}

// types/index.ts
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
    paid?: PricingPlan | PricingPlan[] | { price: PricingPlan[] };
  };
  rating?: number | null;
  reviewCount?: number | null;
  imageUrl: string[];
  demoUrl?: string | null;
  websiteUrl: string;
  supportedPlatforms: string[];
  languagesSupported: string[];
  testimonials?: {
    name: string;
    title: string;
    quote: string;
    avatarUrl: string;
  }[];
  additionalRoutes?: {
    route: string;
    description: string;
  }[];
}