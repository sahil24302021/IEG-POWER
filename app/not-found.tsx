import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
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
          fontSize: 'clamp(80px, 15vw, 160px)',
          lineHeight: 1,
          color: 'var(--gold)',
          opacity: 0.15,
          marginBottom: '-20px',
          letterSpacing: '-0.05em',
        }}
      >
        404
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
        Page Not Found
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '16px',
          color: 'var(--text-2)',
          maxWidth: '400px',
          marginBottom: '36px',
          lineHeight: 1.7,
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-orange"
        style={{ fontSize: '14px', padding: '14px 28px' }}
      >
        Back to Home
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
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </main>
  );
}
