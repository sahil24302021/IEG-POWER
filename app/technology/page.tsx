'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';
import ParticleBg from '@/components/ui/ParticleBg';
import { BRAND, COMPARISON_TWO_WHEELER, COMPARISON_RUNNING_COST, GENERATOR_SPECS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.fromTo('.tech-hero-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.tech-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.2 });
      gsap.fromTo('.tech-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.35 });

      // Section reveals
      ref.current!.querySelectorAll('.reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      // Stat numbers blur-in
      ref.current!.querySelectorAll('.spec-row').forEach((el, i) => {
        gsap.fromTo(el,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, delay: i * 0.05, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO — Full viewport cinematic */}
      <section className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <GradientMesh />
        <div className="grid-bg" />

        <div className="ieg-container relative z-10">
          <span className="tech-hero-label section-label" style={{ display: 'block', marginBottom: '20px', opacity: 0 }}>
            [ 01 — Technology ]
          </span>
          <h1 className="tech-hero-title" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-1)', maxWidth: '900px', marginBottom: '28px', opacity: 0 }}>
            The Science of <span className="gradient-text">Self-Sustaining</span> Power
          </h1>
          <p className="tech-hero-sub body-xl" style={{ maxWidth: '620px', opacity: 0 }}>
            A patented internal energy regeneration paradigm that eliminates 
            dependency on external power sources — forever.
          </p>

          {/* Scroll indicator */}
          <div className="scroll-indicator" style={{ position: 'absolute', bottom: '40px', left: '50%' }}>
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
              <rect x="1" y="1" width="14" height="26" rx="7" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
              <circle cx="8" cy="8" r="2" fill="var(--orange)">
                <animate attributeName="cy" values="8;18;8" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </section>

      {/* IEG CONCEPT — Cinematic split */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-glow-right" />
        <div className="ieg-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
                [ The IEG System ]
              </span>
              <h2 className="display-md" style={{ marginBottom: '28px' }}>
                How Internal Energy <span className="text-orange">Regeneration</span> Works
              </h2>
              <p className="body-lg" style={{ marginBottom: '20px' }}>
                A standard battery (12V–60V) powers a high-efficiency BLDC Motor (~90% efficiency). 
                This motor drives the patented IEG MB Generator, which uses advanced magnetic boost 
                technology to produce significantly more electrical energy than is consumed.
              </p>
              <p className="body-md" style={{ marginBottom: '20px' }}>
                The system generates more output than conventional systems by leveraging internal magnetic 
                boost technology. Excess energy is continuously looped back through a Battery Charger to 
                recharge the power source — creating a truly self-sustaining energy cycle.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="stat-pill" style={{ borderColor: 'var(--orange-dim)', color: 'var(--orange)' }}>180%+ Output</span>
                <span className="stat-pill" style={{ borderColor: 'var(--orange-dim)', color: 'var(--orange)' }}>240V/50Hz AC</span>
                <span className="stat-pill" style={{ borderColor: 'rgba(27,115,64,0.15)', color: 'var(--green)' }}>Zero Fuel</span>
              </div>
            </div>

            {/* Animated Diagram */}
            <div className="reveal glass-card" style={{ padding: 'clamp(16px, 5vw, 40px)', aspectRatio: '1' }}>
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <rect x="150" y="20" width="100" height="50" rx="6" fill="none" stroke="#F7941D" strokeWidth="1.5" opacity="0.8" />
                <text x="200" y="42" textAnchor="middle" fill="#F7941D" fontSize="10" fontWeight="700" fontFamily="monospace">BATTERY</text>
                <text x="200" y="56" textAnchor="middle" fill="#8C9BAB" fontSize="8" fontFamily="monospace">12V–60V</text>
                <rect x="300" y="150" width="90" height="50" rx="6" fill="none" stroke="#1B7340" strokeWidth="1.5" opacity="0.8" />
                <text x="345" y="172" textAnchor="middle" fill="#1B7340" fontSize="9" fontWeight="700" fontFamily="monospace">BLDC MOTOR</text>
                <text x="345" y="188" textAnchor="middle" fill="#8C9BAB" fontSize="8" fontFamily="monospace">~90% eff.</text>
                <rect x="150" y="290" width="100" height="60" rx="6" fill="rgba(247,148,29,0.08)" stroke="#F7941D" strokeWidth="2" />
                <text x="200" y="315" textAnchor="middle" fill="#F7941D" fontSize="10" fontWeight="700" fontFamily="monospace">IEG MB</text>
                <text x="200" y="330" textAnchor="middle" fill="#F7941D" fontSize="9" fontWeight="700" fontFamily="monospace">GENERATOR</text>
                <text x="200" y="345" textAnchor="middle" fill="#8C9BAB" fontSize="7" fontFamily="monospace">180%+ output</text>
                <rect x="10" y="150" width="90" height="50" rx="6" fill="none" stroke="#F7941D" strokeWidth="1.5" opacity="0.8" />
                <text x="55" y="170" textAnchor="middle" fill="#F7941D" fontSize="8" fontWeight="700" fontFamily="monospace">BATTERY</text>
                <text x="55" y="184" textAnchor="middle" fill="#F7941D" fontSize="8" fontWeight="700" fontFamily="monospace">CHARGER</text>
                <path d="M250 50 Q340 50 340 150" fill="none" stroke="#1B7340" strokeWidth="1.5" className="energy-path" opacity="0.5" />
                <path d="M340 200 Q340 290 250 310" fill="none" stroke="#F7941D" strokeWidth="1.5" className="energy-path" opacity="0.5" />
                <path d="M150 310 Q60 290 55 200" fill="none" stroke="#F7941D" strokeWidth="1.5" className="energy-path" opacity="0.5" />
                <path d="M55 150 Q55 50 150 40" fill="none" stroke="#F7941D" strokeWidth="1.5" className="energy-path" opacity="0.5" />
                <circle r="4" fill="#F7941D" opacity="0.8"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#tflow1" /></animateMotion></circle>
                <circle r="4" fill="#1B7340" opacity="0.8"><animateMotion dur="3s" repeatCount="indefinite" begin="0.75s"><mpath href="#tflow2" /></animateMotion></circle>
                <circle r="4" fill="#F7941D" opacity="0.8"><animateMotion dur="3s" repeatCount="indefinite" begin="1.5s"><mpath href="#tflow3" /></animateMotion></circle>
                <circle r="3.5" fill="#F7941D" opacity="0.8"><animateMotion dur="3s" repeatCount="indefinite" begin="2.25s"><mpath href="#tflow4" /></animateMotion></circle>
                <path id="tflow1" d="M250 50 Q340 50 340 150" fill="none" stroke="none" />
                <path id="tflow2" d="M340 200 Q340 290 250 310" fill="none" stroke="none" />
                <path id="tflow3" d="M150 310 Q60 290 55 200" fill="none" stroke="none" />
                <path id="tflow4" d="M55 150 Q55 50 150 40" fill="none" stroke="none" />
                <text x="200" y="200" textAnchor="middle" fill="rgba(247,148,29,0.12)" fontSize="32" fontWeight="800" fontFamily="var(--font-syne)">IEG</text>
                <text x="200" y="220" textAnchor="middle" fill="rgba(255,255,255,0.06)" fontSize="8" fontFamily="monospace" letterSpacing="0.2em">SELF-REGENERATING</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* IEG ARCHITECTURE & MORE ABOUT THE TECHNOLOGY */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Engineering Architecture ]</span>
            <h2 className="reveal display-md">The <span className="gradient-text">Concept</span> & Blueprint</h2>
            <p className="reveal body-lg mt-6 max-w-3xl mx-auto">
              Our patented internal loop isn't just theory—it is a functional blueprint that 
              bypasses the constraints of conventional power loss. Below is the simplified flow 
              of how the IEG unit powers the future.
            </p>
          </div>

          <div className="reveal glass-card flex justify-center items-center" style={{ padding: '8px', marginBottom: '60px', border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
            <div className="w-full max-w-5xl" style={{ borderRadius: '8px', overflow: 'hidden', background: '#ffffff', display: 'flex' }}>
              <img 
                src="/assets/images/ieg-diagram.jpg" 
                alt="IEG Concept Schematic" 
                className="w-full h-auto"
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="reveal glass-card" style={{ padding: 'clamp(24px, 5vw, 32px)' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 600, color: 'var(--orange)', marginBottom: '16px' }}>
                Energy Amplification
              </h3>
              <p className="body-sm text-gray-400">
                Through advanced Magnetic Boost (MB) integration, the system intercepts back-EMF 
                and multiplies the base magnetic flux. This allows the generator to output up to 180% 
                of the power it takes to drive the motor, fundamentally outperforming standard alternators.
              </p>
            </div>
            
            <div className="reveal glass-card" style={{ padding: 'clamp(24px, 5vw, 32px)' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 600, color: 'var(--green)', marginBottom: '16px' }}>
                Closed-Loop Regeneration
              </h3>
              <p className="body-sm text-gray-400">
                A calibrated smart battery charger routes a calculated portion of the excess energy 
                back to the primary 12V-60V batteries. Because the generation rate outpaces both the 
                load draw and battery depletion, the system becomes a continuous, self-sustaining loop.
              </p>
            </div>

            <div className="reveal glass-card" style={{ padding: 'clamp(24px, 5vw, 32px)' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '16px' }}>
                Total Grid Independence
              </h3>
              <p className="body-sm text-gray-400">
                Producing perfectly stable 240V/50Hz AC power with an integrated inverter stage, the IEG 
                operates entirely off-grid. With zero fossil fuels required, it drastically cuts operating 
                costs and completely removes carbon emissions from the power-generation cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PATENTS — Cinematic cards */}
      <section className="section-pad relative" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-glow-left" />
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Intellectual Property ]</span>
            <h2 className="reveal display-md">Government-Granted <span className="gradient-text">Patents</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[BRAND.patent1, BRAND.patent2].map((patent) => (
              <div key={patent.number} className="reveal glass-card" style={{ padding: 'clamp(28px, 6vw, 44px) clamp(20px, 5vw, 36px)' }}>
                <span className="tag orbit-badge" style={{ marginBottom: '24px', display: 'inline-flex' }}>
                  Patent No. {patent.number}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '22px',
                  color: 'var(--text-1)',
                  marginBottom: '20px',
                }}>
                  {patent.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {[
                    ['Filed', patent.filed],
                    ['Granted', patent.granted],
                    ['Patentee', patent.patentee],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                      <span className="mono-label">{label}</span>
                      <span className="body-sm" style={{ color: 'var(--text-2)' }}>{value}</span>
                    </div>
                  ))}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
                  Intellectual Property India — Government of India
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE 1 */}
      <section className="section-pad reveal" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Comparison ]</span>
          <h2 className="display-md" style={{ marginBottom: '40px' }}>
            Petrol vs Electric vs <span className="gradient-text">IEG</span>
          </h2>
          <div className="glass-card" style={{ overflowX: 'auto', padding: '0', WebkitOverflowScrolling: 'touch' }}>
            <table className="ieg-table" style={{ minWidth: '700px' }}>
              <thead>
                <tr>
                  {COMPARISON_TWO_WHEELER.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TWO_WHEELER.rows.map((row, i) => (
                  <tr key={i} className="spec-row">
                    {row.map((cell, j) => (
                      <td key={j} className={j === 3 ? 'ieg-highlight' : ''} style={{ fontWeight: j === 3 ? 600 : 400 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMPARISON 2 — Running Cost */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="ieg-container">
          <h2 className="reveal display-md" style={{ marginBottom: '40px' }}>
            EV vs IEG: <span className="gradient-text">Running Cost</span>
          </h2>
          <div className="grid gap-6">
            {(['twoWheeler', 'fourWheeler', 'rickshaw'] as const).map((key) => {
              const d = COMPARISON_RUNNING_COST[key];
              const label = key === 'twoWheeler' ? '2-Wheeler' : key === 'fourWheeler' ? '4-Wheeler' : 'E-Rickshaw';
              return (
                <div key={key} className="reveal glass-card" style={{ padding: 'clamp(24px, 5vw, 32px) clamp(20px, 5vw, 36px)' }}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-6">
                    <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 'clamp(18px, 5vw, 22px)', color: 'var(--text-1)', minWidth: '130px' }}>
                      {label}
                    </h3>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-2 md:mt-0">
                      <div>
                        <span className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Standard EV</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-2)' }}>
                          {d.ev.range} · {d.ev.cost} · <strong style={{ color: '#EF4444' }}>{d.ev.perKm}/km</strong>
                        </span>
                      </div>
                      <div>
                        <span className="mono-label" style={{ display: 'block', marginBottom: '8px', color: 'var(--orange)' }}>IEG Powered</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-2)' }}>
                          {d.ieg.range} · {d.ieg.cost} · <strong style={{ color: 'var(--green)' }}>{d.ieg.perKm}/km</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECS */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Specifications ]</span>
          <h2 className="reveal display-md" style={{ marginBottom: '40px' }}>
            IEG Power Station <span className="gradient-text">Specs</span>
          </h2>
          <div className="glass-card" style={{ overflowX: 'auto', padding: '0', WebkitOverflowScrolling: 'touch' }}>
            <table className="ieg-table" style={{ minWidth: '600px' }}>
              <thead>
                <tr>
                  <th>Spec</th>
                  {GENERATOR_SPECS.models.map((m) => (
                    <th key={m.name}>{m.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(['rating', 'harmonics', 'battery', 'output1Phase', 'output3Phase', 'noise', 'runtime'] as const).map((key) => {
                  const labels: Record<string, string> = {
                    rating: 'Rating', harmonics: 'Harmonics', battery: 'Battery',
                    output1Phase: '1-Phase Output', output3Phase: '3-Phase Output',
                    noise: 'Noise Level', runtime: 'Daily Runtime',
                  };
                  return (
                    <tr key={key} className="spec-row">
                      <td style={{ fontWeight: 500, color: 'var(--text-1)' }}>{labels[key]}</td>
                      {GENERATOR_SPECS.models.map((m) => (
                        <td key={m.name} className={key === 'runtime' ? 'ieg-highlight' : ''}>{m[key]}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}