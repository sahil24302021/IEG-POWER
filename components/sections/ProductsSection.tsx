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
      y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
    });

    // Cards — staggered scale + fade from bottom
    gsap.from('.prod-card', {
      y: 80, opacity: 0, scale: 0.95, duration: 0.9, stagger: 0.15, ease: 'power4.out',
      scrollTrigger: { trigger: '.prod-grid', start: 'top 85%', toggleActions: 'play none none none' },
    });

    // Parallax scroll on cards
    const cards = gsap.utils.toArray('.prod-card');
    cards.forEach((card: any, i: number) => {
      gsap.to(card, {
        y: -15 * (i % 2 === 0 ? 1 : 1.5),
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
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
          <Link href="/products" className="prod-heading btn-sm">
            View All Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Equal-size grid — all cards same height */}
        <div className="prod-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_READY.map((product) => (
            <div key={product.id} className="prod-card product-card glass-card flex flex-col" style={{ overflow: 'hidden' }}>
              {/* Image — fixed height */}
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

              {/* Copy — flex-grow to equalize */}
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

                {/* Spec pills */}
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
