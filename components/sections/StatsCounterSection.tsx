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
    const ctx = gsap.context(() => {
      ref.current!.querySelectorAll('.stat-block').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative" style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '100px 0',
    }}>
      {/* Subtle gradient mesh */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(247,148,29,0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="ieg-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="stat-block text-center">
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 60px)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'var(--orange)',
                marginBottom: '14px',
              }}>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <span className="mono-label">{s.label}</span>
              {/* Animated underline */}
              <div style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, var(--orange), transparent)',
                margin: '14px auto 0',
                borderRadius: '1px',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
