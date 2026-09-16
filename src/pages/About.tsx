import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';

export default function About() {
  return (
    <PageTransition title="About" description="Aurelia Estates is a fictional real estate concept created to explore how premium property brands can combine architecture, storytelling and digital experiences.">
      {/* Hero */}
      <section className="relative h-[70vh] w-full flex items-center justify-center -mt-[104px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?auto=format&fit=crop&w=1920&q=80" 
            alt="About Aurelia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-[104px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-secondary/80 text-xs tracking-widest uppercase mb-6">ABOUT AURELIA</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary leading-[1.1]">
              WE CREATE <br />
              SPACE FOR <br />
              WHAT MATTERS.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-32">
          <div className="md:col-span-5">
            <SectionHeading 
              eyebrow="OUR PHILOSOPHY"
              heading="Architecture as an experience."
              className="mb-0"
            />
          </div>
          <div className="md:col-span-7 space-y-8 text-primary/80 text-lg leading-relaxed">
            <p className="font-display text-2xl text-primary mb-4">
              Aurelia Estates is a fictional real estate concept created to explore how premium property brands can combine architecture, storytelling and digital experiences.
            </p>
            <p>
              We approach every property not just as a physical structure, but as a framework for living. The spaces we represent are chosen for their ability to elevate everyday moments through thoughtful layout, natural light, and material honesty.
            </p>
            <p>
              In this concept project, we demonstrate how a digital presence can reflect the tactile, spatial qualities of the built environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80" 
              alt="Our Approach" 
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading 
              eyebrow="OUR APPROACH"
              heading="Curated, not accumulated."
            />
            <p className="text-primary/80 text-lg leading-relaxed mb-8">
              We believe in presenting a small, carefully selected portfolio of concept residences rather than an overwhelming catalog. Each listing is treated as an editorial feature, giving it the space and attention it deserves to communicate its unique character.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <SectionHeading 
              eyebrow="DESIGN PRINCIPLES"
              heading="Focusing on the essential."
            />
            <ul className="space-y-6">
              {[
                { title: 'Restraint', text: 'Avoiding excess in favor of what is truly necessary.' },
                { title: 'Context', text: 'Respecting the relationship between a building and its surroundings.' },
                { title: 'Light', text: 'Treating natural light as the primary material in any space.' },
                { title: 'Longevity', text: 'Favoring designs and materials that age with grace.' }
              ].map((item, idx) => (
                <li key={idx} className="border-b border-primary/10 pb-6 last:border-0">
                  <h4 className="font-display text-2xl mb-2">{item.title}</h4>
                  <p className="text-primary/70">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80" 
              alt="Design Principles" 
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
