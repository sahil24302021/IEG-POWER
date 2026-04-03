'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from '@/components/three/ParticleField';
import { CERTIFICATES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function CertificatesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 50, opacity: 0, duration: 0.8, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative" style={{ padding: '160px 0 100px', background: 'var(--bg-primary)' }}>
        <ParticleField count={40} opacity={0.2} color="#1B7340" />
        <div className="hero-glow" />
        <div className="ieg-container relative z-10">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Credentials</span>
          <h1 className="display-hero reveal" style={{ maxWidth: '700px', marginBottom: '24px' }}>
            Verified. Patented. <span className="text-orange">Recognized.</span>
          </h1>
          <p className="body-xl reveal" style={{ maxWidth: '600px' }}>
            Government-granted patents, institutional recognition, and official incorporation — the proof that IEG technology is real.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="reveal cert-frame"
                style={{ cursor: 'pointer' }}
                onClick={() => setLightbox(cert.image)}
              >
                {/* Image */}
                <div style={{ height: '220px', position: 'relative', background: 'rgba(255,255,255,0.02)' }}>
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>

                {/* Details */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: '17px',
                    color: 'var(--text-1)',
                    marginBottom: '4px',
                    lineHeight: 1.3,
                  }}>
                    {cert.title}
                  </h3>
                  <p className="body-sm" style={{ marginBottom: '8px' }}>{cert.subtitle}</p>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--text-3)',
                    letterSpacing: '0.03em',
                    marginBottom: '8px',
                    lineHeight: 1.5,
                  }}>
                    {cert.details}
                  </p>
                  {'quote' in cert && cert.quote && (
                    <p style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontStyle: 'italic',
                      fontSize: '13px',
                      color: 'var(--text-2)',
                      borderTop: '1px solid var(--border)',
                      paddingTop: '12px',
                      marginTop: '8px',
                    }}>
                      &ldquo;{cert.quote}&rdquo;
                    </p>
                  )}
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--orange)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    display: 'block',
                    marginTop: '12px',
                  }}>
                    {cert.authority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60000,
            background: 'rgba(8,12,16,0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '40px',
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '80vh' }}>
            <Image
              src={lightbox}
              alt="Certificate"
              fill
              sizes="600px"
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--text-2)',
              background: 'none',
              border: 'none',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
