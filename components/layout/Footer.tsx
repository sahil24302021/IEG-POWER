'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Band */}
      <div className="bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ieg-lime rounded-full blur-[150px]" />
        </div>
        <div className="ieg-container py-16 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                Ready to power the future?
              </h3>
              <p className="text-white/60 text-lg font-light">
                Connect with us for partnerships, investments, or inquiries.
              </p>
            </div>
            <Link href="/contact" className="btn-orange shrink-0">
              <Mail className="w-4 h-4" />
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-carbon text-ieg-text/80">
        <div className="ieg-container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-5">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10 shrink-0">
                  <Image src="/logo.png" alt="IEG" fill sizes="40px" className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-heading font-bold text-sm tracking-wide leading-none">IEG VIDAKA</span>
                  <span className="text-[9px] text-ieg-muted font-heading uppercase tracking-[0.2em] leading-none mt-0.5">Powers Ltd</span>
                </div>
              </Link>
              <p className="text-ieg-muted text-sm leading-relaxed">{BRAND.vision}</p>
              <div className="trust-badge">
                <span>{BRAND.patent}</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-ieg-muted hover:text-forest-light text-sm transition-colors inline-flex items-center gap-1 group">
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Headquarters */}
            <div>
              <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs mb-6">Headquarters</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-ieg-muted text-sm">
                  <MapPin className="w-4 h-4 text-forest-light mt-0.5 shrink-0" />
                  <span>{BRAND.hq}</span>
                </li>
                <li className="flex items-center gap-3 text-ieg-muted text-sm">
                  <Phone className="w-4 h-4 text-forest-light shrink-0" />
                  <span>{BRAND.phone}</span>
                </li>
                <li className="flex items-center gap-3 text-ieg-muted text-sm">
                  <Mail className="w-4 h-4 text-forest-light shrink-0" />
                  <span>{BRAND.email}</span>
                </li>
              </ul>
            </div>

            {/* Manufacturing + Newsletter */}
            <div>
              <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs mb-6">Manufacturing</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-ieg-muted text-sm">
                  <MapPin className="w-4 h-4 text-ieg-orange mt-0.5 shrink-0" />
                  <span>{BRAND.factory}</span>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs mb-4">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-ieg-muted/50 focus:outline-none focus:border-forest-light/50 transition-colors"
                  />
                  <button className="bg-forest hover:bg-forest-light text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/[0.04] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ieg-muted/50 text-xs font-heading">
              © {currentYear} {BRAND.name}. All rights reserved. {BRAND.patent}.
            </p>
            <div className="flex gap-6 text-ieg-muted/50 text-xs font-heading uppercase tracking-wider">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
