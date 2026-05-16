import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IEG Subsidiaries — Electric Vehicles, Home Appliances, Power Solutions',
  description: 'IEG operates 5 subsidiary companies: IEG Electric Vehicles, IEG Home Appliances, IEG Consumer Electronics, IEG Commercial Power Systems, and IEG Motor Efficiency. One energy revolution across multiple verticals.',
  keywords: 'IEG subsidiaries, IEG electric vehicles, IEG home appliances, IEG consumer electronics, IEG commercial power, IEG motor efficiency, IEG companies, IEG group, clean energy companies India',
};

export default function SubsidiariesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
