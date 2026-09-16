import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import NotFound from './NotFound';
import { properties } from '../data/properties';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = properties.find(p => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!property) return <NotFound />;

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition title={property.name} description={property.description}>
      <Lightbox 
        images={property.images} 
        initialIndex={photoIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />

      <div className="w-full bg-primary text-secondary min-h-screen">
        {/* Breadcrumb & Hero */}
        <div className="relative h-[80vh] w-full pt-6 px-6 lg:px-12 flex flex-col justify-between -mt-[104px]">
          <div className="absolute inset-0 z-0">
            <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 pt-[128px]">
            <div className="flex items-center space-x-2 text-xs tracking-widest uppercase text-secondary/70">
              <Link to="/" className="hover:text-secondary">Home</Link>
              <ChevronRight size={12} />
              <Link to="/properties" className="hover:text-secondary">Properties</Link>
              <ChevronRight size={12} />
              <span className="text-secondary">{property.name}</span>
            </div>
          </div>

          <div className="relative z-10 pb-24 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-secondary text-primary text-[10px] tracking-widest px-4 py-2 uppercase mb-6">
                {property.status}
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
                {property.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-secondary/80 text-sm tracking-widest uppercase">
                <span>{property.location}</span>
                <span className="hidden sm:inline w-1 h-1 bg-secondary/50 rounded-full" />
                <span>{property.type}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-[#1a1a1a] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-wrap justify-between items-center gap-8">
            <div className="text-3xl font-display text-accent">
              ${property.price.toLocaleString()}
            </div>
            <div className="flex space-x-8 lg:space-x-16 text-sm tracking-widest uppercase text-secondary/70">
              <div className="flex flex-col">
                <span className="text-secondary text-lg mb-1">{property.bedrooms}</span>
                <span>Bedrooms</span>
              </div>
              <div className="flex flex-col">
                <span className="text-secondary text-lg mb-1">{property.bathrooms}</span>
                <span>Bathrooms</span>
              </div>
              <div className="flex flex-col">
                <span className="text-secondary text-lg mb-1">{property.area.toLocaleString()}</span>
                <span>SQ FT</span>
              </div>
            </div>
            <div>
              <Button to="/contact" variant="outline-light">SCHEDULE A VISIT</Button>
            </div>
          </div>
        </div>

        <div className="bg-secondary text-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Overview */}
            <div className="lg:col-span-7 space-y-16">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-primary/60 mb-6">Overview</h3>
                <p className="font-display text-3xl md:text-4xl leading-relaxed text-primary">
                  {property.description}
                </p>
                <p className="mt-8 text-primary/70 leading-relaxed text-lg">
                  Every detail has been carefully considered to create a space that feels both expansive and intimate. The architecture embraces natural light and premium materials to deliver an exceptional living experience. This is a fictional concept listing designed to demonstrate premium presentation.
                </p>
              </div>

              {/* Gallery Grid */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-primary/60 mb-6">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.images.map((img, i) => (
                    <div 
                      key={i} 
                      className={`overflow-hidden cursor-none aspect-[4/3] ${i === 0 ? 'sm:col-span-2 aspect-video' : ''}`}
                      onClick={() => openLightbox(i)}
                    >
                      <img 
                        src={img} 
                        alt={`${property.name} - ${i + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-16">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-primary/60 mb-6">Features & Amenities</h3>
                <ul className="space-y-4">
                  {property.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-4 flex-shrink-0" />
                      <span className="text-primary/80">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-primary/5">
                <h3 className="font-display text-2xl mb-4">Location Concept</h3>
                <p className="text-primary/70 text-sm mb-6">
                  {property.location} offers a blend of urban convenience and quiet residential streets, serving as the perfect backdrop for this fictional property.
                </p>
                <div className="aspect-square bg-[#e5e3de] flex items-center justify-center p-8 text-center text-primary/40 text-xs tracking-widest uppercase border border-primary/10">
                  Concept Map Placeholder
                </div>
              </div>

              <div>
                <h3 className="font-display text-3xl mb-6">Interested in this property?</h3>
                <p className="text-primary/70 mb-8">Arrange a private viewing or request more details about {property.name}.</p>
                <Button to="/contact" className="w-full">REQUEST A PRIVATE VIEWING</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
