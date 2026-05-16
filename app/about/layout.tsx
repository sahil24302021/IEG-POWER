import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About IEG Auto Powers Ltd — Founded by Ajay Choudhary | 30+ Years R&D',
  description: 'About IEG Auto Powers Ltd — Founded by inventor Ajay Choudhary with 30+ years of R&D in clean energy. Recognized by Dr. APJ Abdul Kalam and IIM Nagpur. CIN: U35106MH2024PLC418794. Headquarters: Dahisar East, Mumbai, Maharashtra, India.',
  keywords: 'Ajay Choudhary, IEG founder, IEG Auto Powers history, clean energy inventor India, APJ Abdul Kalam recognition, IIM Nagpur appreciation, IEG company profile, energy startup Mumbai',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
