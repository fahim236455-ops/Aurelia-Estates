export interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  type: string;
  price: number;
  status: string;
  description: string;
  image: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  amenities: string[];
  featured: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  category: string;
}
