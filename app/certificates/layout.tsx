import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IEG Certificates — Patent 391051, Patent 557845, Government Recognized',
  description: 'IEG Auto Powers Ltd certificates: Government-granted patents (391051, 557845), IIM Nagpur appreciation, Presidential recognition by Dr. APJ Abdul Kalam, and Certificate of Incorporation (CIN: U35106MH2024PLC418794).',
  keywords: 'IEG patent, patent 391051, patent 557845, IEG certificates, IEG recognition, APJ Abdul Kalam IEG, IIM Nagpur IEG, IEG incorporation, clean energy patent India, energy patent certificate',
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
