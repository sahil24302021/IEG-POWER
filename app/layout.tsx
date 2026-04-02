import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LenisProvider from "@/components/layout/LenisProvider";

export const metadata: Metadata = {
  title: "IEG Vidaka Powers Ltd — Generate Electricity Without Fuel",
  description:
    "Patented internal energy generation technology (Patent No. 391051). Continuous clean electricity without fuel, grid, or charging. E-Rickshaw, E-Scooty, Generator solutions.",
  keywords: [
    "IEG technology",
    "internal energy generation",
    "fuel-free electricity",
    "electric vehicle charger India",
    "clean energy patent",
    "Vidaka Powers",
    "self-charging generator",
    "grid-independent power",
  ],
  openGraph: {
    title: "IEG Vidaka — The Future of Energy Generation",
    description:
      "Patented fuel-free electricity. Zero emissions. 87% cost reduction.",
    type: "website",
    locale: "en_IN",
    url: "https://iegvidaka.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-carbon text-ieg-text antialiased overflow-x-hidden">
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