import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology — The Science of Self-Sustaining Power',
  description: 'Learn how IEG patented internal energy regeneration technology works. 180% efficiency, zero fuel, zero emissions. Patent No. 391051 & 557845.',
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
