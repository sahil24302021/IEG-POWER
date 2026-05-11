import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subsidiaries — Five Companies, One Energy Revolution',
  description: 'IEG operates across 5 verticals: Electric Vehicles, Home Appliances, Consumer Electronics, Commercial Power, and Motor Efficiency.',
};

export default function SubsidiariesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
