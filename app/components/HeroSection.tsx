'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useScreenSize } from '../hooks/useScreenSize';
import { LogoMarquee } from './LogoMarquee';
import RocketAnimation from './RocketAnimation';
import SpeedLines from './SpeedLines';

export function HeroSection() {
  // Get screen size to conditionally render components
  const { isDesktop } = useScreenSize();
  const [isClient, setIsClient] = useState(false);

  // Ensure we only render screen-specific components after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-white pt-12 min-h-screen">
      {/* Starfield Background */}
      <div className="absolute inset-0 bg-[url('/starfield.svg')] bg-cover bg-center z-0"></div>
      
      {/* Animated Twinkling Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
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

      {/* Full-height speed lines for desktop - positioned to cover entire section */}
      {isClient && isDesktop && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <SpeedLines isMobile={false} />
        </div>
      )}
      
      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 lg:pt-16">
        {/* Flex container for desktop layout with content and rocket side by side */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-4 xl:gap-8 relative">
          {/* Hero Text Content */}
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-1 lg:max-w-none lg:pr-4 xl:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-start items-center space-x-4">
              <Image src="/eclub-logo.png" alt="EClub Logo" width={256} height={256} className="invert" />
            </div>
            <h1 className="max-w-lg lg:max-w-none text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl pt-4">
              Your home for entrepreneurship at <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Wharton</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 md:text-3xl">
              E-Club is Wharton&apos;s largest student-run organization focused on entrepreneurship. We provide resources, events, and networking opportunities for aspiring founders.
            </p>
            <div className="mt-10 flex flex-row items-center gap-y-4 gap-x-6">
              <a
                href="https://groups.wharton.upenn.edu/student_community?club_id=11514"
                className="sm:w-auto rounded-md bg-white px-6 py-3 text-base sm:text-lg font-semibold text-red-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 text-left"
              >
                Join now
              </a>
              <a
                href="https://groups.wharton.upenn.edu/feeds?type=club&type_id=11514&tab=home"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-white bg-opacity-10 bg-zinc-950 backdrop-filter backdrop-blur-lg rounded-md border border-white border-opacity-20 hover:bg-opacity-20 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <span className="relative z-10">Events</span>
                <div className="absolute inset-0 bg-blue-600 opacity-30 blur-xl"></div>
                <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Rocket Animation Container - conditionally rendered based on screen size */}
          {isClient && isDesktop && (
            <div className="relative z-20 pointer-events-none lg:flex-1 lg:min-w-[400px] lg:max-w-[500px] xl:max-w-[550px]">
              <motion.div 
                className="relative w-full"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ 
                  y: [100, 0],
                  opacity: [0, 1]
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  y: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100
                  },
                  opacity: {
                    duration: 1.5
                  }
                }}
              >
                <div className="w-full h-[450px] xl:h-[500px] flex justify-center items-center relative">
                  <RocketAnimation isMobile={false} />
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Logo Marquee Section - Full width */}
      <div className="relative z-20 w-full my-12">
        <LogoMarquee className="mb-4" whiteLogos={true} />
      </div>
      
      {/* Mobile Rocket Animation - Only renders on smaller screens */}
      {isClient && !isDesktop && (
        <div className="relative z-10 mt-8 pointer-events-none">
          <motion.div 
            className="relative mx-auto w-full max-w-sm"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ 
              y: [100, 0],
              opacity: [0, 1]
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut",
              y: {
                type: "spring",
                damping: 15,
                stiffness: 100
              },
              opacity: {
                duration: 1.5
              }
            }}
          >
            <div className="w-full h-[300px] sm:h-[400px] flex justify-center items-center relative">
              <SpeedLines isMobile={true} />
              <RocketAnimation isMobile={true} />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;