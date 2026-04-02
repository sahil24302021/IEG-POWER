'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '₹0/kWh', label: 'Fuel Cost', note: 'Zero fuel dependency' },
  { value: '4.5× more', label: 'Efficiency', note: 'vs solar panels' },
  { value: '87% lower', label: 'Operating Cost', note: 'for 2-wheelers' },
  { value: '21 months', label: 'Payback Period', note: 'full ROI recovery' },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.stat-item'), {
      y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--surface)', padding: '56px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="ieg-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item" style={{ padding: '16px 0' }}>
              <span className="mono-label" style={{ display: 'block', marginBottom: '12px' }}>{s.label}</span>
              <span style={{
                fontFamily: 'var(--font-outfit)', fontWeight: 600,
                fontSize: '24px', letterSpacing: '-0.01em',
                color: 'var(--text-1)', display: 'block', marginBottom: '6px',
              }}>
                {s.value}
              </span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}>
                {s.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
