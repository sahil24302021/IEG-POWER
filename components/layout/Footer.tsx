'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const productLinks = [
    { name: 'E-Rickshaw Charger', href: '/products' },
    { name: 'E-Scooty Charger', href: '/products' },
    { name: 'Battery Charger', href: '/products' },
    { name: 'Electric Chullah', href: '/products' },
    { name: 'Power Generator', href: '/products' },
  ];

  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      {/*
        BUG FIX: The original `padding: 'clamp(40px, 8vw, 80px) 0 0'` shorthand
        was zeroing out left & right padding on .ieg-container, making mobile content
        go edge-to-edge. Now using paddingTop only so class side-padding is preserved.
      */}
      <div
        className="ieg-container"
        style={{ paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 0 }}
      >
        {/* Top Grid: 1 col mobile → 2 col sm (640px+) → 4 col lg (1024px+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-14">

          {/* Brand — spans 2 cols on sm so it's above the 2-col nav/product links */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="IEG" fill sizes="32px" className="object-contain" />
              </div>
              <span style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: '16px',
                color: 'var(--text-1)',
              }}>
                IEG Vidaka Powers
              </span>
            </Link>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'var(--text-3)',
              maxWidth: '340px',
              marginBottom: '18px',
            }}>
              Patented internal energy generation technology. Clean, continuous
              electricity without fuel. Thirty years of R&D. Two government patents.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-3)', letterSpacing: '0.05em' }}>
                {BRAND.phone}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-3)', letterSpacing: '0.05em' }}>
                {BRAND.email}
              </span>
            </div>
          </div>

          {/* Company links */}
          <div>
            <span style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '14px',
              color: 'var(--text-1)',
              display: 'block',
              marginBottom: '16px',
            }}>
              Company
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.filter(l => l.name !== 'Home').map((link) => (
                <Link key={link.name} href={link.href} style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: 'var(--text-3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products links */}
          <div>
            <span style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '14px',
              color: 'var(--text-1)',
              display: 'block',
              marginBottom: '16px',
            }}>
              Products
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {productLinks.map((link) => (
                <Link key={link.name} href={link.href} style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: 'var(--text-3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations — spans 2 cols on sm for breathing room */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '14px',
              color: 'var(--text-1)',
              display: 'block',
              marginBottom: '16px',
            }}>
              Locations
            </span>
            {/* On sm+, show HQ and Manufacturing side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4" style={{ marginBottom: '16px' }}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--orange)',
                  letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  display: 'block', marginBottom: '4px',
                }}>
                  HQ & R&D
                </span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}>
                  {BRAND.hq}
                </span>
              </div>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--orange)',
                  letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  display: 'block', marginBottom: '4px',
                }}>
                  Manufacturing
                </span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}>
                  {BRAND.factory}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="stat-pill" style={{ fontSize: '10px', padding: '5px 10px' }}>
                Patent {BRAND.patent1.number}
              </span>
              <span className="stat-pill" style={{ fontSize: '10px', padding: '5px 10px' }}>
                Patent {BRAND.patent2.number}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="orange-line" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-5">
          <span style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '12px',
            color: 'var(--text-3)',
            textAlign: 'center',
          }}>
            © 2025 IEG Vidaka Powers Limited. All Rights Reserved.
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-3)',
            letterSpacing: '0.08em',
          }}>
            CIN: {BRAND.cin}
          </span>
        </div>
      </div>
    </footer>
  );
}