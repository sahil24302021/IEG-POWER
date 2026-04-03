'use client';

import { useState, useEffect, useRef } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Animated counter 0→100
    const duration = 150;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setHidden(true), 200);
      }
    };
    requestAnimationFrame(animate);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`loading-screen ${hidden ? 'hidden' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '36px',
        transition: 'opacity 0.8s cubic-bezier(0.23,1,0.32,1), visibility 0.8s',
        opacity: hidden ? 0 : 1,
        visibility: hidden ? 'hidden' as const : 'visible' as const,
        pointerEvents: hidden ? 'none' as const : 'auto' as const,
      }}
    >
      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 800,
        fontSize: '36px',
        letterSpacing: '-0.04em',
        color: 'white',
        opacity: 0.9,
      }}>
        IEG
      </div>

      {/* Progress bar */}
      <div style={{
        width: '140px',
        height: '2px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '2px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div
          ref={barRef}
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--orange), rgba(247,148,29,0.6))',
            borderRadius: '2px',
            boxShadow: '0 0 12px rgba(247,148,29,0.4)',
            transition: 'width 0.05s linear',
          }}
        />
      </div>

      {/* Counter */}
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: 'var(--text-3)',
      }}>
        {progress}%
      </span>
    </div>
  );
}