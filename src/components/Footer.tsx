import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-3xl tracking-wider block mb-4">
              AURELIA
            </Link>
            <p className="text-secondary/50 text-[11px] tracking-[0.15em] font-medium uppercase">
              Architecture. Space. Life.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] font-medium text-secondary/30 mb-2">NAVIGATION</h4>
            <Link to="/" className="text-sm text-secondary/80 hover:text-accent transition-colors">HOME</Link>
            <Link to="/properties" className="text-sm text-secondary/80 hover:text-accent transition-colors">PROPERTIES</Link>
            <Link to="/about" className="text-sm text-secondary/80 hover:text-accent transition-colors">ABOUT</Link>
            <Link to="/services" className="text-sm text-secondary/80 hover:text-accent transition-colors">SERVICES</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] font-medium text-secondary/30 mb-2">EXPLORE</h4>
            <Link to="/journal" className="text-sm text-secondary/80 hover:text-accent transition-colors">JOURNAL</Link>
            <Link to="/gallery" className="text-sm text-secondary/80 hover:text-accent transition-colors">GALLERY</Link>
            <Link to="/contact" className="text-sm text-secondary/80 hover:text-accent transition-colors">CONTACT</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] font-medium text-secondary/30 mb-2">SOCIAL</h4>
            <a href="#" className="text-sm text-secondary/80 hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-sm text-secondary/80 hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="text-sm text-secondary/80 hover:text-accent transition-colors">LinkedIn</a>
          </div>

        </div>

        <div className="border-t border-secondary/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-[10px] text-secondary/40 tracking-[0.15em] font-medium uppercase mb-3">
              CONCEPT PROJECT BY FAHIM STUDIO
            </p>
            <p className="text-[10px] tracking-[0.15em] text-secondary/30 uppercase">
              © 2026 AURELIA ESTATES. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <Link
            to="/contact"
            className="px-8 py-3.5 border border-secondary/20 text-[11px] tracking-[0.15em] font-medium hover:bg-secondary hover:text-primary transition-all duration-500"
          >
            SCHEDULE A VISIT
          </Link>
        </div>
      </div>
    </footer>
  );
}
