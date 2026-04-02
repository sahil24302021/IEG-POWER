import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import TechnologySection from '@/components/sections/TechnologySection';
import ProductsSection from '@/components/sections/ProductsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ProofSection from '@/components/sections/ProofSection';
import InvestorCTA from '@/components/sections/InvestorCTA';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <ProductsSection />
      <ComparisonSection />
      <ProofSection />
      <InvestorCTA />
    </main>
  );
}