'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';
import ParticleBg from '@/components/ui/ParticleBg';
import { PRODUCTS_READY, PRODUCTS_UPCOMING } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.prod-hero-label', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.prod-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.2 });
      gsap.fromTo('.prod-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.35 });

      ref.current!.querySelectorAll('.reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      // Product cards stagger
      ref.current!.querySelectorAll('.prod-item').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 80, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9, delay: i * 0.1, ease: 'power4.out',
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
          <span className="prod-hero-label section-label" style={{ display: 'block', marginBottom: '20px', opacity: 0 }}>
            [ 03 — Products ]
          </span>
          <h1 className="prod-hero-title" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-1)', maxWidth: '800px', marginBottom: '28px', opacity: 0 }}>
            Products Built For A <span className="gradient-text">Fossil-Free</span> World
          </h1>
          <p className="prod-hero-sub body-xl" style={{ maxWidth: '600px', opacity: 0 }}>
            From electric vehicles to home appliances — IEG technology powers them all.
          </p>
        </div>
      </section>

      {/* PRODUCTION READY */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="reveal display-md">Production Ready</h2>
            <span className="reveal tag orbit-badge">SHIPPING NOW</span>
          </div>

          <div className="grid gap-8">
            {PRODUCTS_READY.map((product) => (
              <div key={product.id} className="prod-item product-card glass-card" style={{ overflow: 'hidden' }}>
                <div className="grid md:grid-cols-[340px_1fr] gap-0">
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRight: '1px solid var(--border)',
                    minHeight: '260px',
                    position: 'relative',
                  }}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="340px"
                      className="object-contain p-8"
                    />
                  </div>

                  <div style={{ padding: '36px' }}>
                    <span className="mono-label" style={{ color: 'var(--orange)', marginBottom: '10px', display: 'block' }}>
                      {product.category}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 700,
                      fontSize: '26px',
                      color: 'var(--text-1)',
                      marginBottom: '14px',
                    }}>
                      {product.name}
                    </h3>
                    <p className="body-md" style={{ marginBottom: '24px', maxWidth: '520px' }}>
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <span key={key} className="stat-pill">{val}</span>
                      ))}
                    </div>

                    {'badge' in product && product.badge && (
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--green)',
                        letterSpacing: '0.06em',
                        display: 'block',
                        marginBottom: '16px',
                      }}>
                        ✓ {product.badge}
                      </span>
                    )}

                    <Link href="/contact" className="btn-sm">
                      Enquire Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING PRODUCTS */}
      <section className="section-pad relative" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-glow-right" />
        <div className="ieg-container">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="reveal display-md">Coming Soon</h2>
            <span className="reveal" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              padding: '5px 14px',
              borderRadius: '20px',
              background: 'var(--green-dim)',
              color: 'var(--green)',
              fontWeight: 500,
            }}>
              IN DEVELOPMENT
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS_UPCOMING.map((product) => (
              <div key={product.name} className="reveal glass-card hover-lift" style={{ padding: '32px 28px' }}>
                <span className="mono-label" style={{ color: 'var(--text-3)', display: 'block', marginBottom: '10px' }}>
                  {product.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--text-1)',
                  marginBottom: '20px',
                }}>
                  {product.name}
                </h3>
                <Link href="/contact" className="btn-sm">
                  Enquire Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}