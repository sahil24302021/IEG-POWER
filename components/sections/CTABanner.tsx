'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-title',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
      gsap.fromTo('.cta-sub',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
      gsap.fromTo('.cta-btn',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Gradient glows */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247,148,29,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        right: '-200px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27,115,64,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="grid-bg" />

      <div className="ieg-container relative z-10" style={{ padding: '80px 0' }}>
        <h2
          className="cta-title"
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 80px)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            marginBottom: '28px',
            opacity: 0,
          }}
        >
          Ready to Power<br />
          <span className="gradient-text">the Future?</span>
        </h2>

        <p
          className="cta-sub body-xl"
          style={{ maxWidth: '480px', margin: '0 auto 44px', opacity: 0 }}
        >
          Join the energy revolution. Partner with us to bring patented, 
          self-sustaining power to the world.
        </p>

        <div className="cta-btn" style={{ opacity: 0 }}>
          <Link href="/contact" className="btn-orange" style={{ fontSize: '16px', padding: '18px 40px' }}>
            Get In Touch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
