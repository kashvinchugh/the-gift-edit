export interface PersonalizationField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'upload_note';
  placeholder?: string;
  options?: string[];
  required?: boolean;
  helpText?: string;
}

export interface PersonalizationConfig {
  enabled: boolean;
  type: 'custom_note' | 'spotify' | 'initials' | 'polaroid';
  fields: PersonalizationField[];
}

export interface ProductDetails {
  material?: string;
  size?: string;
  packaging?: string;
  shippingTime?: string;
  careInstructions?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  discountPercent?: number;
  category:
    | 'Personalized Gifts'
    | 'Personalised Gifts'
    | 'Customized Frames & Keepsakes'
    | 'Customised Frames & Keepsakes'
    | 'Jewellery'
    | 'Accessories'
    | 'Gift Hampers';
  occasions: string[];
  recipients: string[];
  budgetTier?: 'under-499' | 'under-699' | 'luxury';
  rating: number;
  reviewCount: number;
  images: string[];
  shortDescription: string;
  description: string;
  features: string[];
  inStock: boolean;
  isBestSeller?: boolean;
  isLuxe?: boolean;
  personalization?: PersonalizationConfig;
  details?: ProductDetails;
  frequentlyBoughtWith?: string[];
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  itemCount: number;
  filterCategory?: Product['category'];
  filterBudget?: number;
  filterOccasion?: string;
}

export interface ContactEnquirySubmission {
  name: string;
  contactMethod: string;
  interestType: string;
  productOrCollection: string;
  occasion: string;
  message: string;
  createdAt: string;
}
