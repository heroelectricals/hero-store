import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';

const brands = [
  { name: 'Havells', tagline: 'Wires to the World' },
  { name: 'Polycab', tagline: 'Connecting Possibilities' },
  { name: 'Finolex', tagline: 'Built to Last' },
  { name: 'Anchor', tagline: 'by Panasonic' },
  { name: 'Legrand', tagline: 'French Precision' },
  { name: 'Schneider', tagline: 'Electric Solutions' },
  { name: 'GM Modular', tagline: 'Illuminate Life' },
  { name: 'Wipro', tagline: 'Lighting' },
  { name: 'Philips', tagline: 'Innovation & You' },
  { name: 'Crompton', tagline: 'Greaves' },
  { name: 'Orient', tagline: 'Electric' },
  { name: 'Syska', tagline: 'LED Lights' },
  { name: 'RR Kabel', tagline: 'Trusted Quality' },
];

export const BrandShowcase = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="brands"
      ref={ref}
      data-testid="brand-section"
      className="py-20 md:py-28 border-t border-b border-[#E2E8F0]"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="overline mb-3" data-testid="brand-overline">Trusted Brands</p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A192F]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="brand-heading"
            >
              Authorized stockist<span className="text-[#FBBF24]">.</span>
            </h2>
          </div>
          <p className="text-sm text-[#4A5568] max-w-sm">
            We partner with India's leading electrical brands to bring you genuine, warranty-backed products.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        data-testid="brand-marquee"
      >
        <Marquee speed={35} gradient={true} gradientColor="#FFFFFF" gradientWidth={80} pauseOnHover>
          {brands.map((brand) => (
            <div key={brand.name} className="brand-item group cursor-default">
              <div className="flex flex-col items-center">
                <span
                  className="text-2xl font-bold text-[#0A192F] tracking-tight group-hover:text-[#FBBF24] transition-colors duration-300"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {brand.name}
                </span>
                <span className="text-[10px] text-[#4A5568]/40 tracking-widest uppercase mt-0.5"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {brand.tagline}
                </span>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Second row, opposite direction */}
        <div className="mt-4">
          <Marquee speed={25} gradient={true} gradientColor="#FFFFFF" gradientWidth={80} pauseOnHover direction="right">
            {[...brands].reverse().map((brand) => (
              <div key={brand.name + '-rev'} className="brand-item group cursor-default">
                <div className="flex flex-col items-center">
                  <span
                    className="text-lg font-semibold text-[#2D3748] tracking-tight group-hover:text-[#FBBF24] transition-colors duration-300"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
};
