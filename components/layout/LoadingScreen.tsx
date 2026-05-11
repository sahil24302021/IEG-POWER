'use client';

import { useState, useEffect } from 'react';

/**
 * LoadingScreen — Premium splash with IEG logo + animated progress counter.
 * Uses a plain <img> to avoid next/image SSR hydration mismatches.
 * Duration: ~2.5s for a proper, visible loading experience.
 */
export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animated counter 0→100 over 2.5 seconds
    const duration = 2500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        // Hold at 100% for a beat, then fade out
        setTimeout(() => setFadeOut(true), 200);
        setTimeout(() => setHidden(true), 900);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        background: '#050A12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '36px',
        transition: 'opacity 0.7s cubic-bezier(0.23,1,0.32,1)',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Logo with pulse animation */}
      <div style={{
        width: '80px',
        height: '80px',
        position: 'relative',
        animation: 'pulse-logo 2s ease-in-out infinite',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ieg-logo.png"
          alt="IEG"
          width={80}
          height={80}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Progress bar — tri-color gradient */}
      <div style={{
        width: '140px',
        height: '2px',
        background: 'rgba(46,134,193,0.1)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #1B6FA8, #D4AF37, #1A7A4C)',
            borderRadius: '2px',
            boxShadow: '0 0 12px rgba(46,134,193,0.4)',
            transition: 'width 0.06s linear',
          }}
        />
      </div>

      {/* Percentage counter */}
      <span style={{
        fontFamily: 'monospace',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: '#526580',
      }}>
        {progress}%
      </span>
    </div>
  );
}