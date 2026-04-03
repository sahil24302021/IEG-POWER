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
      <div className="ieg-container" style={{ padding: 'clamp(40px, 8vw, 80px) 0 0' }}>
        {/* Top Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
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
              maxWidth: '280px',
              marginBottom: '20px',
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

          {/* Pages */}
          <div className="col-span-1">
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

          {/* Products */}
          <div className="col-span-1">
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

          {/* Locations */}
          <div className="col-span-2 lg:col-span-1">
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '4px' }}>
                  HQ & R&D
                </span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}>
                  {BRAND.hq}
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '4px' }}>
                  Manufacturing
                </span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}>
                  {BRAND.factory}
                </span>
              </div>
              <div style={{ marginTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="stat-pill" style={{ fontSize: '10px', padding: '5px 10px' }}>
                  Patent {BRAND.patent1.number}
                </span>
                <span className="stat-pill" style={{ fontSize: '10px', padding: '5px 10px' }}>
                  Patent {BRAND.patent2.number}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="orange-line" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <span style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '12px',
            color: 'var(--text-3)',
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
