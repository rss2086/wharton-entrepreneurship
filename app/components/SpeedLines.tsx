'use client';

import { motion } from 'framer-motion';

interface SpeedLinesProps {
  isMobile?: boolean;
}

export function SpeedLines({ isMobile = false }: SpeedLinesProps) {
  // Different settings for mobile and desktop - expanded for better desktop experience
  const lineConfig = {
    largeLinesCount: isMobile ? 10 : 20,
    mediumLinesCount: isMobile ? 15 : 25,
    smallLinesCount: isMobile ? 20 : 35,
    // Use full height for desktop with percentages, fixed heights for mobile
    largeHeight: isMobile ? 'h-[250px] sm:h-[300px]' : 'h-full', 
    mediumHeight: isMobile ? 'h-[200px] sm:h-[250px]' : 'h-full',
    smallHeight: isMobile ? 'h-[150px] sm:h-[200px]' : 'h-full',
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
            width: `${Math.random() * 2 + 1}px`,
            transform: `rotate(${80 + Math.random() * 20}deg)`,
            boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.5)',
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: isMobile ? ['-150%', '150%'] : ['0%', '200%'],
            opacity: [0, 0.9, 0],
            transition: {
              duration: 1 + Math.random() * 1.5,
              repeat: Infinity,
              ease: "easeIn",
              delay: Math.random() * 2,
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
            width: `${Math.random() * 1 + 0.5}px`,
            transform: `rotate(${75 + Math.random() * 30}deg)`,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.3)',
            background: index % 3 === 0 
              ? 'linear-gradient(to right, #e0e7ff, #ffffff, #e0e7ff)' 
              : index % 3 === 1 
                ? 'linear-gradient(to right, #d1d5db, #f9fafb, #d1d5db)'
                : 'linear-gradient(to right, #e0f2fe, #ffffff, #e0f2fe)',
          }}
          animate={{
            y: isMobile ? ['-120%', '120%'] : ['0%', '180%'],
            opacity: [0, 0.7, 0],
            transition: {
              duration: 1.2 + Math.random() * 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
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
            width: `${Math.random() * 0.5 + 0.2}px`,
            transform: `rotate(${70 + Math.random() * 35}deg)`,
            background: index % 4 === 0 
              ? 'linear-gradient(to right, #94a3b8, #cbd5e1, #94a3b8)'
              : index % 4 === 1
                ? 'linear-gradient(to right, #9ca3af, #d1d5db, #9ca3af)'
                : index % 4 === 2
                  ? 'linear-gradient(to right, #a5b4fc, #c7d2fe, #a5b4fc)'
                  : 'linear-gradient(to right, #bae6fd, #e0f2fe, #bae6fd)',
            opacity: 0.6,
          }}
          animate={{
            y: isMobile ? ['-100%', '100%'] : ['0%', '150%'],
            opacity: [0, 0.5, 0],
            transition: {
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 4,
            },
          }}
        />
      ))}
      
      {/* Special extra-long streak lines for desktop only */}
      {!isMobile && [...Array(6)].map((_, index) => (
        <motion.div
          key={`streak-${index}`}
          className="absolute h-[150vh] bg-gradient-to-r from-blue-100 via-white to-blue-100"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 50}%`,
            width: `${Math.random() * 3 + 1.5}px`,
            transform: `rotate(${80 + Math.random() * 15}deg)`,
            boxShadow: '0 0 12px 2px rgba(255, 255, 255, 0.7)',
            filter: 'blur(1px)',
          }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 0.95, 0],
            transition: {
              duration: 2.5 + Math.random(),
              repeat: Infinity,
              ease: "easeIn",
              delay: 2 + Math.random() * 5,
            },
          }}
        />
      ))}
    </motion.div>
  );
}

export default SpeedLines; 