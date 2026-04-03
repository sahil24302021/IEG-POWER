'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      {/* Logo pulse */}
      <div style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 800,
        fontSize: '32px',
        letterSpacing: '-0.03em',
        color: 'white',
        animation: 'pulse-logo 1.5s ease-in-out infinite',
      }}>
        IEG
      </div>
      {/* Charging bar */}
      <div className="loading-bar" />
      <style jsx>{`
        @keyframes pulse-logo {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
