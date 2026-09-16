import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import { gallery } from '../data/gallery';
import { motion } from 'motion/react';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const images = gallery.map(g => g.image);

  return (
    <PageTransition title="Gallery" description="Architecture in frame.">
      <Lightbox 
        images={images} 
        initialIndex={photoIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
      />

      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
        <SectionHeading 
          eyebrow="CURATED VISUALS"
          heading="ARCHITECTURE IN FRAME"
          subheading="A visual exploration of the spaces, materials, and light that define our concept properties."
        />

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid cursor-none relative group overflow-hidden"
              onClick={() => openLightbox(idx)}
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-secondary text-xs tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
