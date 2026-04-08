import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MapPin, Clock, Mail, ArrowRight, Zap } from 'lucide-react';

const contactInfo = [
  // {
  //   icon: Phone,
  //   label: 'Call Us',
  //   value: '+91 98765 43210',
  //   subtext: 'Mon-Sat, 9AM - 8PM',
  // },
  {
    icon: MapPin,
    label: 'Visit Our Shop',
    value: 'G-4, Mahesh Tower, Mani Ram Bagiya, General Ganj',
    subtext: 'Kanpur - 208001',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'heroelectricals.shop@gmail.com',
    subtext: 'We reply within 24 hours',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat: 11:00 AM - 7:30 PM',
    subtext: 'Sunday: Closed',
  },
];

export const SocketFooter = () => {
  const [pluggedIn, setPluggedIn] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="socket-footer"
      className="relative py-24 md:py-32 px-6 md:px-12"
      style={{ background: '#0A192F' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-24">
          {/* Left: Socket Interactive */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col items-center lg:items-start"
          >
            <p className="overline mb-6" data-testid="socket-overline">Get Connected</p>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 text-center lg:text-left"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              data-testid="socket-heading"
            >
              Plug in<span className="text-[#FBBF24]">.</span>
            </h2>
            <p className="text-base text-white/40 mb-10 text-center lg:text-left max-w-sm">
              Connect with us. Click the socket to reveal our contact details.
            </p>

            {/* Socket Component */}
            <div className="flex flex-col items-center gap-4">
              {/* Plug that moves down */}
              <motion.div
                animate={pluggedIn ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="plug"
              >
                <div className="plug-cord" />
                <div className="plug-head">
                  <div className="plug-pin left" />
                  <div className="plug-pin right" />
                </div>
              </motion.div>

              {/* Socket */}
              <motion.button
                data-testid="socket-plug-button"
                onClick={() => setPluggedIn(!pluggedIn)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="socket-container relative cursor-pointer"
              >
                <div className="socket-face">
                  <div className="socket-holes-row">
                    <div className="socket-hole" />
                    <div className="socket-hole" />
                  </div>
                  <div className="socket-ground" />
                </div>

                {/* Glow when plugged in */}
                <AnimatePresence>
                  {pluggedIn && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: '0 0 30px 10px rgba(251,191,36,0.15)',
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>

              <span className="text-xs text-white/30 mt-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {pluggedIn ? 'CONNECTED' : 'CLICK TO CONNECT'}
              </span>
            </div>
          </motion.div>

          {/* Right: Contact Info Cards */}
          <div className="lg:w-2/3">
            <AnimatePresence>
              {pluggedIn ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  data-testid="contact-info-cards"
                >
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 group"
                        data-testid={`contact-card-${i}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#FBBF24]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FBBF24]/20 transition-colors duration-300">
                            <Icon className="w-5 h-5 text-[#FBBF24]" />
                          </div>
                          <div>
                            <p className="text-xs text-white/30 uppercase tracking-widest mb-1"
                              style={{ fontFamily: 'JetBrains Mono, monospace' }}
                            >
                              {info.label}
                            </p>
                            <p className="text-base font-semibold text-white mb-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                              {info.value}
                            </p>
                            <p className="text-sm text-white/30">{info.subtext}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* CTA Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="md:col-span-2 p-6 rounded-2xl bg-[#FBBF24] group cursor-pointer hover:bg-[#F59E0B] transition-colors duration-300"
                    data-testid="contact-cta"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-[#0A192F]/60 uppercase tracking-widest mb-1"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          Ready to order?
                        </p>
                        <p className="text-xl font-bold text-[#0A192F]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          Request a wholesale quote today
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[#0A192F] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center lg:items-start justify-center h-[300px]"
                  data-testid="contact-placeholder"
                >
                  <div className="text-center lg:text-left">
                    <p className="text-white/20 text-lg mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Plug in to reveal contact details
                    </p>
                    <p className="text-white/10 text-sm">
                      Click the socket on the {window.innerWidth >= 1024 ? 'left' : 'top'} to get connected
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          data-testid="footer-bottom"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FBBF24] flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#0A192F]" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Hero<span className="text-[#FBBF24]">.</span>Electricals
            </span>
          </div>
          <p className="text-xs text-white/20" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            &copy; {new Date().getFullYear()} Hero Electricals. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#top" className="text-xs text-white/30 hover:text-[#FBBF24] transition-colors">Privacy</a>
            <a href="#top" className="text-xs text-white/30 hover:text-[#FBBF24] transition-colors">Terms</a>
            <a href="#top" className="text-xs text-white/30 hover:text-[#FBBF24] transition-colors">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
