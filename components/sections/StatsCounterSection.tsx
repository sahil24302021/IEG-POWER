'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        const duration = 2000;
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
      },
      once: true,
    });
    return () => trigger.kill();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsCounterSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.stat-block'), {
      y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '80px 0',
    }}>
      <div className="ieg-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="stat-block text-center">
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(40px, 6vw, 72px)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: 'var(--orange)',
                marginBottom: '12px',
              }}>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <span className="mono-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
