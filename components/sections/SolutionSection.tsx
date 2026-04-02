'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOOP_STEPS = [
  { num: '01', title: 'Battery activates motor', desc: 'Initial power from a standard battery activates the BLDC motor, beginning the cycle.' },
  { num: '02', title: 'Motor drives generator', desc: 'BLDC Motor drives the patented IEG MB Generator, producing more energy than consumed.' },
  { num: '03', title: 'Surplus recharges battery', desc: 'Excess energy routes through battery charger back to source — closing the regeneration loop.' },
  { num: '04', title: 'Continuous output delivered', desc: 'System delivers stable 240V/50Hz AC power continuously. Zero fuel. Zero grid dependency.' },
];

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.sol-reveal'), {
      y: 35, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} className="section-green relative overflow-hidden" style={{ padding: '100px 0' }}>
      <div className="ieg-container relative z-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-end mb-14">
          <div className="sol-reveal">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '16px' }}>
              The Solution
            </span>
            <h2 style={{
              fontFamily: 'var(--font-outfit)', fontWeight: 600,
              fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.15,
              letterSpacing: '-0.02em', color: 'white',
            }}>
              Self-sustaining electricity.{' '}
              <span style={{ fontWeight: 300, opacity: 0.5, fontStyle: 'italic' }}>Permanently.</span>
            </h2>
          </div>
          <div className="sol-reveal">
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
              IEG technology creates a closed-loop energy system. Once activated,
              the internal regeneration cycle produces more energy than it consumes.
            </p>
            <Link href="/technology" className="inline-flex items-center gap-2 mt-5" style={{
              fontFamily: 'var(--font-outfit)', fontWeight: 500, fontSize: '14px',
              color: 'white', borderBottom: '1px solid rgba(255,255,255,0.25)', paddingBottom: '4px',
            }}>
              Deep Dive Into The Science
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {LOOP_STEPS.map((step) => (
            <div key={step.num} className="sol-reveal" style={{
              display: 'grid', gridTemplateColumns: '36px 1fr', gap: '20px',
              padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.08)', alignItems: 'baseline',
            }}>
              <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '13px', color: 'rgba(255,255,255,0.2)' }}>
                {step.num}
              </span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500, fontSize: '17px', color: 'white', marginBottom: '6px' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: '440px' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="sol-reveal flex items-center gap-3 mt-6">
          <div style={{ height: '1px', flex: '1', maxWidth: '140px', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.3)', padding: '6px 14px',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px',
          }}>
            ↻ SELF-REGENERATING LOOP
          </span>
          <div style={{ height: '1px', flex: '1', maxWidth: '140px', background: 'rgba(255,255,255,0.08)' }} />
        </div>
      </div>
    </section>
  );
}
