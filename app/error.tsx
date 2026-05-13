'use client';

import { useEffect } from 'react';

/**
 * Root Error Boundary — Catches runtime errors in any route segment.
 * Displays a branded recovery UI instead of a blank/broken page.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error('[IEG Error Boundary]', error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '40px 20px',
        background: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(60px, 12vw, 120px)',
          lineHeight: 1,
          color: 'var(--gold)',
          opacity: 0.12,
          marginBottom: '-16px',
          letterSpacing: '-0.05em',
        }}
      >
        ⚠
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: 'clamp(22px, 4vw, 36px)',
          color: 'var(--text-1)',
          marginBottom: '16px',
        }}
      >
        Something Went Wrong
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '16px',
          color: 'var(--text-2)',
          maxWidth: '440px',
          marginBottom: '36px',
          lineHeight: 1.7,
        }}
      >
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={reset}
          className="btn-orange"
          style={{ fontSize: '14px', padding: '14px 28px' }}
        >
          Try Again
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 2v6h-6" />
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M3 22v-6h6" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        </button>
        <a
          href="/"
          className="btn-ghost"
          style={{ fontSize: '14px', padding: '14px 28px' }}
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
