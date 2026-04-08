import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Retail & Wholesale', href: '#switchboard' },
  { label: 'Lighting', href: '#lighting' },
  { label: 'Brands', href: '#brands' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
        {/* Logo */}
        <a href="#top" data-testid="navbar-logo" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#0A192F] flex items-center justify-center group-hover:bg-[#FBBF24] transition-colors duration-300">
            <Zap className="w-5 h-5 text-[#FBBF24] group-hover:text-[#0A192F] transition-colors duration-300" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#0A192F]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Hero<span className="text-[#FBBF24]">.</span>Electricals
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-[#4A5568] hover:text-[#0A192F] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FBBF24] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#0A192F]/5 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5 text-[#0A192F]" /> : <Menu className="w-5 h-5 text-[#0A192F]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[#E2E8F0]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[#4A5568] hover:text-[#0A192F] py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
