import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const JunctionDot = ({ cx, cy, scrollYProgress, threshold }) => {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, threshold - 0.05), threshold],
    [0, 0.6]
  );

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="6"
      fill="#FBBF24"
      style={{ opacity }}
    />
  );
};

const junctions = [
  { cx: 300, cy: 600, threshold: 0.1 },
  { cx: 1600, cy: 1600, threshold: 0.27 },
  { cx: 300, cy: 2600, threshold: 0.43 },
  { cx: 1600, cy: 3600, threshold: 0.6 },
  { cx: 200, cy: 4600, threshold: 0.77 },
];

export const CableAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[5] hidden lg:block"
      data-testid="cable-animation"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 6000"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="cableGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A192F" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0A192F" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 960 0 
             C 960 200, 300 400, 300 600
             S 1600 800, 1600 1000
             C 1600 1200, 200 1400, 200 1600
             S 1700 1800, 1700 2000
             C 1700 2200, 300 2400, 300 2600
             S 1500 2800, 1500 3000
             C 1500 3200, 400 3400, 400 3600
             S 1600 3800, 1600 4000
             C 1600 4200, 200 4400, 200 4600
             S 960 5000, 960 5200
             L 960 6000"
          fill="none"
          stroke="url(#cableGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {junctions.map((j, i) => (
          <JunctionDot
            key={i}
            cx={j.cx}
            cy={j.cy}
            scrollYProgress={scrollYProgress}
            threshold={j.threshold}
          />
        ))}
      </svg>
    </div>
  );
};
