'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type BannerContextType = {
  showBanner: boolean;
  hideBanner: () => void;
  showBannerAgain: () => void;
  isLoaded: boolean;
};

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export function BannerProvider({ children }: { children: ReactNode }) {
  const [showBanner, setShowBanner] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Check if banner was previously hidden and if we're in the date range for Startup Week
  useEffect(() => {
    // Check if we're in the date range for Startup Week
    const now = new Date();
    const startupWeekStart = new Date('2024-04-15');
    const startupWeekEnd = new Date('2024-04-19');
    
    // Always show banner during Startup Week regardless of user preference
    if (now >= startupWeekStart && now <= startupWeekEnd) {
      setShowBanner(true);
      localStorage.removeItem('startupWeekBannerHidden');
    } else {
      // Only check localStorage if we're not in Startup Week
      const bannerHidden = localStorage.getItem('startupWeekBannerHidden');
      if (bannerHidden === 'true') {
        setShowBanner(false);
      }
    }
    
    // Mark as loaded after initial state is determined
    setIsLoaded(true);
  }, []);

  const hideBanner = () => {
    setShowBanner(false);
    localStorage.setItem('startupWeekBannerHidden', 'true');
  };

  const showBannerAgain = () => {
    setShowBanner(true);
    localStorage.removeItem('startupWeekBannerHidden');
  };

  return (
    <BannerContext.Provider value={{ showBanner, hideBanner, showBannerAgain, isLoaded }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const context = useContext(BannerContext);
  if (context === undefined) {
    throw new Error('useBanner must be used within a BannerProvider');
  }
  return context;
} 