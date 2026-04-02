'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  { year: '1993', title: 'Research Begins', desc: 'Ajay Choudhary begins independent research into internal energy generation systems.', accent: false },
  { year: '2003', title: 'Breakthrough', desc: 'First self-charging generator created. Technology presented to Dr. APJ Abdul Kalam, 11th President of India.', accent: false },
  { year: '2011', title: 'Patent Filed', desc: 'Working IEG prototype developed. Patent application No. 391051 filed with the Indian Patent Office.', accent: false },
  { year: '2022', title: 'Patent Granted', desc: 'Indian Patent No. 391051 officially granted by the Controller General of Patents. 20-year protection secured.', accent: true },
  { year: '2024', title: 'Company Incorporated', desc: 'IEG Vidaka Powers Ltd. incorporated on February 8, 2024. Production facility established in Vapi, Gujarat.', accent: false },
  { year: 'Now', title: 'Products Shipping', desc: 'E-Rickshaw and E-Scooty chargers in production. Power generator and Electric Chula entering market.', accent: false },
];

export default function TimelineSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.tl-item'), {
      y: 30, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--black)', padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="ieg-container">
        <div className="tl-item mb-12">
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>The Journey</span>
          <h2 className="display-lg">
            30+ years to <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--text-2)' }}>this moment.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MILESTONES.map((m) => (
            <div key={m.year} className="tl-item" style={{
              background: m.accent ? 'var(--green-deep)' : 'var(--surface)',
              border: `1px solid ${m.accent ? 'var(--green-dim)' : 'var(--border)'}`,
              borderRadius: '10px', padding: '24px',
            }}>
              <span style={{
                fontFamily: 'var(--font-outfit)', fontWeight: 600,
                fontSize: m.accent ? '32px' : '26px', lineHeight: 1,
                letterSpacing: '-0.02em', color: m.accent ? 'var(--green)' : 'var(--text-3)',
                display: 'block', marginBottom: '12px',
              }}>
                {m.year}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-outfit)', fontWeight: 500,
                fontSize: '17px', color: m.accent ? 'white' : 'var(--text-1)', marginBottom: '8px',
              }}>
                {m.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-dm-sans)', fontSize: '14px', lineHeight: 1.6,
                color: m.accent ? 'rgba(255,255,255,0.55)' : 'var(--text-2)',
              }}>
                {m.desc}
              </p>
              {m.accent && (
                <div style={{
                  marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '6px 12px', background: 'rgba(34,197,94,0.12)', borderRadius: '4px',
                }}>
                  <span style={{ fontSize: '14px' }}>🛡️</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: 'var(--green)' }}>
                    PATENT NO. 391051
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
