/**
 * Root Loading State — Shown during route transitions via Next.js Suspense.
 * Provides a minimal branded skeleton instead of a blank page.
 */
export default function Loading() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Pulsing brand dot */}
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'var(--gold)',
            boxShadow: '0 0 16px rgba(212,175,55,0.4)',
            animation: 'pulse-logo 1.5s ease-in-out infinite',
          }}
        />
        {/* Loading bar */}
        <div
          style={{
            width: '80px',
            height: '2px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '40%',
              background: 'linear-gradient(90deg, var(--gold), rgba(212,175,55,0.3))',
              borderRadius: '2px',
              animation: 'loading-slide 1.2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loading-slide {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(150%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </main>
  );
}
