import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import TechnologySection from '@/components/sections/TechnologySection';
import ProductsSection from '@/components/sections/ProductsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProofSection from '@/components/sections/ProofSection';
import InvestorCTA from '@/components/sections/InvestorCTA';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <main>
      {/* HERO — var(--black) */}
      <HeroSection />

      {/* STATS — var(--black), seamless continuation */}
      <StatsSection />

      {/* PROBLEM — var(--cream), sharp light break */}
      <ProblemSection />

      {/* SOLUTION — #1A6B3C, deep forest green */}
      <SolutionSection />

      {/* TECHNOLOGY — var(--cream), back to light */}
      <TechnologySection />

      {/* PRODUCTS — var(--black), dark luxury */}
      <ProductsSection />

      {/* COMPARISON — var(--black), seamless */}
      <ComparisonSection />

      {/* TIMELINE — var(--black), pinned horizontal */}
      <TimelineSection />

      {/* PATENT/PROOF — var(--surface) */}
      <ProofSection />

      {/* INVESTOR CTA — darkest dark */}
      <InvestorCTA />

      {/* CTA BANNER — green bookend */}
      <CTABanner />
    </main>
  );
}