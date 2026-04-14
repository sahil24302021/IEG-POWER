'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PRODUCTS_READY } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProductsSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    
    // Heading reveal
    gsap.from('.prod-heading', {
      y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', toggleActions: 'play none none none' },
    });

    // Cards — slide in from alternating sides
    const cards = gsap.utils.toArray<HTMLElement>('.prod-card');
    cards.forEach((card, i) => {
      const fromX = i % 2 === 0 ? -70 : 70;
      gsap.fromTo(card,
        { x: fromX, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.prod-grid', start: 'top 82%', toggleActions: 'play none none none' },
        }
      );
    });

    // Subtle parallax scrub
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: -10 * (i % 2 === 0 ? 1 : 1.4),
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div className="ieg-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="prod-heading section-label" style={{ display: 'block', marginBottom: '12px' }}>Products</span>
            <h2 className="prod-heading display-md">Built For <span className="text-orange">Every Need</span></h2>
          </div>
          <Link href="/products" className="prod-heading btn-sm magnetic-btn">
            View All Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="prod-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_READY.map((product) => (
            <div
              key={product.id}
              className="prod-card glass-card shimmer-card hover-lift flex flex-col"
              style={{ overflow: 'hidden' }}
            >
              {/* Image */}
              <div style={{
                height: '200px',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--border)',
                position: 'relative',
                flexShrink: 0,
              }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-6"
                />
              </div>

              {/* Copy */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="mono-label" style={{ color: 'var(--orange)', marginBottom: '4px', display: 'block', fontSize: '10px' }}>
                  {product.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: 'var(--text-1)',
                  marginBottom: '6px',
                  lineHeight: 1.3,
                }}>
                  {product.name}
                </h3>
                <p className="body-sm" style={{ marginBottom: '14px', lineHeight: 1.6, flex: 1 }}>
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <span key={key} className="stat-pill" style={{ fontSize: '10px', padding: '4px 10px' }}>
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
