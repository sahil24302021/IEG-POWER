'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY_IEG } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function WhyIEGSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Heading — clip reveal
    gsap.from(ref.current.querySelectorAll('.why-heading'), {
      y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
    });

    // Cards — staggered scale + rotate + fade
    const cards = ref.current.querySelectorAll('.why-card');
    gsap.from(cards, {
      y: 80,
      opacity: 0,
      scale: 0.9,
      rotateY: 8,
      duration: 1,
      stagger: 0.15,
      ease: 'power4.out',
      scrollTrigger: { trigger: ref.current.querySelector('.why-grid'), start: 'top 85%', toggleActions: 'play none none none' },
    });

    // Icon bounce on each card when visible
    cards.forEach((card) => {
      const icon = card.querySelector('.why-icon');
      if (icon) {
        gsap.from(icon, {
          scale: 0, rotation: -180, duration: 0.8, ease: 'elastic.out(1,0.5)',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
          delay: 0.3,
        });
      }
    });
  }, []);

  return (
    <section ref={ref} className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div className="ieg-container">
        <div className="text-center mb-14">
          <span className="why-heading section-label" style={{ display: 'block', marginBottom: '12px' }}>Why IEG</span>
          <h2 className="why-heading display-md">Energy <span className="text-orange">Redefined</span></h2>
        </div>

        <div className="why-grid grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_IEG.map((item, i) => (
            <div key={item.title} className="why-card glass-card" style={{ padding: '28px 22px', textAlign: 'center' }}>
              <div className="why-icon" style={{
                fontSize: item.icon.length > 2 ? '28px' : '32px',
                fontFamily: item.icon.length > 2 ? 'var(--font-syne)' : undefined,
                fontWeight: item.icon.length > 2 ? 800 : undefined,
                color: i === 3 ? 'var(--orange)' : undefined,
                marginBottom: '16px',
                lineHeight: 1,
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '15px',
                color: 'var(--text-1)',
                marginBottom: '8px',
              }}>
                {item.title}
              </h3>
              <p className="body-sm" style={{ fontSize: '13px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
