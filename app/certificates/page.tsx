'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';
import ParticleBg from '@/components/ui/ParticleBg';
import { CERTIFICATES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function CertificatesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.cert-hero-label', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.cert-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.2 });
      gsap.fromTo('.cert-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.35 });

      ref.current!.querySelectorAll('.cert-item').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.1, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <GradientMesh />
        <div className="grid-bg" />

        <div className="ieg-container relative z-10">
          <span className="cert-hero-label section-label" style={{ display: 'block', marginBottom: '20px', opacity: 0 }}>
            [ 07 — Credentials ]
          </span>
          <h1 className="cert-hero-title display-hero" style={{ maxWidth: '700px', marginBottom: '28px', opacity: 0 }}>
            Verified. Patented. <span className="gradient-text">Recognized.</span>
          </h1>
          <p className="cert-hero-sub body-xl" style={{ maxWidth: '600px', opacity: 0 }}>
            Government-granted patents, institutional recognition, and official incorporation — the proof that IEG technology is real.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="cert-item cert-frame hover-lift"
                style={{ cursor: 'pointer' }}
                onClick={() => setLightbox(cert.image)}
              >
                <div style={{ height: '240px', position: 'relative', background: 'rgba(255,255,255,0.02)' }}>
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>

                <div style={{ padding: '26px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: '17px',
                    color: 'var(--text-1)',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}>
                    {cert.title}
                  </h3>
                  <p className="body-sm" style={{ marginBottom: '10px' }}>{cert.subtitle}</p>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--text-3)',
                    letterSpacing: '0.03em',
                    marginBottom: '10px',
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
                      marginTop: '10px',
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
                    marginTop: '14px',
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
            background: 'rgba(6,10,14,0.96)',
            backdropFilter: 'blur(24px)',
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
              top: '28px',
              right: '28px',
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '20px',
              color: 'var(--text-2)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
