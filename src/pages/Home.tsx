import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { articles } from '../data/articles';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);
  const recentArticles = articles.slice(0, 3);
  const navigate = useNavigate();

  // Search state
  const [location, setLocation] = useState('All Locations');
  const [type, setType] = useState('All Types');
  const [bedrooms, setBedrooms] = useState('Any');
  const [price, setPrice] = useState('Any');

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/properties?location=${location}&type=${type}&bedrooms=${bedrooms}&price=${price}`);
  };

  return (
    <PageTransition title="Home" description="Discover thoughtfully designed residences where architecture, comfort and everyday living come together.">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden -mt-[104px]">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" 
            alt="Cinematic architecture" 
            className="w-full h-[120vh] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-secondary/70 text-[11px] tracking-[0.25em] font-medium uppercase mb-8">Premium Real Estate</p>
          </motion.div>
          
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-[7rem] text-secondary leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            SPACES <br />
            DESIGNED <br />
            FOR LIFE.
          </motion.h1>
          
          <motion.p 
            className="text-secondary/70 max-w-md text-lg font-light leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Discover thoughtfully designed residences where architecture, comfort and everyday living come together.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button to="/properties" variant="secondary">EXPLORE PROPERTIES</Button>
            <Button to="/contact" variant="outline-light">SCHEDULE A VISIT</Button>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 left-6 lg:left-12 z-20"
        >
          <p className="text-secondary/60 text-xs tracking-widest uppercase">DHAKA · BANGLADESH</p>
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 right-6 lg:right-12 z-20 flex flex-col items-end"
        >
          <p className="text-secondary/60 text-xs tracking-widest uppercase mb-2">SCROLL TO EXPLORE ↓</p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              eyebrow="THE AURELIA PHILOSOPHY"
              heading={"DESIGNED AROUND\nTHE WAY YOU LIVE."}
            />
            <div className="space-y-8 text-primary/80 max-w-lg text-lg">
              <p>Aurelia Estates is a fictional real estate concept focused on thoughtfully designed homes, considered architecture and timeless living.</p>
              <p>We believe a home should be more than an address. It should be a space that supports the way you live.</p>
            </div>
            <div className="mt-12">
              <Button to="/about" variant="outline">DISCOVER OUR STORY</Button>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" 
                alt="Minimalist interior" 
                className="w-full h-[120%] object-cover aspect-[3/4]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-32 bg-primary text-secondary px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            eyebrow="CONCEPT LISTINGS"
            heading="FEATURED PROPERTIES"
            subheading="Explore a selection of our concept residences."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mt-16">
            {featuredProperties.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} index={idx} />
            ))}
          </div>

          <div className="mt-24 text-center">
            <Button to="/properties" variant="outline-light">VIEW ALL PROPERTIES</Button>
          </div>
        </div>
      </section>

      {/* Property Search */}
      <section className="py-32 px-6 lg:px-12 border-b border-primary/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            heading="FIND YOUR SPACE"
            align="center"
          />
          
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase">Location</label>
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none"
              >
                <option>All Locations</option>
                <option>Dhaka</option>
                <option>Gulshan</option>
                <option>Banani</option>
                <option>Uttara</option>
                <option>Dhanmondi</option>
              </select>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase">Property Type</label>
              <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none"
              >
                <option>All Types</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Residence</option>
              </select>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase">Bedrooms</label>
              <select 
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none"
              >
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase">Price Range</label>
              <select 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none"
              >
                <option>Any</option>
                <option>Under $300k</option>
                <option>$300k–$400k</option>
                <option>$400k–$500k</option>
                <option>$500k+</option>
              </select>
            </div>

            <div className="md:col-span-2 lg:col-span-4 flex items-center justify-center pt-8 gap-4 flex-col sm:flex-row">
              <Button type="submit">SEARCH PROPERTIES</Button>
            </div>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?auto=format&fit=crop&w=1200&q=80" 
                alt="About Aurelia" 
                className="w-full aspect-square object-cover"
              />
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading 
              eyebrow="ABOUT AURELIA"
              heading="WE CREATE SPACE FOR WHAT MATTERS."
            />
            <p className="text-primary/80 max-w-lg text-lg mb-12">
              Aurelia Estates is a fictional real estate concept created to explore how premium property brands can combine architecture, storytelling and digital experiences.
            </p>
            <Button to="/about" variant="outline">DISCOVER OUR STORY</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-primary text-secondary px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            eyebrow="OUR SERVICES"
            heading="FROM DISCOVERY TO DECISION."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            {[
              { title: 'PROPERTY DISCOVERY', desc: 'Explore curated residences designed around different lifestyles.' },
              { title: 'PRIVATE VIEWINGS', desc: 'Arrange a personalized walkthrough of selected concept properties.' },
              { title: 'PROPERTY CONSULTATION', desc: 'Explore spaces and possibilities with a focused, personal approach.' },
              { title: 'DESIGN INSIGHT', desc: 'Discover architectural ideas and concepts shaping modern residences.' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-t border-secondary/20 pt-6"
              >
                <div className="text-xs tracking-widest text-secondary/40 mb-4">0{idx + 1}</div>
                <h3 className="font-display text-xl mb-4 text-secondary">{service.title}</h3>
                <p className="text-secondary/70 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button to="/services" variant="outline-light">VIEW ALL SERVICES</Button>
          </div>
        </div>
      </section>

      {/* Services/Why Aurelia */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-b border-primary/10">
        <SectionHeading 
          eyebrow="THE AURELIA DIFFERENCE"
          heading="WHY AURELIA"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {[
            { title: 'THOUGHTFUL DESIGN', text: 'Every residence begins with the relationship between architecture and everyday life.' },
            { title: 'CURATED SPACES', text: 'Properties are presented through a refined and consistent visual experience.' },
            { title: 'PERSONAL APPROACH', text: 'Every inquiry is treated as an opportunity to understand what matters.' },
            { title: 'TIMELESS DETAILS', text: 'Materials, proportions and layouts are considered for enduring appeal.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-l border-primary/20 pl-6"
            >
              <div className="text-xs tracking-widest text-primary/40 mb-4">0{idx + 1}</div>
              <h3 className="font-display text-xl mb-4">{item.title}</h3>
              <p className="text-primary/70 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-8">
          <SectionHeading 
            heading="FROM THE JOURNAL"
            className="mb-0 md:mb-0"
          />
          <Link to="/journal" className="inline-flex items-center text-xs tracking-widest uppercase text-primary border-b border-primary pb-1 hover:border-accent hover:text-accent transition-colors">
            READ ALL ARTICLES
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to={`/journal/${article.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                  <motion.img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs tracking-widest text-primary/60 uppercase">{article.category}</span>
                </div>
                <h3 className="font-display text-2xl group-hover:text-accent transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-primary/10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-8">
          <SectionHeading 
            heading="ARCHITECTURE IN FRAME"
            className="mb-0 md:mb-0"
          />
          <Link to="/gallery" className="inline-flex items-center text-xs tracking-widest uppercase text-primary border-b border-primary pb-1 hover:border-accent hover:text-accent transition-colors">
            VIEW FULL GALLERY
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80',
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="aspect-square overflow-hidden"
            >
              <img src={img} alt="Gallery preview" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-48 px-6 lg:px-12 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="Cinematic background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px] z-10" />
        
        <div className="relative z-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl text-secondary leading-[1.1] mb-8"
          >
            FIND A PLACE <br />
            WORTH CALLING HOME.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary/80 text-lg md:text-xl mb-12"
          >
            Explore thoughtfully designed spaces created around modern living.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button to="/properties" variant="secondary">EXPLORE PROPERTIES</Button>
            <Button to="/contact" variant="outline-light">CONTACT US</Button>
          </motion.div>
        </div>
      </section>

    </PageTransition>
  );
}
