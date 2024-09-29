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
    paid?: {
      plan: string;
      price: string;
      features: string[];
    };
  };
  rating: number;
  reviewCount: number;
  imageUrl: string;
  demoUrl: string;
  websiteUrl: string;
}