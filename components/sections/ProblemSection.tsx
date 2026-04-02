'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  { stat: '₹110', unit: '/litre', title: 'Fuel costs keep climbing', desc: 'Petrol prices have risen 40% in the last decade. Entire economies are hostage to fossil fuel markets.' },
  { stat: '240M', unit: '+', title: 'Without reliable power', desc: 'Millions of Indian households lack consistent electricity. Rural electrification targets are decades behind.' },
  { stat: '2.9', unit: 'Gt', title: 'Annual CO₂ emissions', desc: 'India\'s energy sector is the third-largest emitter globally. The environmental cost compounds daily.' },
];

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.problem-reveal'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} className="section-light relative" style={{ padding: '100px 0' }}>
      <div className="ieg-container">
        <div className="problem-reveal mb-14">
          <span className="section-label-dark" style={{ display: 'block', marginBottom: '16px' }}>The Problem</span>
          <h2 className="display-lg" style={{ color: '#080C08', maxWidth: '480px' }}>
            The world runs on a <span style={{ color: 'var(--coral)' }}>broken</span> energy system.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PROBLEMS.map((p) => (
            <div key={p.title} className="problem-reveal" style={{
              display: 'grid', gridTemplateColumns: '140px 1fr', gap: '32px',
              alignItems: 'baseline', padding: '32px 0', borderTop: '1px solid rgba(8,12,8,0.08)',
            }}>
              <div>
                <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '36px', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--coral)' }}>
                  {p.stat}
                </span>
                <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 300, fontSize: '18px', color: 'rgba(239,68,68,0.4)' }}>
                  {p.unit}
                </span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '18px', color: '#080C08', marginBottom: '6px' }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', lineHeight: 1.7, color: 'rgba(8,12,8,0.5)', maxWidth: '440px' }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
