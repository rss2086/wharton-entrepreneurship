import HeroSection from '@/app/components/HeroSection';
import Header from '@/app/components/Header';
import Features from '@/app/components/Features';
import Sponsored from '@/app/components/Sponsored';
import ClubLeadership from '@/app/components/LeadershipTeam';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Header />
      <ClubLeadership />
      <Features />
      <Sponsored />
    </main>
  );
}
