'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    name: 'IEG E-Rickshaw Charger',
    category: 'Electric Mobility',
    desc: 'Self-powered charging for e-rickshaws. Battery extends 2–2.5×. Zero electricity bill.',
    specs: ['2.5× Battery', 'Self Charging', '200km Range'],
    image: '/assets/pdf_page22_img1.png',
  },
  {
    name: 'IEG Power Generator',
    category: 'Power Generation',
    desc: 'Fuel-less power station. Silent, clean, portable. 1KVA and 2KVA models available.',
    specs: ['1–2 KVA', '18hr Runtime', '68dB Quiet'],
    image: '/assets/pdf_page17_img1.png',
  },
  {
    name: 'IEG E-Scooty Charger',
    category: 'Electric Mobility',
    desc: 'Self-refilling charge when parked. Prevents deep discharge. Doubles battery life.',
    specs: ['2× Cycles', '₹0 Elec. Bill', 'Auto Refill'],
    image: '/assets/pdf_page21_img1.png',
  },
  {
    name: 'IEG Electric Chula',
    category: 'Home Appliance',
    desc: 'Clean electric cooking stove. No gas cylinders, no grid connection needed.',
    specs: ['Self Powered', 'Zero Fuel', 'Clean Cooking'],
    image: '/assets/pdf_page24_img3.png',
  },
];

export default function ProductsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.product-reveal'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--black)', padding: '100px 0' }}>
      <div className="ieg-container">
        <div className="product-reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <span className="section-label" style={{ display: 'block', marginBottom: '14px' }}>Products</span>
            <h2 className="display-lg">
              Built for the <span style={{ fontWeight: 300, color: 'var(--text-2)', fontStyle: 'italic' }}>real</span> world.
            </h2>
          </div>
          <Link href="/products" className="btn-secondary shrink-0">
            View All Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* 2×2 Grid — compact horizontal cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="product-reveal product-card" style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '10px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '160px 1fr',
            }}>
              {/* Image */}
              <div style={{ position: 'relative', background: '#080C08', minHeight: '160px' }}>
                <Image src={p.image} alt={p.name} fill className="object-contain" sizes="160px"
                  style={{ padding: '16px' }} />
              </div>

              {/* Content */}
              <div style={{ padding: '20px 24px', borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const, color: 'var(--green)', display: 'block', marginBottom: '8px',
                }}>
                  {p.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-outfit)', fontWeight: 600,
                  fontSize: '18px', lineHeight: 1.2, color: 'var(--text-1)', marginBottom: '8px',
                }}>
                  {p.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-dm-sans)', fontSize: '14px',
                  lineHeight: 1.6, color: 'var(--text-2)', marginBottom: '14px',
                }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.specs.map((s) => (
                    <span key={s} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.04em',
                      color: 'var(--text-3)', background: 'var(--surface-2)',
                      border: '1px solid var(--border)', borderRadius: '4px', padding: '4px 10px',
                    }}>
                      {s}
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
