'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SUBSIDIARIES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function SubsidiariesPreview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.sub-item'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="ieg-container">
        <div className="text-center mb-16">
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>Subsidiaries</span>
          <h2 className="display-lg">5 Companies. <span className="text-orange">One Vision.</span></h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {SUBSIDIARIES.map((sub) => (
            <div key={sub.number} className="sub-item glass-card" style={{ padding: '28px 20px', textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: '40px',
                color: 'var(--orange)',
                opacity: 0.2,
                lineHeight: 1,
                marginBottom: '12px',
              }}>
                {sub.number}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--text-1)',
                marginBottom: '4px',
              }}>
                {sub.name}
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text-3)',
                letterSpacing: '0.06em',
              }}>
                {sub.segment}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/subsidiaries" className="btn-sm">
            Explore Subsidiaries
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
