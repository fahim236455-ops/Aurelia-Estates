import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: 'PROPERTY DISCOVERY',
      desc: 'Explore curated residences designed around different lifestyles.'
    },
    {
      title: 'PRIVATE VIEWINGS',
      desc: 'Arrange a personalized walkthrough of selected concept properties.'
    },
    {
      title: 'PROPERTY CONSULTATION',
      desc: 'Explore spaces and possibilities with a focused, personal approach.'
    },
    {
      title: 'DESIGN INSIGHT',
      desc: 'Discover architectural ideas and concepts shaping modern residences.'
    }
  ];

  return (
    <PageTransition title="Services" description="From discovery to decision.">
      <div className="bg-primary text-secondary min-h-screen">
        {/* Hero */}
        <section className="pt-48 pb-24 px-6 lg:px-12 max-w-7xl mx-auto text-center border-b border-secondary/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-secondary/60 text-xs tracking-widest uppercase mb-6">OUR SERVICES</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-secondary">
              FROM DISCOVERY <br />
              TO DECISION.
            </h1>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group"
              >
                <div className="text-xs tracking-widest text-secondary/40 mb-8 border-b border-secondary/20 pb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-6 text-secondary group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary/70 text-lg max-w-sm mb-12">
                  {service.desc}
                </p>
                <Button to="/contact" variant="outline-light">INQUIRE</Button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 p-8 border border-accent/20 bg-accent/5 text-center max-w-3xl mx-auto">
            <p className="text-secondary/60 text-sm tracking-widest uppercase mb-4">Important Notice</p>
            <p className="text-secondary/80 text-sm">
              Aurelia Estates is a fictional concept project. Do not provide real financial or investment advice. These services are illustrative only.
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
