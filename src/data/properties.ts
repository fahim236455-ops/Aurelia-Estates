import { Property } from '../types';

export const properties: Property[] = [
  {
    id: 'prop-01',
    slug: 'the-arbor-residence',
    name: 'THE ARBOR RESIDENCE',
    location: 'Gulshan, Dhaka',
    type: 'Luxury Residence',
    price: 420000,
    status: 'CONCEPT LISTING',
    description: 'A contemporary residence designed around natural light, open spaces and quiet luxury.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=80'
    ],
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    amenities: ['Private Terrace', 'Natural Light', 'Open Living Space', 'Modern Kitchen', 'Parking', 'Landscaped Garden'],
    featured: true
  },
  {
    id: 'prop-02',
    slug: 'the-meridian',
    name: 'THE MERIDIAN',
    location: 'Banani, Dhaka',
    type: 'City Apartment',
    price: 285000,
    status: 'CONCEPT LISTING',
    description: 'A refined urban residence combining modern architecture with effortless city living.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1920&q=80'
    ],
    bedrooms: 3,
    bathrooms: 3,
    area: 2150,
    amenities: ['City Views', 'Smart Home System', 'Floor-to-ceiling Windows', 'Gym Access', 'Concierge'],
    featured: true
  },
  {
    id: 'prop-03',
    slug: 'the-courtyard-house',
    name: 'THE COURTYARD HOUSE',
    location: 'Uttara, Dhaka',
    type: 'Private Residence',
    price: 510000,
    status: 'CONCEPT LISTING',
    description: 'A spacious architectural home organized around a private landscaped courtyard.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1920&q=80'
    ],
    bedrooms: 5,
    bathrooms: 4,
    area: 4100,
    amenities: ['Central Courtyard', 'Pool', 'Guest Suite', 'Library', 'Double Garage', 'Outdoor Kitchen'],
    featured: true
  },
  {
    id: 'prop-04',
    slug: 'lumina-penthouse',
    name: 'LUMINA PENTHOUSE',
    location: 'Dhanmondi, Dhaka',
    type: 'Apartment',
    price: 650000,
    status: 'CONCEPT LISTING',
    description: 'A spectacular penthouse offering panoramic views and unparalleled luxury finishes.',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c1566905?auto=format&fit=crop&w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687644-aac4c1566905?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?auto=format&fit=crop&w=1920&q=80'
    ],
    bedrooms: 4,
    bathrooms: 5,
    area: 4800,
    amenities: ['Panoramic Views', 'Private Elevator', 'Rooftop Garden', 'Wine Cellar'],
    featured: false
  },
  {
    id: 'prop-05',
    slug: 'the-glass-pavilion',
    name: 'THE GLASS PAVILION',
    location: 'Gulshan, Dhaka',
    type: 'House',
    price: 380000,
    status: 'CONCEPT LISTING',
    description: 'A minimalist masterpiece blurring the lines between indoor and outdoor living.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80'
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 2800,
    amenities: ['Minimalist Design', 'Glass Walls', 'Zen Garden', 'Smart Climate Control'],
    featured: false
  },
  {
    id: 'prop-06',
    slug: 'heritage-loft',
    name: 'HERITAGE LOFT',
    location: 'Dhaka',
    type: 'Apartment',
    price: 210000,
    status: 'CONCEPT LISTING',
    description: 'An open-concept loft with exposed brickwork and industrial-chic styling.',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1920&q=80'
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    amenities: ['Exposed Brick', 'High Ceilings', 'Designer Kitchen', 'Balcony'],
    featured: false
  }
];
