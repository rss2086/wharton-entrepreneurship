'use client';

import { motion } from 'framer-motion';

interface SpeedLinesProps {
  isMobile?: boolean;
}

export function SpeedLines({ isMobile = false }: SpeedLinesProps) {
  // Different settings for mobile and desktop - reduced intensity for desktop
  const lineConfig = {
    // Reduce line counts by ~35% for desktop
    largeLinesCount: isMobile ? 10 : 13,
    mediumLinesCount: isMobile ? 15 : 16,
    smallLinesCount: isMobile ? 20 : 22,
    // Use full height for desktop with percentages, fixed heights for mobile
    largeHeight: isMobile ? 'h-[250px] sm:h-[300px]' : 'h-full', 
    mediumHeight: isMobile ? 'h-[200px] sm:h-[250px]' : 'h-full',
    smallHeight: isMobile ? 'h-[150px] sm:h-[200px]' : 'h-full',
  };

  // Reduced opacity values for desktop
  const opacityConfig = {
    largeLineOpacity: isMobile ? 0.9 : 0.55,
    mediumLineOpacity: isMobile ? 0.7 : 0.4,
    smallLineOpacity: isMobile ? 0.5 : 0.3,
    // Adjusted shadow intensity
    largeShadow: isMobile 
      ? '0 0 8px 1px rgba(255, 255, 255, 0.5)' 
      : '0 0 5px 1px rgba(255, 255, 255, 0.3)',
    mediumShadow: isMobile 
      ? '0 0 4px rgba(255, 255, 255, 0.3)' 
      : '0 0 2px rgba(255, 255, 255, 0.15)',
  };

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Larger, more prominent speed lines */}
      {[...Array(lineConfig.largeLinesCount)].map((_, index) => (
        <motion.div
          key={`large-${index}`}
          className={`absolute bg-gradient-to-r from-blue-100 via-white to-blue-100 ${lineConfig.largeHeight}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: isMobile ? `${Math.random() * 100}%` : `-${Math.random() * 30}%`,
            width: `${Math.random() * 2 + (isMobile ? 1 : 0.7)}px`,
            transform: `rotate(${80 + Math.random() * 20}deg)`,
            boxShadow: opacityConfig.largeShadow,
            filter: isMobile ? 'blur(0.5px)' : 'blur(0.3px)',
            opacity: isMobile ? 1 : 0.8,
          }}
          animate={{
            y: isMobile ? ['-150%', '150%'] : ['0%', '200%'],
            opacity: [0, opacityConfig.largeLineOpacity, 0],
            transition: {
              duration: 1 + Math.random() * (isMobile ? 1.5 : 2.5),
              repeat: Infinity,
              ease: "easeIn",
              delay: Math.random() * (isMobile ? 2 : 4),
            },
          }}
        />
      ))}
      
      {/* Medium speed lines with added visual interest */}
      {[...Array(lineConfig.mediumLinesCount)].map((_, index) => (
        <motion.div
          key={`medium-${index}`}
          className={`absolute ${lineConfig.mediumHeight}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: isMobile ? `${Math.random() * 100}%` : `-${Math.random() * 30}%`,
            width: `${Math.random() * (isMobile ? 1 : 0.6) + (isMobile ? 0.5 : 0.3)}px`,
            transform: `rotate(${75 + Math.random() * 30}deg)`,
            boxShadow: opacityConfig.mediumShadow,
            background: isMobile
              ? (index % 3 === 0 
                ? 'linear-gradient(to right, #e0e7ff, #ffffff, #e0e7ff)' 
                : index % 3 === 1 
                  ? 'linear-gradient(to right, #d1d5db, #f9fafb, #d1d5db)'
                  : 'linear-gradient(to right, #e0f2fe, #ffffff, #e0f2fe)')
              : (index % 3 === 0 
                ? 'linear-gradient(to right, #e0e7ff80, #ffffff80, #e0e7ff80)' 
                : index % 3 === 1 
                  ? 'linear-gradient(to right, #d1d5db80, #f9fafb80, #d1d5db80)'
                  : 'linear-gradient(to right, #e0f2fe80, #ffffff80, #e0f2fe80)'),
          }}
          animate={{
            y: isMobile ? ['-120%', '120%'] : ['0%', '180%'],
            opacity: [0, opacityConfig.mediumLineOpacity, 0],
            transition: {
              duration: 1.2 + Math.random() * (isMobile ? 1.8 : 2.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * (isMobile ? 3 : 5),
            },
          }}
        />
      ))}
      
      {/* Small subtle speed lines with varying colors */}
      {[...Array(lineConfig.smallLinesCount)].map((_, index) => (
        <motion.div
          key={`small-${index}`}
          className={`absolute ${lineConfig.smallHeight}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: isMobile ? `${Math.random() * 100}%` : `-${Math.random() * 30}%`,
            width: `${Math.random() * (isMobile ? 0.5 : 0.3) + (isMobile ? 0.2 : 0.1)}px`,
            transform: `rotate(${70 + Math.random() * 35}deg)`,
            background: isMobile
              ? (index % 4 === 0 
                ? 'linear-gradient(to right, #94a3b8, #cbd5e1, #94a3b8)'
                : index % 4 === 1
                  ? 'linear-gradient(to right, #9ca3af, #d1d5db, #9ca3af)'
                  : index % 4 === 2
                    ? 'linear-gradient(to right, #a5b4fc, #c7d2fe, #a5b4fc)'
                    : 'linear-gradient(to right, #bae6fd, #e0f2fe, #bae6fd)')
              : (index % 4 === 0 
                ? 'linear-gradient(to right, #94a3b880, #cbd5e180, #94a3b880)'
                : index % 4 === 1
                  ? 'linear-gradient(to right, #9ca3af80, #d1d5db80, #9ca3af80)'
                  : index % 4 === 2
                    ? 'linear-gradient(to right, #a5b4fc60, #c7d2fe60, #a5b4fc60)'
                    : 'linear-gradient(to right, #bae6fd60, #e0f2fe60, #bae6fd60)'),
            opacity: isMobile ? 0.6 : 0.4,
          }}
          animate={{
            y: isMobile ? ['-100%', '100%'] : ['0%', '150%'],
            opacity: [0, opacityConfig.smallLineOpacity, 0],
            transition: {
              duration: 2 + Math.random() * (isMobile ? 2 : 3),
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * (isMobile ? 4 : 6),
            },
          }}
        />
      ))}
      
      {/* Special extra-long streak lines for desktop only - reduced count and opacity */}
      {!isMobile && [...Array(3)].map((_, index) => (
        <motion.div
          key={`streak-${index}`}
          className="absolute h-[150vh] bg-gradient-to-r from-blue-100 via-white to-blue-100"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 50}%`,
            width: `${Math.random() * 2 + 1}px`,
            transform: `rotate(${80 + Math.random() * 15}deg)`,
            boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.35)',
            filter: 'blur(0.7px)',
            opacity: 0.7,
          }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 0.6, 0],
            transition: {
              duration: 3.5 + Math.random(),
              repeat: Infinity,
              ease: "easeIn",
              delay: 5 + Math.random() * 10,
            },
          }}
        />
      ))}
    </motion.div>
  );
}

export default SpeedLines; 