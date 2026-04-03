import HeroSection from '@/components/sections/HeroSection';
import MarqueeTicker from '@/components/sections/MarqueeTicker';
import WhyIEGSection from '@/components/sections/WhyIEGSection';
import TechTeaser from '@/components/sections/TechTeaser';
import StatsCounterSection from '@/components/sections/StatsCounterSection';
import ProductsSection from '@/components/sections/ProductsSection';
import SubsidiariesPreview from '@/components/sections/SubsidiariesPreview';
import RecognitionSection from '@/components/sections/RecognitionSection';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <main>
      {/* HERO — Deep Space Black, Three.js Energy Orb */}
      <HeroSection />

      {/* MARQUEE — Patent numbers, key claims, orange ticker */}
      <MarqueeTicker />

      {/* WHY IEG — 4 icon cards: No Charging, Zero Carbon, Unlimited Range, 4.5× */}
      <WhyIEGSection />

      {/* TECH TEASER — Split: animated IEG loop diagram + How It Works copy */}
      <TechTeaser />

      {/* STATS — 4 massive animated counters: 1993, 2, 5, 120 */}
      <StatsCounterSection />

      {/* PRODUCTS — 5 glass cards with 3D tilt hover */}
      <ProductsSection />

      {/* SUBSIDIARIES — "5 Companies. One Vision." overview */}
      <SubsidiariesPreview />

      {/* RECOGNITION — Dr. APJ Abdul Kalam + IIM Nagpur */}
      <RecognitionSection />

      {/* CTA — "Ready to Power the Future?" */}
      <CTABanner />
    </main>
  );
}