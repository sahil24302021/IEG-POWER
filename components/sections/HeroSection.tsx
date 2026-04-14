'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';
import MarqueeTicker from '@/components/sections/MarqueeTicker';
import IEGFlowDiagram from '@/components/ui/IEGFlowDiagram';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo('.hero-label', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });
      
      tl.fromTo('.hero-title-line', 
        { y: 50, opacity: 0, filter: 'blur(4px)' }, 
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, stagger: 0.1, ease: 'power4.out' }, 
        '-=0.3'
      );
      
      tl.fromTo('.hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.3');
      tl.fromTo('.hero-ctas', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.25');
      tl.fromTo('.hero-pills > *', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power2.out' }, '-=0.2');
      
      // Diagram — slides from right on desktop, fades up on mobile
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        tl.fromTo('.hero-loop-container', 
          { x: 80, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 
          '-=1.0'
        );
      });
      mm.add('(max-width: 1023px)', () => {
        tl.fromTo('.hero-loop-container', 
          { y: 30, opacity: 0, scale: 0.95 }, 
          { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' }, 
          '-=0.6'
        );
      });
      
      tl.fromTo('.scroll-indicator', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.3');
      tl.fromTo('.hero-ticker', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5');
      
      // Parallax (desktop only)
      mm.add('(min-width: 1024px)', () => {
        gsap.to('.hero-text-col', {
          y: -50, ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: '60% top', scrub: 1.5 },
        });
        gsap.to('.hero-loop-container', {
          y: -25, ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: '60% top', scrub: 1.5 },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <GradientMesh />
      <div className="grid-bg" />

      {/* Orange glow — visible on all screens */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'clamp(350px, 80vw, 900px)',
        height: 'clamp(350px, 80vw, 900px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247,148,29,0.08) 0%, rgba(247,148,29,0.02) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Green glow */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: 'clamp(200px, 40vw, 500px)',
        height: 'clamp(200px, 40vw, 500px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27,115,64,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div
        className="ieg-container relative z-10 w-full"
        style={{ paddingTop: 'clamp(100px, 15vh, 140px)', paddingBottom: 'clamp(120px, 20vh, 200px)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">

          {/* LEFT copy */}
          <div className="hero-text-col text-center lg:text-left">
            <div className="hero-label flex items-center justify-center lg:justify-start gap-3 mb-5 lg:mb-7" style={{ opacity: 0 }}>
              <span className="tag orbit-badge">Patented Clean Energy</span>
            </div>
            <div style={{ marginBottom: 'clamp(20px, 3vw, 28px)' }}>
              <h1>
                <span className="hero-title-line block" style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 700,
                  fontSize: 'clamp(32px, 8vw, 56px)', lineHeight: 1.08,
                  letterSpacing: '-0.03em', color: 'var(--text-1)', opacity: 0,
                }}>The Power</span>
                <span className="hero-title-line block gradient-text" style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 700,
                  fontSize: 'clamp(32px, 8vw, 56px)', lineHeight: 1.08,
                  letterSpacing: '-0.03em', opacity: 0,
                }}>Within.</span>
              </h1>
            </div>
            <p className="hero-sub" style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.7,
              color: 'var(--text-2)',
              maxWidth: '480px',
              margin: '0 auto 0 auto',
              marginBottom: 'clamp(28px, 4vw, 36px)',
              opacity: 0,
            }}>
              Self-sustaining, zero-emission energy systems. No grid. No fuel. No limits.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-8 lg:mb-10" style={{ opacity: 0 }}>
              <Link href="/technology" className="btn-orange magnetic-btn">
                Explore Technology
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/investors" className="btn-ghost magnetic-btn">For Investors ↗</Link>
            </div>
            <div className="hero-pills flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3" style={{ opacity: 0 }}>
              <span className="stat-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2" style={{ display:'inline', marginRight:'3px', verticalAlign:'-2px', flexShrink: 0 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                2 Patents
              </span>
              <span className="stat-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2" style={{ display:'inline', marginRight:'3px', verticalAlign:'-2px', flexShrink: 0 }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                30+ Years R&D
              </span>
              <span className="stat-pill" style={{ color: 'var(--green)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B7340" strokeWidth="2" style={{ display:'inline', marginRight:'3px', verticalAlign:'-2px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                IIM Verified
              </span>
            </div>
          </div>

          {/* RIGHT diagram — shown on ALL screens, scaled for mobile */}
          <div
            className="hero-loop-container flex items-center justify-center relative w-full"
            style={{ opacity: 0, maxWidth: '600px', margin: '0 auto' }}
          >
            <IEGFlowDiagram />
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div
        className="scroll-indicator hidden lg:flex"
        style={{
          position:'absolute', bottom:'clamp(100px, 15vh, 140px)', left:'50%',
          transform:'translateX(-50%)', flexDirection:'column',
          alignItems:'center', gap:'10px', opacity:0,
        }}
      >
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'.18em', color:'var(--text-3)' }}>
          SCROLL
        </span>
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
          <rect x="1" y="1" width="14" height="26" rx="7" stroke="rgba(255,255,255,.12)" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2" fill="var(--orange)">
            <animate attributeName="cy" values="8;18;8" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      {/* Ticker */}
      <div className="hero-ticker absolute bottom-0 left-0 w-full z-20 pointer-events-auto" style={{ opacity:0 }}>
        <MarqueeTicker />
      </div>
    </section>
  );
}