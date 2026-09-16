import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { motion } from 'motion/react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // Basic viewing form state
  const [viewingFormState, setViewingFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleViewingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setViewingFormState('submitting');
    setTimeout(() => {
      setViewingFormState('success');
    }, 1500);
  };

  return (
    <PageTransition title="Contact" description="Let's talk. Your next space starts here.">
      
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center -mt-[104px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Aurelia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-[104px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-secondary/80 text-xs tracking-widest uppercase mb-6">LET'S TALK</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary leading-[1.1]">
              YOUR NEXT SPACE <br />
              STARTS HERE.
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Contact Info & General Form */}
        <div>
          <SectionHeading 
            heading="GENERAL INQUIRIES"
            className="mb-12"
          />
          
          <div className="mb-16 space-y-6 text-primary/80">
            <p>Dhaka, Bangladesh</p>
            <p><a href="mailto:hello@example.com" className="hover:text-accent transition-colors">hello@example.com</a></p>
            <p>+880 XXX-XXXXXXX</p>
            <p className="text-xs text-primary/40 uppercase tracking-widest mt-4">Demo Placeholders</p>
          </div>

          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="p-8 border border-accent/30 bg-accent/5"
            >
              <h3 className="font-display text-2xl mb-4">Thank you.</h3>
              <p className="text-primary/70 mb-6">Your message has been received.</p>
              <p className="text-xs tracking-widest text-primary/40 uppercase">Aurelia Estates — Concept Project</p>
            </motion.div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none" />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Email</label>
                <input required type="email" className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none" />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none resize-none"></textarea>
              </div>
              <Button type="submit" disabled={formState === 'submitting'}>
                {formState === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </form>
          )}
        </div>

        {/* Private Viewing Form */}
        <div className="bg-primary/5 p-8 md:p-12">
          <SectionHeading 
            heading="SCHEDULE A VISIT"
            className="mb-12"
          />
          
          {viewingFormState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
            >
              <h3 className="font-display text-2xl mb-4">Thank you.</h3>
              <p className="text-primary/70 mb-6">Your private viewing request has been received. Our team will contact you shortly to confirm the appointment.</p>
              <Button onClick={() => setViewingFormState('idle')} variant="outline">REQUEST ANOTHER</Button>
            </motion.div>
          ) : (
            <form onSubmit={handleViewingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none" />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Phone</label>
                  <input required type="tel" className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Email</label>
                <input required type="email" className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none" />
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Property</label>
                <select required defaultValue="" className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none">
                  <option value="" disabled>Select a property</option>
                  <option>The Arbor Residence</option>
                  <option>The Meridian</option>
                  <option>The Courtyard House</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Preferred Date</label>
                  <input 
                    required 
                    type="date" 
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none" 
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Preferred Time</label>
                  <select required defaultValue="" className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none">
                    <option value="" disabled>Select time</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.15em] font-medium text-primary/50 uppercase mb-2">Additional Message (Optional)</label>
                <textarea rows={2} className="w-full bg-transparent border-b border-primary/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors cursor-none rounded-none appearance-none resize-none"></textarea>
              </div>
              
              <div className="pt-4">
                <Button type="submit" disabled={viewingFormState === 'submitting'} className="w-full">
                  {viewingFormState === 'submitting' ? 'SUBMITTING...' : 'REQUEST A PRIVATE VIEWING'}
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>
    </PageTransition>
  );
}
