'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import IEGFlowDiagram from '@/components/ui/IEGFlowDiagram';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TechTeaser() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    // Heading & text reveal
    gsap.from('.tech-reveal', {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%', toggleActions: 'play none none none' },
    });

    // Diagram slides from left on desktop
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      gsap.fromTo('.tech-diagram-wrap',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
    });
    mm.add('(max-width: 1023px)', () => {
      gsap.fromTo('.tech-diagram-wrap',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="ieg-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Diagram */}
          <div className="tech-diagram-wrap order-2 lg:order-1">
            <div className="glass-card" style={{ padding: 'clamp(12px, 3vw, 32px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%' }}>
                <IEGFlowDiagram />
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2">
            <span className="tech-reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>
              How It Works
            </span>
            <h2 className="tech-reveal display-md" style={{ marginBottom: 'clamp(16px, 3vw, 24px)' }}>
              The IEG <span className="text-orange">Regeneration</span> Loop
            </h2>
            <p className="tech-reveal body-lg" style={{ marginBottom: 'clamp(14px, 2vw, 20px)', maxWidth: '480px' }}>
              In the concept working of IEG technology, the battery is connected to an electronic controller which regulates power delivery to the BLDC motor. The battery operates at approximately 85% efficiency, while the controller transfers power to the motor with about 95% efficiency.
            </p>
            <p className="tech-reveal body-md" style={{ marginBottom: 'clamp(20px, 3vw, 32px)', maxWidth: '480px' }}>
              The BLDC motor functions at around 80% efficiency and converts electrical energy into mechanical rotational energy. This output is coupled to the IEG system, creating a closed loop through an alternator, sending power back to the motor to maintain operation while providing usable output.
            </p>
            <div className="tech-reveal">
              <Link href="/technology" className="btn-sm magnetic-btn">
                Deep Dive Into The Tech
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
