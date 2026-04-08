import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Sparkles, Sun } from 'lucide-react';

const lightingProducts = [
  {
    icon: Lightbulb,
    name: 'LED Bulbs',
    spec: '5W - 23W',
    detail: 'Energy-saving LED bulbs in warm white, cool daylight, and amber tones. B22 & E27 bases available.',
    lumens: '450 - 2500 lm',
  },
  {
    icon: Sun,
    name: 'Panel Lights',
    spec: 'Round & Square',
    detail: 'Ultra-slim surface & recessed panels. 6W to 24W. Flicker-free driver with 2-year warranty.',
    lumens: '600 - 2400 lm',
  },
  {
    icon: Sparkles,
    name: 'LED Strips & Profiles',
    spec: 'RGB & Single Color',
    detail: 'Flexible LED strips with aluminium profiles. Waterproof options for outdoor cove lighting.',
    lumens: 'Up to 1200 lm/m',
  },
];

export const LEDSection = () => {
  const [isLit, setIsLit] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
    onChange: (visible) => {
      if (visible) {
        setTimeout(() => setIsLit(true), 400);
      }
    },
  });

  return (
    <section
      id="lighting"
      ref={ref}
      data-testid="led-section"
      className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden"
      style={{ background: '#0A192F' }}
    >
      {/* Ambient glow behind tubelight */}
      <motion.div
        animate={isLit ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(251,191,36,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overline mb-8 text-center"
          data-testid="led-overline"
        >
          Lighting & LEDs
        </motion.p>

        {/* Tubelight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="tubelight-container mb-6"
          data-testid="led-tubelight"
        >
          <div className="relative flex items-center">
            <div className="tubelight-cap left" />
            <motion.div
              className={`tubelight ${isLit ? 'lit' : ''}`}
              animate={isLit ? {
                boxShadow: [
                  '0 0 10px 2px rgba(251,191,36,0)',
                  '0 0 40px 10px rgba(251,191,36,0.3)',
                  '0 0 60px 15px rgba(251,191,36,0.2)',
                ],
                background: [
                  'rgba(255,255,255,0.08)',
                  'rgba(255,255,255,0.95)',
                  'rgba(255,255,255,0.9)',
                ],
              } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ width: '60vw', maxWidth: '700px', height: '10px' }}
            />
            <div className="tubelight-cap right" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isLit ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
          data-testid="led-heading"
        >
          Light up your world<span className="text-[#FBBF24]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isLit ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base md:text-lg text-white/50 text-center max-w-lg mx-auto mb-16"
        >
          From ambient cove lighting to high-output commercial fixtures &mdash;
          we carry it all.
        </motion.p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lightingProducts.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isLit ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="group relative p-8 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500 cursor-pointer"
                data-testid={`led-product-${i}`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(251,191,36,0.08) 0%, transparent 60%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FBBF24]/10 flex items-center justify-center mb-6 group-hover:bg-[#FBBF24]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#FBBF24]" />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {product.name}
                    </h3>
                    <span className="text-xs font-medium text-[#FBBF24]/60 px-2 py-0.5 rounded-full border border-[#FBBF24]/20"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {product.spec}
                    </span>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed mb-4">
                    {product.detail}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FBBF24]" />
                    <span className="text-xs text-white/30" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {product.lumens}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cable connector */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-[#FBBF24] shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
      </div>
    </section>
  );
};
