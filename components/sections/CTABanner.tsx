'use client';

import Link from 'next/link';

export default function CTABanner() {
  return (
    <section style={{ background: 'var(--green-deep)', padding: '80px 0' }}>
      <div className="ieg-container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div>
          <h3 style={{
            fontFamily: 'var(--font-outfit)', fontWeight: 600,
            fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.15,
            letterSpacing: '-0.02em', color: 'white', marginBottom: '8px',
          }}>
            Build the future of energy.
          </h3>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}>
            With us.
          </p>
        </div>
        <Link href="/contact" style={{
          fontFamily: 'var(--font-outfit)', fontWeight: 500, fontSize: '15px',
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 28px', borderRadius: '6px', background: 'white',
          color: 'var(--green-deep)', transition: 'all 0.2s ease',
          textDecoration: 'none', flexShrink: 0,
        }}>
          Get in Touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  );
}
