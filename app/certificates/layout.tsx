import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificates — Verified, Patented, Recognized',
  description: 'Government-granted patents (391051, 557845), IIM Nagpur appreciation, Presidential recognition, and Certificate of Incorporation.',
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
