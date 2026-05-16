import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invest in IEG Auto Powers — Clean Energy Investment Opportunity India',
  description: 'Invest in IEG Auto Powers Ltd — India EV market projected $34.8B (2024) to $110.7B (2029) at 26.05% CAGR. Patented technology, proven prototypes, 5 subsidiary companies. Early-stage clean energy investment opportunity.',
  keywords: 'invest IEG, IEG investment, clean energy investment India, EV market India, green energy startup invest, IEG Auto Powers shares, energy technology investment, startup investment Mumbai, sustainable energy invest',
};

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
