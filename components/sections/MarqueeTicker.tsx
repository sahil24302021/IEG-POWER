'use client';

import { MARQUEE_TEXT } from '@/lib/constants';

export default function MarqueeTicker() {
  return (
    <section style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '14px 0',
      overflow: 'hidden',
    }}>
      <div className="marquee-track">
        {/* Duplicate text for seamless loop */}
        {[0, 1].map((i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '0.08em',
            color: 'var(--orange)',
            whiteSpace: 'nowrap',
            paddingRight: '0',
          }}>
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </section>
  );
}
