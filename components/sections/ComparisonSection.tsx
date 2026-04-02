'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DATA = [
  {
    vehicle: '2-Wheeler',
    evRange: '100km',
    evCost: '₹0.90/km',
    evBar: 90,
    iegRange: '200km',
    iegCost: '₹0.12/km',
    iegBar: 12,
    saving: '87%',
  },
  {
    vehicle: '4-Wheeler',
    evRange: '250km',
    evCost: '₹1.60/km',
    evBar: 100,
    iegRange: '500km',
    iegCost: '₹0.42/km',
    iegBar: 26,
    saving: '74%',
  },
  {
    vehicle: 'E-Rickshaw',
    evRange: '100km',
    evCost: '₹0.45/km',
    evBar: 45,
    iegRange: '200km',
    iegCost: '₹0.27/km',
    iegBar: 27,
    saving: '40%',
  },
];

export default function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current.querySelectorAll('.comp-reveal'), {
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 70%',
      onEnter: () => setAnimated(true),
      once: true,
    });
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--black)',
        padding: '80px 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="ieg-container">
        {/* Header */}
        <div className="comp-reveal mb-10">
          <span className="section-label" style={{ display: 'block', marginBottom: '14px' }}>
            Cost Comparison
          </span>
          <h2 className="display-lg" style={{ maxWidth: '500px' }}>
            Why{' '}
            <span style={{ color: 'var(--green)' }}>switch</span>?
          </h2>
          <p className="body-md" style={{ maxWidth: '420px', marginTop: '12px' }}>
            A fundamental shift in energy economics. Side-by-side, the numbers make the case.
          </p>
        </div>

        {/* Table — CSS Grid, not <table> */}
        <div
          className="comp-reveal"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr 1fr 100px',
              gap: '16px',
              padding: '16px 24px',
              borderBottom: '1px solid var(--border)',
              alignItems: 'center',
            }}
          >
            <span className="mono-label" style={{ fontSize: '10px' }}>Vehicle</span>
            <span className="mono-label" style={{ fontSize: '10px' }}>Standard EV</span>
            <span className="mono-label" style={{ fontSize: '10px' }}>IEG Powered</span>
            <span className="mono-label" style={{ fontSize: '10px', textAlign: 'right' }}>Savings</span>
          </div>

          {/* Data rows */}
          {DATA.map((row, i) => (
            <div
              key={row.vehicle}
              className="comp-reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr 1fr 100px',
                gap: '16px',
                padding: '24px',
                borderBottom: i < DATA.length - 1 ? '1px solid var(--border)' : 'none',
                alignItems: 'center',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.01)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {/* Vehicle name */}
              <span style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 500,
                fontSize: '16px',
                color: 'var(--text-1)',
              }}>
                {row.vehicle}
              </span>

              {/* Standard EV */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--text-2)',
                  }}>
                    {row.evRange}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-3)',
                  }}>
                    · {row.evCost}
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: 'rgba(255,255,255,0.05)',
                  overflow: 'hidden',
                }}>
                  <div
                    className="comparison-bar bar-ev"
                    style={{
                      width: animated ? `${row.evBar}%` : '0%',
                      transitionDelay: `${i * 150}ms`,
                    }}
                  />
                </div>
              </div>

              {/* IEG Powered */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--green)',
                  }}>
                    {row.iegRange}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-3)',
                  }}>
                    · {row.iegCost}
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: 'rgba(255,255,255,0.05)',
                  overflow: 'hidden',
                }}>
                  <div
                    className="comparison-bar bar-ieg"
                    style={{
                      width: animated ? `${row.iegBar}%` : '0%',
                      transitionDelay: `${i * 150 + 200}ms`,
                    }}
                  />
                </div>
              </div>

              {/* Savings */}
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: 'var(--amber)',
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'scale(1)' : 'scale(0.8)',
                  transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${i * 150 + 600}ms`,
                  display: 'inline-block',
                }}>
                  {row.saving}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.1em',
                  display: 'block',
                  color: 'var(--text-3)',
                  marginTop: '2px',
                }}>
                  LESS
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="comp-reveal" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-3)',
          marginTop: '16px',
          letterSpacing: '0.05em',
        }}>
          * Based on IEG internal testing data. Standard EV costs include grid electricity at ₹9/kWh.
        </p>
      </div>
    </section>
  );
}
