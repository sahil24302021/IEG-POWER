import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LenisProvider from "@/components/layout/LenisProvider";
import LoadingScreen from "@/components/layout/LoadingScreen";
import SkipToContent from "@/components/layout/SkipToContent";


const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#0B1526',
};

export const metadata: Metadata = {
  title: {
    default: "IEG Auto Powers Ltd — The Power Within | Patented Clean Energy Technology",
    template: "%s | IEG Auto Powers Ltd",
  },
  description: "IEG Auto Powers Ltd — Patented internal energy generation technology (Patent No. 391051 & 557845). Self-sustaining power systems: E-Rickshaw Charger, Battery Charger, Fuelless Generator, Electric Chullah. Zero fuel, zero grid, zero emissions. 30+ years of R&D. Founded by inventor Ajay Choudhary. CIN: U35106MH2024PLC418794. HQ: Mumbai, India.",
  keywords: [
    'IEG', 'IEG Auto Powers', 'IEG Auto Powers Ltd', 'IEG Auto Power',
    'Internal Energy Generate', 'internal energy generation',
    'self-sustaining power', 'self-sustaining energy system',
    'clean energy India', 'renewable energy India', 'green energy startup India',
    'patent 391051', 'patent 557845', 'patented energy technology',
    'e-rickshaw charger', 'electric rickshaw charger', 'self powered e-rickshaw',
    'battery charger', 'fuelless generator', 'fuelless power station',
    'electric chullah', 'electric cooking stove India',
    'zero emission technology', 'zero fuel generator',
    'Ajay Choudhary inventor', 'Ajay Choudhary IEG',
    'clean energy company Mumbai', 'EV charger India',
    'IEG products', 'IEG energy', 'IEG power',
    'sustainable energy solutions India', 'off-grid power system',
  ].join(', '),
  metadataBase: new URL('https://iegautopower.com'),
  alternates: {
    canonical: 'https://iegautopower.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://iegautopower.com',
    siteName: 'IEG Auto Powers Ltd',
    title: 'IEG Auto Powers Ltd — Patented Self-Sustaining Energy Technology',
    description: 'Patented internal energy generation: E-Rickshaw Charger, Fuelless Generator, Battery Charger. Zero fuel, zero grid. 30+ years R&D. Mumbai, India.',
    images: [
      {
        url: '/ieg-logo.png',
        width: 512,
        height: 512,
        alt: 'IEG Auto Powers Ltd Logo — Patented Clean Energy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IEG Auto Powers Ltd — The Power Within',
    description: 'Patented self-sustaining energy systems. E-Rickshaw Charger, Fuelless Generator, Battery Charger. Zero fuel, zero emissions.',
    images: ['/ieg-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Clean Energy Technology',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'google-site-verification': '', // Add your Google Search Console verification code here
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

// JSON-LD Organization structured data for Google rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IEG Auto Powers Ltd',
  alternateName: ['IEG', 'IEG Auto Power', 'Internal Energy Generate'],
  url: 'https://iegautopower.com',
  logo: 'https://iegautopower.com/ieg-logo.png',
  description: 'Patented internal energy generation technology. Self-sustaining power systems with zero fuel, zero grid, zero emissions. 30+ years of R&D.',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Ajay Choudhary',
    jobTitle: 'Founder & Managing Director',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dahisar East, Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'legautopowerltd@gmail.com',
    contactType: 'customer service',
  },
  sameAs: [],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '50+' },
  keywords: 'IEG, Internal Energy Generate, clean energy, self-sustaining power, e-rickshaw charger, battery charger, fuelless generator, patent 391051, patent 557845',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      {/*
        FIX: Removed inline `style={{ fontFamily: ... }}` from <body> — it caused a React
        hydration mismatch because the server renders `fontFamily: "var(...)"` with double quotes
        while the client renders single quotes. Font family is now set in globals.css body rule.
        suppressHydrationWarning is added as an extra safeguard.
      */}
      <body className="noise-overlay" suppressHydrationWarning>
        {/* JSON-LD structured data for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipToContent />
        <LoadingScreen />

        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}