import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IEG Products — E-Rickshaw Charger, Battery Charger, Fuelless Generator, Electric Chullah',
  description: 'IEG Auto Powers products: Self-powered E-Rickshaw Charger, E-Scooty Charger, Battery Charger, Electric Chullah (cooking stove), and Fuelless Power Generator. Zero fuel, zero grid, zero emissions. Made in India.',
  keywords: 'IEG products, e-rickshaw charger, e-scooty charger, battery charger India, electric chullah, fuelless generator, self-powered charger, zero emission products, EV charger India, IEG generator, electric cooking stove',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
