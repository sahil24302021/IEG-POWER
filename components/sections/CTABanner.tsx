'use client';

import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{
      padding: '100px 0',
      background: 'linear-gradient(135deg, var(--bg-primary) 0%, rgba(255,92,0,0.08) 50%, var(--bg-primary) 100%)',
    }}>
      {/* Subtle orange glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(255,92,0,0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />
      
      <div className="ieg-container relative z-10 text-center">
        <h2 className="display-lg" style={{ marginBottom: '20px' }}>
          Ready to Power <span className="text-orange">the Future?</span>
        </h2>
        <p className="body-lg" style={{ maxWidth: '560px', margin: '0 auto 40px' }}>
          Join us as an investor, partner, or early adopter. 
          Two government patents. Five business verticals. One revolutionary technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-orange">
            Talk to Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="/investors" className="btn-ghost">
            Download Deck
          </Link>
        </div>
      </div>
    </section>
  );
}
