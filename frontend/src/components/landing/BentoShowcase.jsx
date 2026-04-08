import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plug, Cable, ToggleLeft, CircuitBoard, Wifi, Shield } from 'lucide-react';

const categories = [
  {
    title: 'Sockets & Outlets',
    desc: '5A, 6A, 16A, 20A power sockets in modular and conventional styles. Universal, 3-pin, and multi-plug options.',
    icon: Plug,
    span: 'md:col-span-7',
    height: 'h-[280px] md:h-[320px]',
    accent: true,
  },
  {
    title: 'Connectors & Joints',
    desc: 'Wire connectors, terminal blocks, cable glands, and junction boxes for safe and reliable wiring.',
    icon: CircuitBoard,
    span: 'md:col-span-5',
    height: 'h-[280px] md:h-[320px]',
    accent: false,
  },
  {
    title: 'Wires & Cables',
    desc: 'HRFR, PVC, and armoured cables from Havells, Polycab, Finolex, RR Kabel. 0.75mm to 16mm, single & multi-core.',
    icon: Cable,
    span: 'md:col-span-4',
    height: 'h-[260px] md:h-[280px]',
    accent: false,
  },
  {
    title: 'Switches & Dimmers',
    desc: 'Toggle, rocker, touch-sensitive, and smart WiFi switches. Bell switches, fan regulators, and dimmer modules.',
    icon: ToggleLeft,
    span: 'md:col-span-4',
    height: 'h-[260px] md:h-[280px]',
    accent: false,
  },
  {
    title: 'Smart Home',
    desc: 'WiFi-enabled switches, voice-controlled modules, and smart plugs compatible with Alexa & Google Home.',
    icon: Wifi,
    span: 'md:col-span-4',
    height: 'h-[260px] md:h-[280px]',
    accent: true,
  },
  {
    title: 'Safety & Protection',
    desc: 'MCBs, RCCBs, surge protectors, earthing kits, and DB boards. Complete circuit protection solutions.',
    icon: Shield,
    span: 'md:col-span-12',
    height: 'h-[200px] md:h-[240px]',
    accent: false,
  },
];

export const BentoShowcase = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="products"
      ref={ref}
      data-testid="bento-section"
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: '#F8F9FA' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="overline mb-4"
            data-testid="bento-overline"
          >
            Product Categories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A192F] mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
            data-testid="bento-heading"
          >
            Everything electrical<span className="text-[#FBBF24]">,</span>
            <br />
            under one roof<span className="text-[#FBBF24]">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-[#4A5568] leading-relaxed"
          >
            From a single switch to complete home wiring &mdash; browse our full range of categories.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`${cat.span} ${cat.height} bento-card p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                  cat.accent ? 'bg-[#0A192F] border-[#0A192F]' : 'bg-white'
                }`}
                data-testid={`bento-card-${i}`}
              >
                {/* Hover glow for accent cards */}
                {cat.accent && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 80% 80%, rgba(251,191,36,0.12) 0%, transparent 60%)',
                    }}
                  />
                )}

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                    cat.accent
                      ? 'bg-[#FBBF24]/10 group-hover:bg-[#FBBF24]/20'
                      : 'bg-[#0A192F]/5 group-hover:bg-[#0A192F]/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${cat.accent ? 'text-[#FBBF24]' : 'text-[#0A192F]'}`} />
                  </div>
                  <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${
                    cat.accent ? 'text-white' : 'text-[#0A192F]'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {cat.title}
                  </h3>
                </div>

                <p className={`text-sm leading-relaxed relative z-10 ${
                  cat.accent ? 'text-white/50' : 'text-[#4A5568]'
                }`}>
                  {cat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
