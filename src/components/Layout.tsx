import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Plane, Compass, Heart, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// --- Navbar Component ---
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hajj & Umrah', path: '/hajj-umrah' },
    { name: 'Air Ticket', path: '/air-ticket' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Compass size={24} />
          </div>
          <span className={cn(
            'text-xl font-bold tracking-tighter transition-colors duration-300',
            (isScrolled || location.pathname !== '/') ? 'text-black' : 'text-white'
          )}>
            LUXURY TRAVELS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:opacity-70',
                (isScrolled || location.pathname !== '/') ? 'text-black' : 'text-white',
                location.pathname === link.path && 'underline underline-offset-4 decoration-2'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/air-ticket"
            className={cn(
              'px-6 py-2 rounded-full text-sm font-semibold transition-all',
              (isScrolled || location.pathname !== '/')
                ? 'bg-black text-white hover:bg-black/80'
                : 'bg-white text-black hover:bg-white/90'
            )}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            'md:hidden p-2 transition-colors',
            (isScrolled || location.pathname !== '/') ? 'text-black' : 'text-white'
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden flex flex-col p-6 gap-4 border-t"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-black hover:text-gray-600"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/air-ticket"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-black text-white text-center py-3 rounded-xl font-semibold"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- Footer Component ---
export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center">
              <Compass size={20} />
            </div>
            <span className="text-xl font-bold tracking-tighter">LUXURY TRAVELS</span>
          </Link>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Crafting unforgettable experiences and spiritual journeys with a touch of elegance and precision.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <Facebook size={18} className="hover:text-white cursor-pointer transition-colors" />
            <Twitter size={18} className="hover:text-white cursor-pointer transition-colors" />
            <Instagram size={18} className="hover:text-white cursor-pointer transition-colors" />
            <Youtube size={18} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><Link to="/tours" className="hover:text-white transition-colors">Global Tours</Link></li>
            <li><Link to="/hajj-umrah" className="hover:text-white transition-colors">Hajj Packages</Link></li>
            <li><Link to="/hajj-umrah" className="hover:text-white transition-colors">Umrah Packages</Link></li>
            <li><Link to="/air-ticket" className="hover:text-white transition-colors">Flight Booking</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Process</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold">Newsletter</h4>
          <p className="text-sm text-neutral-400">Get the latest travel deals and updates direct to your inbox.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address"
              className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-neutral-600"
            />
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Luxury Travels. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
        </div>
      </div>
    </footer>
  );
}

// --- Layout Component ---
export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
