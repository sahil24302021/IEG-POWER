'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from '@/components/three/ParticleField';
import { PRODUCTS_READY, PRODUCTS_UPCOMING } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const ref = useRef<HTMLDivElement>(null);

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
        <ParticleField count={50} opacity={0.2} />
        <div className="hero-glow" />
        <div className="ieg-container relative z-10">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Products</span>
          <h1 className="display-hero reveal" style={{ maxWidth: '800px', marginBottom: '24px' }}>
            Products Built For A <span className="text-orange">Fossil-Free</span> World
          </h1>
          <p className="body-xl reveal" style={{ maxWidth: '600px' }}>
            From electric vehicles to home appliances — IEG technology powers them all.
          </p>
        </div>
      </section>

      {/* PRODUCTION READY */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="display-md reveal">Production Ready</h2>
            <span className="reveal" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              padding: '4px 12px',
              borderRadius: '20px',
              background: 'var(--orange-dim)',
              color: 'var(--orange)',
              fontWeight: 500,
            }}>
              SHIPPING NOW
            </span>
          </div>

          <div className="grid gap-8">
            {PRODUCTS_READY.map((product) => (
              <div key={product.id} className="reveal product-card glass-card" style={{ overflow: 'hidden' }}>
                <div className="grid md:grid-cols-[320px_1fr] gap-0">
                  {/* Image */}
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRight: '1px solid var(--border)',
                    minHeight: '240px',
                    position: 'relative',
                  }}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="320px"
                      className="object-contain p-8"
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '32px' }}>
                    <span className="mono-label" style={{ color: 'var(--orange)', marginBottom: '8px', display: 'block' }}>
                      {product.category}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: 'var(--text-1)',
                      marginBottom: '12px',
                    }}>
                      {product.name}
                    </h3>
                    <p className="body-md" style={{ marginBottom: '20px', maxWidth: '500px' }}>
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-3 mb-6">
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
                      }}>
                        ✓ {product.badge}
                      </span>
                    )}

                    <div style={{ marginTop: '16px' }}>
                      <Link href="/contact" className="btn-sm">
                        Enquire Now →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING PRODUCTS */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="ieg-container">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="display-md reveal">Coming Soon</h2>
            <span className="reveal" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              padding: '4px 12px',
              borderRadius: '20px',
              background: 'var(--green-dim)',
              color: 'var(--green)',
              fontWeight: 500,
            }}>
              IN DEVELOPMENT
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS_UPCOMING.map((product) => (
              <div key={product.name} className="reveal glass-card" style={{ padding: '28px 24px' }}>
                <span className="mono-label" style={{ color: 'var(--text-3)', display: 'block', marginBottom: '8px' }}>
                  {product.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: 'var(--text-1)',
                  marginBottom: '16px',
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