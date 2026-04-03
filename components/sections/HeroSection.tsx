'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import GradientMesh from '@/components/ui/GradientMesh';
import MarqueeTicker from '@/components/sections/MarqueeTicker';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo('.hero-label', { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });
      tl.fromTo('.hero-title-line', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power4.out' }, '-=0.3');
      tl.fromTo('.hero-sub', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.35');
      tl.fromTo('.hero-ctas', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.25');
      tl.fromTo('.hero-pills', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.25');
      tl.fromTo('.hero-loop-container', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }, '-=1.0');
      tl.fromTo('.scroll-indicator', { opacity: 0 }, { opacity: 1, duration: 1.0 }, '-=0.4');
      tl.fromTo('.hero-ticker', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power2.out' }, '-=0.8');

      // Parallax fade on scroll
      gsap.to('.hero-content', {
        y: -80,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: '60% top',
          scrub: 1,
        },
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
      {/* Animated gradient mesh background */}
      <GradientMesh />
      
      {/* Grid background texture */}
      <div className="grid-bg" />

      {/* Radial orange glow */}
      <div className="hero-glow" style={{ left: '62%', top: '48%', width: '900px', height: '900px' }} />

      {/* Secondary green glow */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27,115,64,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div
        className="hero-content ieg-container relative z-10 w-full"
        style={{ paddingTop: '130px', paddingBottom: '200px' }}
      >
        <div className="grid lg:grid-cols-[52%_48%] gap-6 items-center">
          {/* LEFT — Copy */}
          <div>
            <div className="hero-label flex items-center gap-3 mb-8" style={{ opacity: 0 }}>
              <span className="tag orbit-badge">Patented Clean Energy</span>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h1>
                <span
                  className="hero-title-line block"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: 'clamp(32px, 3.8vw, 56px)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                    color: 'var(--text-1)',
                    opacity: 0,
                  }}
                >
                  The Power
                </span>
                <span
                  className="hero-title-line block gradient-text"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: 'clamp(32px, 3.8vw, 56px)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                    opacity: 0,
                  }}
                >
                  Within.
                </span>
              </h1>
            </div>

            <p
              className="hero-sub body-xl"
              style={{ maxWidth: '480px', marginBottom: '40px', opacity: 0 }}
            >
              Self-sustaining, zero-emission energy systems.
              No grid. No fuel. No limits.
            </p>

            <div className="hero-ctas flex flex-wrap gap-4 mb-12" style={{ opacity: 0 }}>
              <Link href="/technology" className="btn-orange">
                Explore Technology
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/investors" className="btn-ghost">
                For Investors ↗
              </Link>
            </div>

            <div className="hero-pills flex flex-wrap gap-3" style={{ opacity: 0 }}>
              <span className="stat-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2" style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                2 Patents Granted
              </span>
              <span className="stat-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2" style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                30+ Years R&D
              </span>
              <span className="stat-pill" style={{ color: 'var(--green)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B7340" strokeWidth="2" style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }}><polyline points="20 6 9 17 4 12"/></svg>
                IIM Nagpur Verified
              </span>
            </div>
          </div>

          {/* RIGHT — Animated Energy Loop Diagram */}
          <div className="hero-loop-container hidden lg:flex items-center justify-center relative" style={{ opacity: 0 }}>
            <div style={{
              position: 'absolute',
              inset: '10%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(247,148,29,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }} />
            
            {/* Infinite Energy Loop SVG */}
            <svg viewBox="0 0 500 500" style={{ width: '100%', maxWidth: '520px', height: 'auto', position: 'relative', zIndex: 1 }}>
              <defs>
                {/* Gradient for glass panels */}
                <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(247,148,29,0.12)" />
                  <stop offset="100%" stopColor="rgba(247,148,29,0.03)" />
                </linearGradient>
                <linearGradient id="panelGradGreen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(27,115,64,0.12)" />
                  <stop offset="100%" stopColor="rgba(27,115,64,0.03)" />
                </linearGradient>

                {/* Glow filters */}
                <filter id="orangeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>

                {/* Flow path definitions for animateMotion */}
                <path id="heroFlow1" d="M300 90 Q420 90 420 200" fill="none" />
                <path id="heroFlow2" d="M420 280 Q420 400 300 400" fill="none" />
                <path id="heroFlow3" d="M200 400 Q80 400 80 280" fill="none" />
                <path id="heroFlow4" d="M80 200 Q80 90 200 90" fill="none" />
              </defs>

              {/* Outer decorative ring */}
              <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(247,148,29,0.04)" strokeWidth="1" />
              <circle cx="250" cy="250" r="210" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="4 8" >
                <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="60s" repeatCount="indefinite" />
              </circle>

              {/* === BATTERY (Top) === */}
              <rect x="185" y="50" width="130" height="65" rx="10" fill="url(#panelGrad)" stroke="#F7941D" strokeWidth="1.5" />
              <rect x="230" y="40" width="40" height="12" rx="4" fill="rgba(247,148,29,0.15)" stroke="#F7941D" strokeWidth="1" />
              {/* Battery charge bars */}
              <rect x="200" y="68" width="18" height="28" rx="2" fill="rgba(247,148,29,0.25)" />
              <rect x="223" y="68" width="18" height="28" rx="2" fill="rgba(247,148,29,0.35)" />
              <rect x="246" y="68" width="18" height="28" rx="2" fill="rgba(247,148,29,0.5)" />
              <rect x="269" y="68" width="18" height="28" rx="2" fill="#F7941D" opacity="0.7" />
              <text x="250" y="115" textAnchor="middle" fill="#F7941D" fontSize="10" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.08em">BATTERY</text>
              <text x="250" y="128" textAnchor="middle" fill="rgba(140,155,171,0.8)" fontSize="8" fontFamily="var(--font-mono)">12V – 60V</text>

              {/* === BLDC MOTOR (Right) === */}
              <rect x="370" y="210" width="110" height="70" rx="10" fill="url(#panelGradGreen)" stroke="#1B7340" strokeWidth="1.5" />
              {/* Motor circles */}
              <circle cx="402" cy="245" r="15" fill="none" stroke="rgba(27,115,64,0.3)" strokeWidth="1.5" />
              <circle cx="402" cy="245" r="8" fill="rgba(27,115,64,0.15)" stroke="#1B7340" strokeWidth="1" />
              <circle cx="402" cy="245" r="3" fill="#1B7340" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="0 402 245" to="360 402 245" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="450" y="240" textAnchor="middle" fill="#1B7340" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.06em">BLDC</text>
              <text x="450" y="252" textAnchor="middle" fill="#1B7340" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.06em">MOTOR</text>
              <text x="425" y="290" textAnchor="middle" fill="rgba(140,155,171,0.8)" fontSize="8" fontFamily="var(--font-mono)">~90% eff.</text>

              {/* === IEG MB GENERATOR (Bottom) === */}
              <rect x="185" y="370" width="130" height="75" rx="10" fill="rgba(247,148,29,0.08)" stroke="#F7941D" strokeWidth="2" />
              {/* Generator inner design */}
              <rect x="200" y="385" width="100" height="44" rx="6" fill="none" stroke="rgba(247,148,29,0.15)" strokeWidth="1" />
              {/* Circuit board pattern */}
              <line x1="210" y1="395" x2="230" y2="395" stroke="rgba(247,148,29,0.3)" strokeWidth="1" />
              <line x1="210" y1="403" x2="240" y2="403" stroke="rgba(247,148,29,0.2)" strokeWidth="1" />
              <line x1="210" y1="411" x2="225" y2="411" stroke="rgba(247,148,29,0.25)" strokeWidth="1" />
              <line x1="210" y1="419" x2="235" y2="419" stroke="rgba(247,148,29,0.2)" strokeWidth="1" />
              {/* Magnets */}
              <rect x="260" y="388" width="30" height="14" rx="3" fill="rgba(247,148,29,0.15)" stroke="rgba(247,148,29,0.3)" strokeWidth="0.8" />
              <text x="275" y="398" textAnchor="middle" fill="rgba(247,148,29,0.6)" fontSize="6" fontFamily="var(--font-mono)">MAG</text>
              <rect x="260" y="408" width="30" height="14" rx="3" fill="rgba(247,148,29,0.15)" stroke="rgba(247,148,29,0.3)" strokeWidth="0.8" />
              <text x="275" y="418" textAnchor="middle" fill="rgba(247,148,29,0.6)" fontSize="6" fontFamily="var(--font-mono)">MAG</text>
              <text x="250" y="456" textAnchor="middle" fill="#F7941D" fontSize="10" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.08em">IEG MB</text>
              <text x="250" y="468" textAnchor="middle" fill="rgba(140,155,171,0.8)" fontSize="8" fontFamily="var(--font-mono)">180%+ output</text>

              {/* === BATTERY CHARGER (Left) === */}
              <rect x="20" y="210" width="110" height="70" rx="10" fill="url(#panelGrad)" stroke="#F7941D" strokeWidth="1.5" />
              {/* Charger icon */}
              <path d="M52 235 L52 255 L62 255 L62 265 L72 245 L62 245 L62 235 Z" fill="rgba(247,148,29,0.4)" stroke="#F7941D" strokeWidth="1" />
              <text x="100" y="242" textAnchor="middle" fill="#F7941D" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.04em">BATTERY</text>
              <text x="100" y="254" textAnchor="middle" fill="#F7941D" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.04em">CHARGER</text>
              <text x="75" y="292" textAnchor="middle" fill="rgba(140,155,171,0.8)" fontSize="8" fontFamily="var(--font-mono)">Recharges</text>

              {/* === FLOW ARROWS — animated energy paths === */}
              {/* Top → Right */}
              <path d="M300 90 Q420 90 420 200" fill="none" stroke="rgba(27,115,64,0.3)" strokeWidth="2" className="energy-path" />
              {/* Right → Bottom */}
              <path d="M420 280 Q420 400 300 400" fill="none" stroke="rgba(247,148,29,0.3)" strokeWidth="2" className="energy-path" />
              {/* Bottom → Left */}
              <path d="M200 400 Q80 400 80 280" fill="none" stroke="rgba(247,148,29,0.3)" strokeWidth="2" className="energy-path" />
              {/* Left → Top */}
              <path d="M80 200 Q80 90 200 90" fill="none" stroke="rgba(247,148,29,0.3)" strokeWidth="2" className="energy-path" />

              {/* Flow direction arrows (static) */}
              <polygon points="420,195 415,205 425,205" fill="#1B7340" opacity="0.5" />
              <polygon points="305,400 295,395 295,405" fill="#F7941D" opacity="0.5" />
              <polygon points="80,285 75,275 85,275" fill="#F7941D" opacity="0.5" />
              <polygon points="195,90 205,85 205,95" fill="#F7941D" opacity="0.5" />

              {/* Animated particles along paths */}
              <circle r="5" fill="#1B7340" opacity="0.9" filter="url(#greenGlow)">
                <animateMotion dur="3s" repeatCount="indefinite">
                  <mpath href="#heroFlow1" />
                </animateMotion>
              </circle>
              <circle r="5" fill="#F7941D" opacity="0.9" filter="url(#orangeGlow)">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.75s">
                  <mpath href="#heroFlow2" />
                </animateMotion>
              </circle>
              <circle r="5" fill="#F7941D" opacity="0.9" filter="url(#orangeGlow)">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                  <mpath href="#heroFlow3" />
                </animateMotion>
              </circle>
              <circle r="4.5" fill="#F7941D" opacity="0.9" filter="url(#orangeGlow)">
                <animateMotion dur="3s" repeatCount="indefinite" begin="2.25s">
                  <mpath href="#heroFlow4" />
                </animateMotion>
              </circle>

              {/* Second set of particles for density */}
              <circle r="3" fill="#1B7340" opacity="0.6">
                <animateMotion dur="3s" repeatCount="indefinite" begin="0.4s">
                  <mpath href="#heroFlow1" />
                </animateMotion>
              </circle>
              <circle r="3" fill="#F7941D" opacity="0.6">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1.15s">
                  <mpath href="#heroFlow2" />
                </animateMotion>
              </circle>
              <circle r="3" fill="#F7941D" opacity="0.6">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1.9s">
                  <mpath href="#heroFlow3" />
                </animateMotion>
              </circle>
              <circle r="3" fill="#F7941D" opacity="0.6">
                <animateMotion dur="3s" repeatCount="indefinite" begin="2.65s">
                  <mpath href="#heroFlow4" />
                </animateMotion>
              </circle>

              {/* Center branding */}
              <text x="250" y="245" textAnchor="middle" fill="rgba(247,148,29,0.1)" fontSize="42" fontWeight="800" fontFamily="var(--font-syne)">IEG</text>
              <text x="250" y="265" textAnchor="middle" fill="rgba(255,255,255,0.06)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.25em">SELF-REGENERATING</text>
              
              {/* Corner flow labels */}
              <text x="380" y="155" textAnchor="middle" fill="rgba(27,115,64,0.5)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0.08em">POWER</text>
              <text x="380" y="345" textAnchor="middle" fill="rgba(247,148,29,0.4)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0.08em">TORQUE</text>
              <text x="120" y="345" textAnchor="middle" fill="rgba(247,148,29,0.4)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0.08em">EXCESS ENERGY</text>
              <text x="120" y="155" textAnchor="middle" fill="rgba(247,148,29,0.4)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0.08em">RECHARGE</text>

              {/* Load output indicator */}
              <g transform="translate(420, 120)">
                <circle cx="0" cy="0" r="18" fill="rgba(247,148,29,0.06)" stroke="rgba(247,148,29,0.15)" strokeWidth="1" />
                <path d="M-6 -2 L-2 -8 L0 -2 L6 -2 L2 8 L0 2 L-6 -2" fill="#F7941D" opacity="0.6" />
                <text x="0" y="30" textAnchor="middle" fill="rgba(247,148,29,0.5)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="0.06em">LOAD</text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '140px', // Shifted higher to give the ticker more breathing room
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          opacity: 0,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.18em',
          color: 'var(--text-3)',
        }}>
          SCROLL
        </span>
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
          <rect x="1" y="1" width="14" height="26" rx="7" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2" fill="var(--orange)">
            <animate attributeName="cy" values="8;18;8" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      {/* Floating Ticker at the absolute bottom of the Hero */}
      <div className="hero-ticker absolute bottom-0 left-0 w-full z-20 pointer-events-auto" style={{ opacity: 0 }}>
         <MarqueeTicker />
      </div>
    </section>
  );
}