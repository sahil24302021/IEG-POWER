import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Let\'s Build A Cleaner Future Together',
  description: 'Contact IEG Auto Powers Ltd for investment, product demos, or partnerships. Phone: +91 76000 13556. HQ: Dahisar East, Mumbai.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
