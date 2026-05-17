'use client';

import { useState, useEffect } from 'react';

/**
 * LoadingScreen — Cinematic brand reveal with logo + company name.
 * Sequence:
 *   1. Logo fades in with scale + blur
 *   2. Company name reveals letter by letter with a gold sweep
 *   3. Tagline fades in softly
 *   4. Tri-color progress bar fills
 *   5. Everything fades out with upward drift
 *
 * Duration: ~3s total for premium feel.
 */
export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [phase, setPhase] = useState(0);
  // phase 0: initial, 1: logo visible, 2: name visible, 3: tagline + bar visible

  useEffect(() => {
    // Phase timing
    const t1 = setTimeout(() => setPhase(1), 100);   // Logo appears
    const t2 = setTimeout(() => setPhase(2), 600);   // Name starts revealing
    const t3 = setTimeout(() => setPhase(3), 1200);  // Tagline + progress bar

    // Animated counter 0→100 over 2s (starts at phase 3)
    const t4 = setTimeout(() => {
      const duration = 1800;
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const p = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setProgress(Math.round(eased * 100));

        if (p < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => setHidden(true), 1100);
        }
      };
      requestAnimationFrame(animate);
    }, 1200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="loading-screen-root"
      aria-hidden="true"
      role="presentation"
      data-nosnippet=""
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        background: '#0B1526',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'translateY(-20px)' : 'translateY(0)',
      }}
    >
      {/* Subtle radial background glow */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, rgba(27,111,168,0.03) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Logo */}
      <div
        style={{
          width: '72px',
          height: '72px',
          marginBottom: '28px',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(12px)',
          filter: phase >= 1 ? 'blur(0px)' : 'blur(8px)',
          transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ieg-logo.png"
          alt="IEG Auto Powers"
          width={72}
          height={72}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Company Name */}
      <div
        style={{
          overflow: 'hidden',
          marginBottom: '8px',
          opacity: phase >= 2 ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0px',
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
          }}
        >
          {/* IEG — large, gold accent */}
          {'IEG'.split('').map((letter, i) => (
            <span
              key={`ieg-${i}`}
              style={{
                fontFamily: 'var(--font-syne, system-ui)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 5vw, 38px)',
                letterSpacing: '-0.02em',
                color: '#D4AF37',
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${0.05 * i}s, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${0.05 * i}s`,
                display: 'inline-block',
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Full Company Name */}
      <div
        style={{
          overflow: 'hidden',
          marginBottom: '6px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-syne, system-ui)',
            fontWeight: 600,
            fontSize: 'clamp(13px, 2.5vw, 16px)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#F5F5F0',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(100%)',
            transition: 'opacity 0.5s ease 0.15s, transform 0.6s cubic-bezier(0.23,1,0.32,1) 0.15s',
          }}
        >
          Auto Powers Ltd
        </div>
      </div>

      {/* Decorative line */}
      <div
        style={{
          width: phase >= 2 ? '60px' : '0px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)',
          margin: '16px 0',
          transition: 'width 0.8s cubic-bezier(0.23,1,0.32,1) 0.3s',
        }}
      />

      {/* Tagline */}
      <div
        style={{
          fontFamily: 'var(--font-dm-sans, system-ui)',
          fontSize: 'clamp(11px, 1.8vw, 13px)',
          letterSpacing: '0.08em',
          color: '#5E7A99',
          marginBottom: '36px',
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.6s cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        Powering Tomorrow, Today
      </div>

      {/* Progress bar — tri-color gradient */}
      <div
        style={{
          width: '160px',
          height: '2px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '2px',
          overflow: 'hidden',
          opacity: phase >= 3 ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #1B6FA8, #D4AF37, #1A7A4C)',
            borderRadius: '2px',
            boxShadow: '0 0 16px rgba(212,175,55,0.3)',
            transition: 'width 0.06s linear',
          }}
        />
      </div>

      {/* Percentage */}
      <span
        style={{
          fontFamily: 'var(--font-jetbrains-mono, monospace)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: '#3D5A73',
          marginTop: '14px',
          opacity: phase >= 3 ? 0.8 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        {progress}%
      </span>
    </div>
  );
}