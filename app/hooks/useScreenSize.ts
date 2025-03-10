'use client';

import { useState, useEffect } from 'react';

export function useScreenSize() {
  // Initialize with reasonable defaults that won't cause hydration mismatch
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // Function to update screen size state
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // Initial update
    updateScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', updateScreenSize);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
}

export default useScreenSize; 