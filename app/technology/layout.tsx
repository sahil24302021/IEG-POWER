import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IEG Technology — Patented Internal Energy Generation | Patent 391051 & 557845',
  description: 'How IEG patented internal energy regeneration technology works — 180% efficiency, zero fuel, zero emissions. Patent No. 391051 & 557845. Self-sustaining power generation using closed-loop feedback systems. No grid, no fuel, no pollution.',
  keywords: 'IEG technology, internal energy generation, patent 391051, patent 557845, self-sustaining power, fuelless technology, energy regeneration, closed loop energy, zero emission power, how IEG works, perpetual energy India',
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
