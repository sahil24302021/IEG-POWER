'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';

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
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ paddingTop: 'clamp(90px, 12vw, 120px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
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

      {/* INDUSTRY APPLICATIONS */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="text-center" style={{ marginBottom: 'clamp(32px, 5vw, 64px)' }}>
            <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Applications ]</span>
            <h2 className="reveal display-md" style={{ marginBottom: '16px' }}>
              Industry Applications of <span className="gradient-text">IEG Technology</span>
            </h2>
            <p className="reveal body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
              IEG technology can be implemented across most energy-dependent industries, offering a practical alternative to conventional electrical systems.
            </p>
          </div>

          <div className="reveal" style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <Image
              src="/assets/industry-apps-grid.png"
              alt="IEG Industry Applications - Electric Two Wheeler, Three Wheeler, Car, Bus, Laptop Charger, Robots, Drones, Chula, Ships, AC, Fridge, Turbine, Solar, OT, Eco-House, Machines"
              width={3680}
              height={1155}
              quality={75}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
              }}
            />
          </div>

          <div className="reveal glass-card" style={{ padding: '28px 32px', marginTop: '32px', borderLeft: '3px solid var(--gold)' }}>
            <p className="body-md" style={{ color: 'var(--text-2)' }}>
              Across coal-powered infrastructure and large-scale industrial motor applications, the IEG System enhances high-level operational efficiency and energy performance. B2B clients can monitor real-time performance (voltage, current, output) of IEG systems through the IEG application, ensuring complete transparency and technical validation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}