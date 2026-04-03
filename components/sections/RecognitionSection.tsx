'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RECOGNITIONS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function RecognitionSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.rec-card'), {
      y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div className="ieg-container">
        <div className="text-center mb-16">
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>Recognition</span>
          <h2 className="display-lg">Recognized By <span className="text-orange">The Best</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {RECOGNITIONS.map((rec) => (
            <div key={rec.name} className="rec-card glass-card" style={{ padding: '40px 32px' }}>
              {/* Large quote mark */}
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '64px',
                lineHeight: 1,
                color: 'var(--orange)',
                opacity: 0.2,
                marginBottom: '-20px',
              }}>
                &ldquo;
              </div>

              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'var(--text-2)',
                marginBottom: '24px',
              }}>
                {rec.quote}
              </p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                <span style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: 'var(--text-1)',
                  display: 'block',
                  marginBottom: '2px',
                }}>
                  {rec.name}
                </span>
                <span className="body-sm">{rec.title}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--orange)',
                  marginLeft: '12px',
                }}>
                  {rec.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
