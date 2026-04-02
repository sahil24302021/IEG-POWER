'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, BRAND } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}>
      <div className="ieg-container" style={{ padding: '80px 0 40px' }}>
        {/* Top — Brand + Newsletter */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="IEG" fill sizes="32px" className="object-contain" />
              </div>
              <span style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 600,
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
              maxWidth: '400px',
              marginBottom: '24px',
            }}>
              Patented internal energy generation technology. Clean, continuous electricity
              without fuel. Thirty years of R&D. Two government patents. One mission.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-2)',
              }}>
                {BRAND.phone}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-2)',
              }}>
                {BRAND.email}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-3)',
              }}>
                {BRAND.hq}
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <span style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 600,
              fontSize: '16px',
              color: 'var(--text-1)',
              display: 'block',
              marginBottom: '8px',
            }}>
              Stay updated
            </span>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              color: 'var(--text-3)',
              marginBottom: '16px',
            }}>
              Get product launches, investor updates, and technology news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="newsletter-input"
                style={{ flex: 1 }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ fontSize: '13px', padding: '12px 20px', flexShrink: 0 }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Navigation links */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '16px', fontSize: '10px' }}>
              Navigation
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      color: 'var(--text-3)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-1)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-3)';
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '16px', fontSize: '10px' }}>
              Products
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['E-Rickshaw Charger', 'E-Scooty Charger', 'Power Generator', 'Electric Chula', 'Battery Charger'].map((p) => (
                <li key={p}>
                  <span style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: 'var(--text-3)',
                  }}>
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '16px', fontSize: '10px' }}>
              Legal
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-3)' }}>Privacy Policy</span></li>
              <li><span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-3)' }}>Terms of Use</span></li>
              <li><span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-3)' }}>{BRAND.patent}</span></li>
            </ul>
          </div>

          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '16px', fontSize: '10px' }}>
              Locations
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}>
                  <span style={{ display: 'block', color: 'var(--text-2)', fontSize: '14px' }}>Head Office</span>
                  {BRAND.hq}
                </span>
              </li>
              <li>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}>
                  <span style={{ display: 'block', color: 'var(--text-2)', fontSize: '14px' }}>Factory</span>
                  {BRAND.factory}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-3)',
            letterSpacing: '0.05em',
          }}>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-3)',
            letterSpacing: '0.05em',
          }}>
            CIN: U31909MH2024PLC423498
          </p>
        </div>
      </div>
    </footer>
  );
}
