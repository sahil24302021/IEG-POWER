import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact IEG Auto Powers — Investment, Product Demo, Partnership',
  description: 'Contact IEG Auto Powers Ltd for investment opportunities, product demonstrations, or partnerships. Email: legautopowerltd@gmail.com. HQ: Dahisar East, Mumbai, Maharashtra, India. Patented clean energy technology company.',
  keywords: 'contact IEG, IEG Auto Powers email, IEG phone, IEG address, IEG Mumbai, invest in IEG, IEG partnership, IEG product demo, clean energy contact India',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
