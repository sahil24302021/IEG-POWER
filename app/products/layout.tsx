import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products — Built For A Fossil-Free World',
  description: 'IEG products: E-Rickshaw Charger, E-Scooty Charger, Battery Charger, Electric Chullah, Power Generator. Self-powered, zero emissions.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
