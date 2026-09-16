import { motion } from 'motion/react';
import { cn } from '../utils/cn';

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  eyebrow?: string;
  className?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  heading,
  subheading,
  eyebrow,
  className,
  align = 'left',
  light = false
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-16 md:mb-24', align === 'center' ? 'text-center' : '', className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {eyebrow && (
          <span className={cn(
            "block text-[11px] tracking-[0.15em] font-medium uppercase mb-8",
            light ? "text-secondary/50" : "text-primary/50"
          )}>
            {eyebrow}
          </span>
        )}
        
        <h2 className={cn(
          "font-display text-4xl md:text-5xl lg:text-[4rem] leading-[1.05]",
          light ? "text-secondary" : "text-primary",
          subheading ? "mb-6" : ""
        )}>
          {heading.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>

        {subheading && (
          <p className={cn(
            "text-lg font-light leading-relaxed max-w-2xl mt-6",
            light ? "text-secondary/70" : "text-primary/70",
            align === 'center' ? 'mx-auto' : ''
          )}>
            {subheading}
          </p>
        )}
      </motion.div>
    </div>
  );
}
