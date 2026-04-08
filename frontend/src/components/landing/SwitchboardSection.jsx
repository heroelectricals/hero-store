import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag, Warehouse, ChevronRight } from 'lucide-react';

const retailProducts = [
  {
    name: 'Designer Modular Switches',
    desc: 'Premium touch-panel switches for modern homes. Available in matte white, champagne gold, and graphite finishes.',
    price: 'Starting at Rs. 180/piece',
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1722402116409-9ff8e00fdda9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsaWdodCUyMHN3aXRjaCUyMG1pbmltYWx8ZW58MHx8fHwxNzc1NDUwODg1fDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'LED Panel Lights',
    desc: 'Ultra-slim ceiling panels with warm, neutral, and cool white options. Energy-efficient, flicker-free technology.',
    price: 'Starting at Rs. 450/piece',
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1770816306485-862b40ecc402?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpZ2h0aW5nJTIwbWluaW1hbHxlbnwwfHx8fDE3NzU0NTA4NjF8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Safety MCB & Switchboards',
    desc: 'ISI-certified miniature circuit breakers and distribution boards. Complete protection for every circuit.',
    price: 'Starting at Rs. 320/unit',
    tag: 'Essential',
    image: 'https://images.unsplash.com/photo-1772475385509-93fd87a2d4ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBpbnRlcmlvciUyMExFRCUyMGxpZ2h0aW5nJTIwbWluaW1hbHxlbnwwfHx8fDE3NzU0NTEwMDF8MA&ixlib=rb-4.1.0&q=85',
  },
];

const wholesaleProducts = [
  {
    name: 'Copper Wiring (1000m Drums)',
    desc: 'Industrial-grade multi-strand copper wire. Available in 1.0mm, 1.5mm, 2.5mm, 4.0mm, and 6.0mm.',
    price: 'Rs. 4,200/drum onwards',
    tag: 'Bulk Price',
    image: 'https://images.unsplash.com/photo-1758965364875-e090e5423d2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxlbGVjdHJpY2FsJTIwd2lyZSUyMHNwb29sJTIwaW5kdXN0cmlhbHxlbnwwfHx8fDE3NzU0NTA4ODV8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'Modular Switch Plates (Box of 100)',
    desc: 'Standard and premium switch plates in bulk. 1M, 2M, 3M, 4M, 6M, 8M, and 12M gang variants.',
    price: 'Rs. 8,500/box onwards',
    tag: 'Contractor Special',
    image: 'https://images.unsplash.com/photo-1722402116409-9ff8e00fdda9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsaWdodCUyMHN3aXRjaCUyMG1pbmltYWx8ZW58MHx8fHwxNzc1NDUwODg1fDA&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'LED Tubes & Battens (Carton of 50)',
    desc: 'T5 and T8 LED tubes in 2ft and 4ft. High-lumen, long-life, ISI-certified for commercial projects.',
    price: 'Rs. 12,000/carton onwards',
    tag: 'Project Rate',
    image: 'https://images.unsplash.com/photo-1770816306397-f4517ccbf63d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBpbnRlcmlvciUyMExFRCUyMGxpZ2h0aW5nJTIwbWluaW1hbHxlbnwwfHx8fDE3NzU0NTEwMDF8MA&ixlib=rb-4.1.0&q=85',
  },
];

export const SwitchboardSection = () => {
  const [isRetail, setIsRetail] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const products = isRetail ? retailProducts : wholesaleProducts;

  return (
    <section
      id="switchboard"
      ref={ref}
      data-testid="switchboard-section"
      className="relative py-24 md:py-32 px-6 md:px-12 transition-colors duration-700"
      style={{
        background: isRetail ? '#F8F9FA' : '#0A192F',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-24">
          {/* Left: Switch + Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/3 flex flex-col items-start"
          >
            <p className="overline mb-4" data-testid="switchboard-overline">Flip the Switch</p>
            <h2
              className={`text-3xl md:text-5xl tracking-tight font-bold leading-tight mb-6 transition-colors duration-700 ${
                isRetail ? 'text-[#0A192F]' : 'text-white'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="switchboard-heading"
            >
              {isRetail ? 'Retail' : 'Wholesale'}
              <br />
              <span className="text-[#FBBF24]">{isRetail ? 'for Homes' : 'for Business'}</span>
            </h2>
            <p className={`text-base leading-relaxed mb-10 transition-colors duration-700 ${
              isRetail ? 'text-[#4A5568]' : 'text-white/60'
            }`}>
              {isRetail
                ? 'Browse our curated selection of premium electrical products for your home. Quality guaranteed.'
                : 'Bulk orders for contractors, builders, and electricians. Competitive project rates with doorstep delivery.'}
            </p>

            {/* Physical Switchboard */}
            <div className="switchboard-frame" data-testid="switchboard-frame">
              {/* Label */}
              <div className="flex justify-between w-full px-2 mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isRetail ? 'text-[#FBBF24]' : 'text-gray-400'}`}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Retail
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${!isRetail ? 'text-[#FBBF24]' : 'text-gray-400'}`}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Wholesale
                </span>
              </div>

              {/* Rocker Switch */}
              <button
                data-testid="retail-wholesale-toggle"
                onClick={() => setIsRetail(!isRetail)}
                className={`rocker-switch ${isRetail ? 'on' : ''}`}
                aria-label="Toggle between retail and wholesale"
              >
                <div className={`switch-indicator ${isRetail ? 'active' : 'inactive'}`} />
              </button>

              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-2">
                {isRetail ? (
                  <ShoppingBag className="w-4 h-4 text-[#FBBF24]" />
                ) : (
                  <Warehouse className="w-4 h-4 text-[#FBBF24]" />
                )}
                <span className="text-xs font-medium text-gray-500" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {isRetail ? 'ON — Retail Mode' : 'OFF — Wholesale Mode'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Cards */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={isRetail ? 'retail' : 'wholesale'}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-testid="switchboard-products"
              >
                {products.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`rounded-2xl overflow-hidden border transition-all duration-300 group cursor-pointer ${
                      isRetail
                        ? 'bg-white border-[#E2E8F0] hover:shadow-lg'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                    data-testid={`product-card-${i}`}
                  >
                    {/* Image */}
                    <div className="h-40 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#FBBF24]/10 text-[#FBBF24]"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          {product.tag}
                        </span>
                      </div>
                      <h3 className={`text-base font-semibold mb-1.5 transition-colors duration-500 ${
                        isRetail ? 'text-[#0A192F]' : 'text-white'
                      }`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {product.name}
                      </h3>
                      <p className={`text-sm leading-relaxed mb-3 transition-colors duration-500 ${
                        isRetail ? 'text-[#4A5568]' : 'text-white/50'
                      }`}>
                        {product.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold transition-colors duration-500 ${
                          isRetail ? 'text-[#0A192F]' : 'text-[#FBBF24]'
                        }`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          {product.price}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-1 ${
                          isRetail ? 'text-[#0A192F]' : 'text-white/40'
                        }`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Cable connector line between sections */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-[#FBBF24] shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
      </div>
    </section>
  );
};
