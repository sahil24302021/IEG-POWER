import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import WhyIEGSection from '@/components/sections/WhyIEGSection';
import TechTeaser from '@/components/sections/TechTeaser';
import StatsCounterSection from '@/components/sections/StatsCounterSection';

import SubsidiariesPreview from '@/components/sections/SubsidiariesPreview';
import RecognitionSection from '@/components/sections/RecognitionSection';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'IEG Auto Powers Ltd — The Power Within | Patented Clean Energy Technology',
  description: 'IEG Auto Powers Ltd: Patented self-sustaining energy systems (Patent No. 391051 & 557845). Zero fuel, zero grid, zero emissions. 30+ years of R&D.',
};

export default function Home() {
  return (
    <main>
      {/* HERO — Deep Space Black, Three.js Energy Orb */}
      <HeroSection />

      {/* WHY IEG — 4 icon cards: No Charging, Zero Carbon, Unlimited Range, 4.5× */}
      <WhyIEGSection />

      {/* TECH TEASER — Split: animated IEG loop diagram + How It Works copy */}
      <TechTeaser />

      {/* STATS — 4 massive animated counters: 1993, 2, 5, 120 */}
      <StatsCounterSection />



      {/* SUBSIDIARIES — "5 Companies. One Vision." overview */}
      <SubsidiariesPreview />

      {/* RECOGNITION — Dr. APJ Abdul Kalam + IIM Nagpur */}
      <RecognitionSection />

      {/* CTA — "Ready to Power the Future?" */}
      <CTABanner />
    </main>
  );
}