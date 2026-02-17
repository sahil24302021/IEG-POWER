import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEG | Internal Energy Generate",
  description: "Fuel-less, grid-independent power generation systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation Fixed at Top */}
        <Navbar />
        
        {/* Main Content */}
        {children}
        
        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}