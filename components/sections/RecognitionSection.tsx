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
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current!.querySelectorAll('.rec-heading'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
      ref.current!.querySelectorAll('.rec-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9, delay: i * 0.15, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-pad relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-glow-right" />
      <div className="ieg-container">
        <div className="text-center mb-16">
          <span className="rec-heading section-label" style={{ display: 'block', marginBottom: '14px' }}>
            [ Recognition ]
          </span>
          <h2 className="rec-heading display-md">
            Recognized By <span className="gradient-text">The Best</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {RECOGNITIONS.map((rec) => (
            <div key={rec.name} className="rec-card glass-card" style={{ padding: '44px 36px' }}>
              <div style={{
                fontSize: '56px',
                lineHeight: 1,
                color: 'var(--orange)',
                opacity: 0.12,
                fontFamily: 'var(--font-syne)',
                marginBottom: '-6px',
              }}>
                &ldquo;
              </div>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'var(--text-2)',
                marginBottom: '28px',
              }}>
                {rec.quote}
              </p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '18px' }}>
                <span style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: 'var(--text-1)',
                  display: 'block',
                  marginBottom: '4px',
                }}>
                  {rec.name}
                </span>
                <span className="body-sm">
                  {rec.title} · <span style={{ color: 'var(--orange)' }}>{rec.year}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
