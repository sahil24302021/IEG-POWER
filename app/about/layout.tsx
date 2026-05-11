import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — 30 Years In The Making',
  description: 'The story of IEG Auto Powers Ltd. Founded by inventor Ajay Choudhary, 30+ years of R&D, recognized by Dr. APJ Abdul Kalam and IIM Nagpur.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
