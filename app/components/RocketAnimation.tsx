'use client';

import { motion } from 'framer-motion';
import { useLottie } from "lottie-react";
import { useEffect, useState } from 'react';
import rocket from "../small-rocket.json";

interface RocketAnimationProps {
  isMobile?: boolean;
}

export function RocketAnimation({ isMobile = false }: RocketAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Lottie setup with enhanced options
  const options = {
    animationData: rocket,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      clearCanvas: false,
    }
  };

  const { View } = useLottie(options);

  // Make sure the animation is visible after mounting
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Different sizes based on screen - significantly larger for desktop
  const sizeClass = isMobile 
    ? "w-full max-w-[220px] sm:max-w-[250px]" 
    : "w-full max-w-[450px] lg:max-w-[500px] xl:max-w-[550px]";

  return (
    <motion.div 
      className={`${sizeClass} relative z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      animate={{
        y: [0, -10, 0],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {/* Enhanced glow effect behind the rocket */}
      <div className="absolute inset-0 blur-xl bg-blue-400 opacity-20 rounded-full transform scale-90 translate-y-10"></div>
      
      {/* Secondary glow for more depth */}
      <div className="absolute inset-0 blur-2xl bg-purple-500 opacity-10 rounded-full transform scale-125 translate-y-8"></div>
      
      {/* Rocket thruster glow - enhanced for desktop */}
      {/* <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${isMobile ? 'w-8 h-16' : 'w-12 h-24'} bg-gradient-to-t from-orange-600 via-orange-500 to-yellow-400 rounded-full filter blur-xl opacity-70`}> */}
        {/* Inner thruster glow */}
        {/* <div className={`absolute inset-x-0 bottom-0 ${isMobile ? 'h-10' : 'h-16'} bg-gradient-to-t from-yellow-300 to-white rounded-full filter blur-lg opacity-80`}></div> */}
      {/* </div> */}
      
      {/* Animated particles for thruster */}
      {!isMobile && Array(6).fill(0).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full"
          style={{
            x: `calc(-50% + ${(Math.random() * 20) - 10}px)`,
          }}
          animate={{
            y: [0, 50 + Math.random() * 30],
            opacity: [1, 0],
            scale: [1, 0.2]
          }}
          transition={{
            duration: 1 + Math.random() * 0.5,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
      
      {/* The actual rocket animation with enhanced container */}
      <div className="relative">
        {/* Subtle shine effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100 to-transparent opacity-5 mix-blend-overlay"></div> */}
        {View}
      </div>
    </motion.div>
  );
}

export default RocketAnimation; 