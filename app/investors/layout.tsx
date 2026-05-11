import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investors — Invest In The Future of Energy',
  description: 'Invest in IEG Auto Powers Ltd. India EV market: $34.8B (2024) → $110.7B (2029), 26.05% CAGR. Patented technology, proven prototypes.',
};

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
