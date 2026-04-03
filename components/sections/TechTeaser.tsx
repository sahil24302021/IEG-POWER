'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechTeaser() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll('.tech-reveal'), {
      y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 75%', toggleActions: 'play none none none' },
    });
  }, []);

  return (
    <section ref={ref} className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
      <div className="ieg-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Animated Diagram */}
          <div className="tech-reveal">
            <div className="glass-card" style={{ padding: '40px', aspectRatio: '1' }}>
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Battery */}
                <rect x="150" y="20" width="100" height="50" rx="6" fill="none" stroke="#F7941D" strokeWidth="1.5" opacity="0.8" />
                <text x="200" y="42" textAnchor="middle" fill="#F7941D" fontSize="10" fontWeight="700" fontFamily="monospace">BATTERY</text>
                <text x="200" y="56" textAnchor="middle" fill="#8C9BAB" fontSize="8" fontFamily="monospace">12V–60V</text>

                {/* BLDC Motor */}
                <rect x="300" y="150" width="90" height="50" rx="6" fill="none" stroke="#1B7340" strokeWidth="1.5" opacity="0.8" />
                <text x="345" y="172" textAnchor="middle" fill="#1B7340" fontSize="9" fontWeight="700" fontFamily="monospace">BLDC MOTOR</text>
                <text x="345" y="188" textAnchor="middle" fill="#8C9BAB" fontSize="8" fontFamily="monospace">~90% eff.</text>

                {/* IEG MB Generator */}
                <rect x="150" y="290" width="100" height="60" rx="6" fill="rgba(247,148,29,0.08)" stroke="#F7941D" strokeWidth="2" />
                <text x="200" y="315" textAnchor="middle" fill="#F7941D" fontSize="10" fontWeight="700" fontFamily="monospace">IEG MB</text>
                <text x="200" y="330" textAnchor="middle" fill="#F7941D" fontSize="9" fontWeight="700" fontFamily="monospace">GENERATOR</text>
                <text x="200" y="345" textAnchor="middle" fill="#8C9BAB" fontSize="7" fontFamily="monospace">180%+ output</text>

                {/* Battery Charger */}
                <rect x="10" y="150" width="90" height="50" rx="6" fill="none" stroke="#F7941D" strokeWidth="1.5" opacity="0.8" />
                <text x="55" y="170" textAnchor="middle" fill="#F7941D" fontSize="8" fontWeight="700" fontFamily="monospace">BATTERY</text>
                <text x="55" y="184" textAnchor="middle" fill="#F7941D" fontSize="8" fontWeight="700" fontFamily="monospace">CHARGER</text>

                {/* Flow arrows — animated energy paths */}
                <path d="M250 50 Q340 50 340 150" fill="none" stroke="#1B7340" strokeWidth="1.5" className="energy-path" opacity="0.5" />
                <path d="M340 200 Q340 290 250 310" fill="none" stroke="#F7941D" strokeWidth="1.5" className="energy-path" opacity="0.5" />
                <path d="M150 310 Q60 290 55 200" fill="none" stroke="#F7941D" strokeWidth="1.5" className="energy-path" opacity="0.5" />
                <path d="M55 150 Q55 50 150 40" fill="none" stroke="#F7941D" strokeWidth="1.5" className="energy-path" opacity="0.5" />

                {/* Animated particles along paths */}
                <circle r="4" fill="#F7941D" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#flow1" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="#1B7340" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0.75s">
                    <mpath href="#flow2" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="#F7941D" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#flow3" />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="#F7941D" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2.25s">
                    <mpath href="#flow4" />
                  </animateMotion>
                </circle>

                {/* Hidden paths for animateMotion */}
                <path id="flow1" d="M250 50 Q340 50 340 150" fill="none" stroke="none" />
                <path id="flow2" d="M340 200 Q340 290 250 310" fill="none" stroke="none" />
                <path id="flow3" d="M150 310 Q60 290 55 200" fill="none" stroke="none" />
                <path id="flow4" d="M55 150 Q55 50 150 40" fill="none" stroke="none" />

                {/* Center label */}
                <text x="200" y="200" textAnchor="middle" fill="rgba(247,148,29,0.15)" fontSize="32" fontWeight="800" fontFamily="var(--font-syne)">IEG</text>
                <text x="200" y="220" textAnchor="middle" fill="rgba(255,255,255,0.08)" fontSize="8" fontFamily="monospace" letterSpacing="0.2em">SELF-REGENERATING</text>
              </svg>
            </div>
          </div>

          {/* Right — Copy */}
          <div>
            <span className="tech-reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>
              How It Works
            </span>
            <h2 className="tech-reveal display-md" style={{ marginBottom: '24px' }}>
              The IEG <span className="text-orange">Regeneration</span> Loop
            </h2>
            <p className="tech-reveal body-lg" style={{ marginBottom: '20px', maxWidth: '480px' }}>
              IEG technology creates a closed-loop energy system. A standard battery activates a 
              high-efficiency BLDC Motor, which drives the patented IEG MB Generator — producing 
              significantly more energy than consumed.
            </p>
            <p className="tech-reveal body-md" style={{ marginBottom: '32px', maxWidth: '480px' }}>
              Excess energy is looped back to recharge the power source through the Battery Charger — 
              creating a self-sustaining cycle. The system delivers stable 240V/50Hz AC power 
              continuously. Zero fuel. Zero grid dependency.
            </p>
            <div className="tech-reveal">
              <Link href="/technology" className="btn-sm">
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
