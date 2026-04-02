'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: '01', title: 'Magnetic Flux Stabilization', desc: 'A patented arrangement of magnetic elements creates a self-stabilizing flux field, generating initial torque without external input.' },
  { num: '02', title: 'The Regenerative Loop', desc: 'BLDC Motor drives the IEG MB Generator, which produces excess energy fed back through the Battery Charger — a continuous closed loop.' },
  { num: '03', title: 'Continuous Output', desc: 'The system delivers stable 240V / 50Hz AC output continuously — enough to power appliances, vehicles, and industrial equipment.' },
];

function EnergyFlowDiagram() {
  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ background: 'white', border: '1px solid rgba(8,12,8,0.08)', aspectRatio: '4/3' }}>
      <svg viewBox="0 0 500 380" className="w-full h-full" style={{ padding: '20px' }}>
        <rect x="30" y="140" width="100" height="60" rx="8" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="80" y="166" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="600">BATTERY</text>
        <text x="80" y="182" textAnchor="middle" fill="#F59E0B" fontSize="9" opacity="0.5">12V–60V</text>
        <rect x="200" y="30" width="100" height="60" rx="8" fill="none" stroke="#1A6B3C" strokeWidth="1.5" />
        <text x="250" y="56" textAnchor="middle" fill="#1A6B3C" fontSize="11" fontWeight="600">BLDC MOTOR</text>
        <text x="250" y="72" textAnchor="middle" fill="#1A6B3C" fontSize="9" opacity="0.5">Torque Drive</text>
        <rect x="370" y="140" width="100" height="60" rx="8" fill="#1A6B3C" fillOpacity="0.06" stroke="#1A6B3C" strokeWidth="1.5" />
        <text x="420" y="163" textAnchor="middle" fill="#1A6B3C" fontSize="11" fontWeight="600">IEG MB</text>
        <text x="420" y="178" textAnchor="middle" fill="#1A6B3C" fontSize="10" fontWeight="600">GENERATOR</text>
        <rect x="200" y="280" width="100" height="60" rx="8" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="250" y="305" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="600">BATTERY</text>
        <text x="250" y="322" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="600">CHARGER</text>
        <path d="M130 155 L200 75" fill="none" stroke="#1A6B3C" strokeWidth="1.5" className="energy-path" opacity="0.5" />
        <polygon points="200,75 192,82 197,82" fill="#1A6B3C" opacity="0.6" />
        <path d="M300 75 L370 155" fill="none" stroke="#1A6B3C" strokeWidth="1.5" className="energy-path" opacity="0.5" />
        <polygon points="370,155 363,148 368,148" fill="#1A6B3C" opacity="0.6" />
        <path d="M420 200 L300 290" fill="none" stroke="#1A6B3C" strokeWidth="1.5" className="energy-path" opacity="0.5" />
        <polygon points="300,290 307,283 302,283" fill="#1A6B3C" opacity="0.6" />
        <path d="M200 310 L80 200" fill="none" stroke="#F59E0B" strokeWidth="1.5" className="energy-path" opacity="0.5" />
        <polygon points="80,200 87,193 82,193" fill="#F59E0B" opacity="0.6" />
        <circle r="3.5" fill="#1A6B3C" opacity="0.8"><animateMotion dur="2.5s" repeatCount="indefinite"><mpath href="#f1" /></animateMotion></circle>
        <circle r="3.5" fill="#1A6B3C" opacity="0.8"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.6s"><mpath href="#f2" /></animateMotion></circle>
        <circle r="3.5" fill="#1A6B3C" opacity="0.8"><animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s"><mpath href="#f3" /></animateMotion></circle>
        <circle r="3" fill="#F59E0B" opacity="0.9"><animateMotion dur="2.5s" repeatCount="indefinite" begin="1.8s"><mpath href="#f4" /></animateMotion></circle>
        <path id="f1" d="M130 155 L200 75" fill="none" stroke="none" />
        <path id="f2" d="M300 75 L370 155" fill="none" stroke="none" />
        <path id="f3" d="M420 200 L300 290" fill="none" stroke="none" />
        <path id="f4" d="M200 310 L80 200" fill="none" stroke="none" />
      </svg>
    </div>
  );
}

export default function TechnologySection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.tech-reveal'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} className="section-light relative overflow-hidden" style={{ padding: '100px 0' }}>
      <div className="ieg-container relative z-10">
        <div className="tech-reveal mb-12">
          <span className="section-label-dark" style={{ display: 'block', marginBottom: '16px' }}>Core IP & Research</span>
          <h2 className="display-lg" style={{ color: '#080C08' }}>
            The Science of <span style={{ color: 'var(--green-deep)' }}>Self-Regeneration</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="tech-reveal"><EnergyFlowDiagram /></div>
          <div>
            {STEPS.map((step) => (
              <div key={step.num} className="tech-reveal" style={{
                display: 'grid', gridTemplateColumns: '32px 1fr', gap: '16px',
                padding: '24px 0', borderTop: '1px solid rgba(8,12,8,0.06)', alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '22px', color: 'rgba(26,107,60,0.12)' }}>
                  {step.num}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '17px', color: '#080C08', marginBottom: '6px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', lineHeight: 1.7, color: 'rgba(8,12,8,0.5)' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
