'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProofSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.proof-reveal'), {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--surface)',
        padding: '80px 0',
      }}
    >
      <div className="ieg-container">
        {/* Header */}
        <div className="proof-reveal mb-12">
          <span className="section-label" style={{ display: 'block', marginBottom: '14px' }}>
            Intellectual Property
          </span>
          <h2 className="display-lg">
            Protected{' '}
            <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--text-2)' }}>
              by law.
            </span>
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Patent certificate image */}
          <div className="proof-reveal">
            <div
              className="patent-tilt"
              style={{
                position: 'relative',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '3/4',
              }}
            >
              <Image
                src="/assets/pdf_page10_img1.png"
                alt="Patent Certificate No. 391051 — Government of India"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ padding: '16px' }}
              />
              {/* Overlay badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  background: 'rgba(6,10,6,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '18px' }}>🛡️</span>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: 'var(--text-1)',
                    display: 'block',
                  }}>
                    Patent No. 391051
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--text-3)',
                    letterSpacing: '0.05em',
                  }}>
                    Government of India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Details */}
          <div className="proof-reveal">
            {/* Primary patent */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(34,197,94,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                }}>
                  🛡️
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--green)',
                    display: 'block',
                  }}>
                    Granted 2022
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: '17px',
                    color: 'var(--text-1)',
                  }}>
                    Internal Energy Generating System
                  </span>
                </div>
              </div>

              {/* Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  ['Patent No.', '391051'],
                  ['Filed', 'December 13, 2011'],
                  ['Protection', '20 years'],
                  ['Authority', 'Controller General of Patents, India'],
                  ['Inventor', 'Ajay Choudhary'],
                ].map(([k, v]) => (
                  <div key={k} style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-3)',
                      letterSpacing: '0.06em',
                      width: '100px',
                      flexShrink: 0,
                    }}>
                      {k}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      color: 'var(--text-1)',
                    }}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary patent */}
            <div
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '32px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--amber)',
                }}>
                  📄 2nd Patent — Granted 2025
                </span>
              </div>
              <span style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 600,
                fontSize: '15px',
                color: 'var(--text-1)',
                display: 'block',
                marginBottom: '8px',
              }}>
                Regeneration of Internal Energy
              </span>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '13px',
                lineHeight: 1.7,
                color: 'var(--text-2)',
              }}>
                Advanced regeneration protocol patent, extending the core IP to cover
                next-generation energy recovery methods.
              </p>
            </div>

            {/* IIM Validation */}
            <div
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px' }}>🎓</span>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--amber)',
                    display: 'block',
                  }}>
                    Validated
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: 'var(--text-1)',
                  }}>
                    IIM Nagpur
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Technical viability confirmed', 'Commercial potential validated', 'Market readiness assessed'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'rgba(34,197,94,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span style={{ color: 'var(--green)', fontSize: '10px' }}>✓</span>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      color: 'var(--text-1)',
                    }}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '12px',
                fontStyle: 'italic',
                color: 'var(--text-3)',
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border)',
              }}>
                Presented to Dr. APJ Abdul Kalam, 11th President of India, in 2003.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
