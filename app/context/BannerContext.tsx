'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type BannerContextType = {
  showBanner: boolean;
  hideBanner: () => void;
  showBannerAgain: () => void;
};

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export function BannerProvider({ children }: { children: ReactNode }) {
  const [showBanner, setShowBanner] = useState(true);
  
  // Check if banner was previously hidden
  useEffect(() => {
    const bannerHidden = localStorage.getItem('startupWeekBannerHidden');
    if (bannerHidden === 'true') {
      setShowBanner(false);
    }
  }, []);

  // Check if we're in the date range for Startup Week
  useEffect(() => {
    const now = new Date();
    const startupWeekStart = new Date('2024-04-15');
    const startupWeekEnd = new Date('2024-04-19');
    
    // Always show banner during Startup Week regardless of user preference
    if (now >= startupWeekStart && now <= startupWeekEnd) {
      setShowBanner(true);
      localStorage.removeItem('startupWeekBannerHidden');
    }
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
    <BannerContext.Provider value={{ showBanner, hideBanner, showBannerAgain }}>
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