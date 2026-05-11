import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LenisProvider from "@/components/layout/LenisProvider";
import LoadingScreen from "@/components/layout/LoadingScreen";


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
  themeColor: '#050A12',
};

export const metadata: Metadata = {
  title: {
    default: "IEG Auto Powers Ltd — The Power Within | Patented Clean Energy Technology",
    template: "%s | IEG Auto Powers Ltd",
  },
  description: "IEG Auto Powers Ltd: Patented self-sustaining energy systems (Patent No. 391051 & 557845). Zero fuel, zero grid, zero emissions. 30+ years of R&D.",
  keywords: "IEG, Internal Energy Generate, clean energy, patent 391051, self-sustaining power, electric vehicle charger, IEG Auto Powers, renewable energy India, zero emission technology",
  metadataBase: new URL('https://ieg-power.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ieg-power.vercel.app',
    siteName: 'IEG Auto Powers Ltd',
    title: 'IEG Auto Powers Ltd — The Power Within',
    description: 'Patented self-sustaining energy systems. Zero fuel, zero grid, zero emissions.',
    images: [
      {
        url: '/ieg-logo.png',
        width: 512,
        height: 512,
        alt: 'IEG Auto Powers Ltd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IEG Auto Powers Ltd — The Power Within',
    description: 'Patented self-sustaining energy systems. Zero fuel, zero grid, zero emissions.',
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
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
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