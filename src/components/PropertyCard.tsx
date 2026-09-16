import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Property } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link to={`/properties/${property.slug}`} className="block relative overflow-hidden mb-6 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4]">
        <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur-md text-secondary text-[9px] tracking-[0.2em] font-medium px-4 py-1.5 uppercase">
          {property.status}
        </div>
        <motion.img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
      </Link>
      
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">{property.location}</p>
            <h3 className="font-display text-2xl group-hover:text-accent transition-colors">{property.name}</h3>
          </div>
          <div className="text-right">
            <p className="text-[10px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">{property.type}</p>
            <p className="font-display text-xl text-primary/90">${property.price.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-[13px] font-light text-primary/60 border-t border-primary/10 pt-5">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area.toLocaleString()} sq ft</span>
        </div>
        
        <p className="text-[14px] font-light leading-relaxed text-primary/60 line-clamp-2">
          {property.description}
        </p>

        <div className="pt-2">
          <span className="inline-flex items-center text-[11px] tracking-[0.15em] font-medium uppercase text-primary group-hover:text-accent transition-colors">
            View Property
            <ArrowUpRight size={14} className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
