import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'PROPERTIES', href: '/properties' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'JOURNAL', href: '/journal' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkBgContext = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/services' || location.pathname === '/contact' || location.pathname.includes('/properties/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Close with ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navClass = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    isScrolled
      ? 'bg-[#111111]/90 backdrop-blur-md py-4 border-b border-white/10'
      : 'bg-transparent py-6'
  );

  const textClass = cn(
    'text-[11px] tracking-[0.15em] font-medium transition-colors',
    isScrolled ? 'text-secondary' : isDarkBgContext ? 'text-secondary' : 'text-primary'
  );

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className={cn("font-display text-2xl tracking-wider", textClass)}>
            AURELIA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    textClass,
                    'hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300',
                    location.pathname === link.href ? 'after:w-full text-accent' : 'after:w-0 hover:after:w-full'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <Link
              to="/contact"
              className={cn(
                'px-8 py-3.5 border text-[11px] tracking-[0.15em] font-medium transition-all duration-500',
                isScrolled || isDarkBgContext
                  ? 'border-secondary/20 text-secondary hover:bg-secondary hover:text-primary'
                  : 'border-primary/20 text-primary hover:bg-primary hover:text-secondary'
              )}
            >
              SCHEDULE A VISIT
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn("lg:hidden p-2 -mr-2", textClass)}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-primary flex flex-col justify-center px-8"
          >
            <button
              className="absolute top-6 right-6 p-2 text-secondary"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <motion.div
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col space-y-6 text-center"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "font-display text-3xl text-secondary hover:text-accent transition-colors",
                      location.pathname === link.href && "text-accent italic"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: 20, opacity: 0 }
                }}
                className="pt-8"
              >
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 border border-secondary/30 text-secondary text-sm tracking-widest hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  SCHEDULE A VISIT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
