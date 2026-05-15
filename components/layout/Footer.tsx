'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      paddingTop: 'clamp(40px, 6vw, 80px)',
      paddingBottom: '24px',
    }}>
      <div className="ieg-container">
        {/* Top section: Brand left, Company + Locations right */}
        <div className="footer-grid" style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>

          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-[48px] h-[48px]">
                <Image src="/ieg-logo.png" alt="IEG" fill sizes="48px" className="object-contain" loading="lazy" />
              </div>
              <span className="footer-brand-name">IEG Auto Powers Ltd</span>
            </Link>
            <p className="footer-desc">
              Patented internal energy generation technology. Clean, continuous
              electricity without fuel. Thirty years of R&D. Two government patents.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <a href={`mailto:${BRAND.email}`} className="footer-contact" style={{ textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                ✉ {BRAND.email}
              </a>
            </div>
          </div>

          {/* Right columns wrapper */}
          <div className="footer-right">
            {/* Company links */}
            <div>
              <span className="footer-heading">Company</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {NAV_LINKS.filter(l => l.name !== 'Home').map((link) => (
                  <Link key={link.name} href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <span className="footer-heading">Locations</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <span className="footer-location-label">HQ & R&D</span>
                  <span className="footer-location-value">{BRAND.hq}</span>
                </div>
                <div>
                  <span className="footer-location-label">Manufacturing</span>
                  <span className="footer-location-value">{BRAND.factory}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="stat-pill" style={{ fontSize: '10px', padding: '5px 10px' }}>
                  Patent {BRAND.patent1.number}
                </span>
                <span className="stat-pill" style={{ fontSize: '10px', padding: '5px 10px' }}>
                  Patent {BRAND.patent2.number}
                </span>
                <span className="stat-pill" style={{ fontSize: '10px', padding: '5px 10px' }}>
                  Application 202631019343
                </span>
                <span className="stat-pill" style={{ fontSize: '10px', padding: '5px 10px' }}>
                  Application 202631015926
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="orange-line" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-5">
          <span className="footer-copyright">
            © 2025 IEG Auto Powers Limited. All Rights Reserved.
          </span>
          <span className="footer-cin">
            CIN: {BRAND.cin}
          </span>
        </div>
      </div>
    </footer>
  );
}