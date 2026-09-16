import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
        >
          <div className="absolute top-6 left-6 text-secondary text-xs tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </div>
          
          <button
            className="absolute top-6 right-6 p-4 text-secondary/70 hover:text-secondary transition-colors z-10"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-secondary/70 hover:text-secondary transition-colors z-10"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-secondary/70 hover:text-secondary transition-colors z-10"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>

          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Gallery preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
