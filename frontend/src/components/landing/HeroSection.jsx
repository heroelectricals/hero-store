import { motion } from 'framer-motion';
import { ArrowDown, Cable } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden"
      style={{ background: '#F8F9FA' }}
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-px h-full bg-[#E2E8F0]" />
        <div className="absolute top-0 left-[40%] w-px h-full bg-[#E2E8F0]" />
        <div className="absolute top-0 left-[60%] w-px h-full bg-[#E2E8F0]" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-[#E2E8F0]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overline mb-6 md:mb-8"
          data-testid="hero-overline"
        >
          Since 1998 &mdash; Trusted by 10,000+ homes
        </motion.p>

        {/* Main Heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#0A192F] leading-[0.9] mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
            data-testid="hero-heading"
          >
            Powering
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#0A192F] leading-[0.9] mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            the <span className="text-[#FBBF24]">Modern</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#0A192F] leading-[0.9]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Spaces<span className="text-[#FBBF24]">.</span>
          </motion.h1>
        </div>

        {/* Subtitle & CTA */}
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base md:text-lg text-[#4A5568] max-w-md leading-relaxed"
            data-testid="hero-subtitle"
          >
            Premium wires, switches, LEDs, and everything your home needs &mdash; 
            from a single trusted source. Retail & wholesale, under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href="#switchboard"
              data-testid="hero-cta-explore"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A192F] text-white text-sm font-semibold rounded-full hover:bg-[#2D3748] transition-colors duration-300 group"
            >
              Explore Products
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#E2E8F0] text-[#0A192F] text-sm font-semibold rounded-full hover:border-[#0A192F] transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Floating Cable Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-8 right-8 md:right-20 hidden md:block"
        >
          <Cable className="w-32 h-32 text-[#E2E8F0] rotate-12" strokeWidth={0.8} />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-[#E2E8F0] pt-8"
          data-testid="hero-stats"
        >
          {[
            { num: '500+', label: 'Products' },
            { num: '25+', label: 'Brands' },
            { num: '10K+', label: 'Happy Customers' },
            { num: '25+', label: 'Years of Trust' },
          ].map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-2xl md:text-3xl font-bold text-[#0A192F]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {stat.num}
              </p>
              <p className="text-sm text-[#4A5568] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#0A192F]/20 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-[#0A192F]/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
