'use client';

import Link from 'next/link';
import { useBanner } from '../context/BannerContext';
import { motion } from 'framer-motion';

export default function StartupWeekBanner() {
  const { showBanner, hideBanner } = useBanner();

  if (!showBanner) {
    return null;
  }

  return (
    <div className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-2 px-4 relative overflow-hidden">
      {/* Animated stars in the banner */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-sm">Wharton Startup Week 2024</span>
          <span className="hidden sm:inline text-white/80">•</span>
          <span className="hidden sm:inline text-sm text-white/80">April 15-19</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            href="/startup-week" 
            className="text-xs font-medium hover:underline transition-all mt-1 sm:mt-0 uppercase tracking-wide group relative"
          >
            <span>View Details</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button 
            onClick={hideBanner}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
