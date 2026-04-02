'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InvestorCTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.inv-reveal'), {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--darkest)', padding: '100px 0' }}>
      <div className="ieg-container">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
          <div>
            <span className="inv-reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>For Investors</span>
            <h2 className="inv-reveal display-lg" style={{ marginBottom: '20px' }}>
              Join the mission to make energy{' '}
              <span className="text-green-glow">independent.</span>
            </h2>
            <p className="inv-reveal body-lg" style={{ maxWidth: '460px', marginBottom: '32px' }}>
              A ₹34.8B addressable market growing at 26% CAGR. Patented IP with
              20-year protection. Production-ready technology. Products already shipping.
            </p>
            <div className="inv-reveal flex flex-wrap gap-4">
              <Link href="/investor" className="btn-primary">
                Investor Brief
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/contact" className="btn-secondary">Schedule a Meeting</Link>
            </div>
          </div>

          <div className="inv-reveal" style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { value: '₹34.8B', label: 'MARKET SIZE', sublabel: 'India Electric Vehicle Market 2024' },
              { value: '26%', label: 'CAGR', sublabel: 'Projected growth rate (MORDOR Intelligence)' },
              { value: '20yr', label: 'PATENT PROTECTION', sublabel: 'Exclusive rights until 2031' },
            ].map((m, i) => (
              <div key={m.label} style={{ padding: '28px 0', borderTop: '1px solid var(--border)' }}>
                <span style={{
                  fontFamily: 'var(--font-outfit)', fontWeight: 600,
                  fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1,
                  letterSpacing: '-0.02em',
                  color: i === 0 ? 'var(--green)' : i === 1 ? 'var(--amber)' : 'var(--text-1)',
                  display: 'block', marginBottom: '8px',
                }}>
                  {m.value}
                </span>
                <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>{m.label}</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}>
                  {m.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
