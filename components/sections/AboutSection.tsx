'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.reveal'), {
      y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    });
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — story */}
          <div>
            <p className="reveal label mb-4">About</p>
            <h2 className="reveal heading-lg mb-6">
              30 years of research.{' '}
              <span style={{ color: 'var(--text-muted)' }}>One breakthrough.</span>
            </h2>
            <div className="space-y-4">
              <p className="reveal body">
                IEG Vidaka Powers has developed a patented Internal Energy Generation system — 
                a closed-loop architecture that produces electricity without fuel, grid connection, 
                or external charging.
              </p>
              <p className="reveal body">
                Founded on 30+ years of research by inventor Ajay Choudhary, who first presented 
                the technology to Dr. APJ Abdul Kalam in 2004. The Indian Government granted 
                Patent No. 391051 in 2022.
              </p>
            </div>
          </div>

          {/* Right — milestones */}
          <div className="space-y-4 lg:pt-12">
            {[
              { year: '1993', title: 'Research begins', desc: 'Ajay Choudhary starts work on internal energy generation' },
              { year: '2004', title: 'Presidential review', desc: 'Technology presented to Dr. APJ Abdul Kalam' },
              { year: '2022', title: 'Patent granted', desc: 'Government of India Patent No. 391051' },
              { year: '2024', title: 'Company formed', desc: 'IEG Vidaka Powers Ltd. incorporated' },
            ].map((m) => (
              <div key={m.year} className="reveal flex gap-5 items-start p-4 rounded-lg transition-colors hover:bg-white/[0.02]">
                <span className="text-2xl font-semibold tracking-tight shrink-0 w-16" style={{ color: 'var(--accent)' }}>
                  {m.year}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{m.title}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
