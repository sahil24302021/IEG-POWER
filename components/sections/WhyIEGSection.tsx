'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY_IEG } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const ICONS = [
  <svg key="a" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg key="b" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B7340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22c3.3-3.3 6-8 6-15a12 12 0 0112 12c-7 0-11.7 2.7-15 3z"/><path d="M2 22L12 12"/></svg>,
  <svg key="c" width="32" height="28" viewBox="0 0 36 24" fill="none" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round"><path d="M18 12c0-4 3-6 6-6s6 2 6 6-3 6-6 6-6-2-6-6z"/><path d="M18 12c0 4-3 6-6 6s-6-2-6-6 3-6 6-6 6 2 6 6z"/></svg>,
  <svg key="d" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
];

export default function WhyIEGSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current!.querySelectorAll('.why-heading'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      ref.current!.querySelectorAll('.why-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 80, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, delay: i * 0.12, ease: 'power4.out',
            scrollTrigger: {
              trigger: ref.current!.querySelector('.why-grid'),
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-pad relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-glow-left" />

      <div className="ieg-container">
        <div className="text-center mb-16">
          <span className="why-heading section-label" style={{ display: 'block', marginBottom: '14px' }}>
            [ Why IEG ]
          </span>
          <h2 className="why-heading display-md">
            Energy <span className="gradient-text">Redefined</span>
          </h2>
        </div>

        <div className="why-grid grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_IEG.map((item, i) => (
            <div
              key={item.title}
              className="why-card glass-card hover-lift"
              style={{ padding: '40px 28px', textAlign: 'center' }}
            >
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '18px',
                  background: i % 2 === 0 ? 'rgba(247,148,29,0.06)' : 'rgba(27,115,64,0.06)',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(247,148,29,0.12)' : 'rgba(27,115,64,0.12)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 22px',
                  transition: 'all 0.4s ease',
                }}
              >
                {ICONS[i]}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '17px',
                color: 'var(--text-1)',
                marginBottom: '10px',
                lineHeight: 1.25,
              }}>
                {item.title}
              </h3>
              <p className="body-sm" style={{ fontSize: '13px', lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}