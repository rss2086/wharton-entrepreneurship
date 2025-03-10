'use client';

import HeroSection from '@/app/components/HeroSection';
import Features from '@/app/components/Features';
import Sponsored from '@/app/components/Sponsored';
import ClubLeadership from '@/app/components/LeadershipTeam';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClubLeadership />
      <Features />
      <Sponsored />
    </main>
  );
}
