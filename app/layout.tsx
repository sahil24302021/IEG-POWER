import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LenisProvider from "@/components/layout/LenisProvider";
import LoadingScreen from "@/components/layout/LoadingScreen";
import CustomCursor from "@/components/layout/CustomCursor";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "IEG — The Power Within | Patented Clean Energy Technology",
  description: "IEG Vidaka Powers: Patented self-sustaining energy systems (Patent No. 391051 & 557845). Zero fuel, zero grid, zero emissions. 30+ years of R&D. The Tesla of Indian clean energy.",
  keywords: "IEG, Internal Energy Generate, clean energy, patent 391051, self-sustaining power, electric vehicle charger, IEG Vidaka",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="noise-overlay" style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}>
        <LoadingScreen />
        <CustomCursor />
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