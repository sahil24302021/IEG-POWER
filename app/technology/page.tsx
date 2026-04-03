'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from '@/components/three/ParticleField';
import { BRAND, COMPARISON_TWO_WHEELER, COMPARISON_RUNNING_COST, GENERATOR_SPECS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 50, opacity: 0, duration: 0.8, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative" style={{ padding: '160px 0 100px', background: 'var(--bg-primary)' }}>
        <ParticleField count={60} opacity={0.3} />
        <div className="hero-glow" style={{ right: '10%', top: '30%' }} />
        <div className="ieg-container relative z-10">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Technology</span>
          <h1 className="display-hero reveal" style={{ maxWidth: '800px', marginBottom: '24px' }}>
            The Science of <span className="text-orange">Self-Sustaining</span> Power
          </h1>
          <p className="body-xl reveal" style={{ maxWidth: '600px' }}>
            A patented internal energy regeneration paradigm that eliminates dependency on external power sources.
          </p>
        </div>
      </section>

      {/* IEG CONCEPT */}
      <section className="section-pad reveal" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>The IEG System</span>
              <h2 className="display-md" style={{ marginBottom: '24px' }}>
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
              <p className="body-md">
                The result: stable 240V/50Hz AC power output, running up to 18 hours per day, 
                with zero fuel, zero grid dependency, and near-zero operational costs.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '40px', aspectRatio: '1' }}>
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
                <text x="200" y="200" textAnchor="middle" fill="rgba(247,148,29,0.15)" fontSize="32" fontWeight="800" fontFamily="var(--font-syne)">IEG</text>
                <text x="200" y="220" textAnchor="middle" fill="rgba(255,255,255,0.08)" fontSize="8" fontFamily="monospace" letterSpacing="0.2em">SELF-REGENERATING</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PATENTS */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Intellectual Property</span>
            <h2 className="display-md reveal">Government-Granted <span className="text-orange">Patents</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[BRAND.patent1, BRAND.patent2].map((patent) => (
              <div key={patent.number} className="reveal glass-card" style={{ padding: '40px 32px' }}>
                <span className="stat-pill" style={{ marginBottom: '20px', display: 'inline-block', borderColor: 'var(--orange-dim)', color: 'var(--orange)' }}>
                  Patent No. {patent.number}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '22px',
                  color: 'var(--text-1)',
                  marginBottom: '16px',
                }}>
                  {patent.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div className="flex justify-between">
                    <span className="mono-label">Filed</span>
                    <span className="body-sm" style={{ color: 'var(--text-2)' }}>{patent.filed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="mono-label">Granted</span>
                    <span className="body-sm" style={{ color: 'var(--text-2)' }}>{patent.granted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="mono-label">Patentee</span>
                    <span className="body-sm" style={{ color: 'var(--text-2)' }}>{patent.patentee}</span>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
                    Intellectual Property India — Government of India
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE 1 — Petrol vs Electric vs IEG */}
      <section className="section-pad reveal" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>Comparison</span>
          <h2 className="display-md" style={{ marginBottom: '40px' }}>
            Petrol vs Electric vs <span className="text-orange">IEG</span>
          </h2>
          <div style={{ overflow: 'auto' }}>
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
                  <tr key={i}>
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

      {/* COMPARISON TABLE 2 — Running Cost */}
      <section className="section-pad reveal" style={{ background: 'var(--bg-primary)' }}>
        <div className="ieg-container">
          <h2 className="display-md" style={{ marginBottom: '40px' }}>
            EV vs IEG: <span className="text-orange">Running Cost</span>
          </h2>
          <div className="grid gap-8">
            {(['twoWheeler', 'fourWheeler', 'rickshaw'] as const).map((key) => {
              const d = COMPARISON_RUNNING_COST[key];
              const label = key === 'twoWheeler' ? '2-Wheeler' : key === 'fourWheeler' ? '4-Wheeler' : 'E-Rickshaw';
              return (
                <div key={key} className="glass-card" style={{ padding: '28px 32px' }}>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px', color: 'var(--text-1)', minWidth: '120px' }}>
                      {label}
                    </h3>
                    <div className="flex-1 grid grid-cols-2 gap-8">
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
      <section className="section-pad reveal" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>Specifications</span>
          <h2 className="display-md" style={{ marginBottom: '40px' }}>
            IEG Power Station <span className="text-orange">Specs</span>
          </h2>
          <div style={{ overflow: 'auto' }}>
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
                    rating: 'Rating',
                    harmonics: 'Harmonics',
                    battery: 'Battery',
                    output1Phase: '1-Phase Output',
                    output3Phase: '3-Phase Output',
                    noise: 'Noise Level',
                    runtime: 'Daily Runtime',
                  };
                  return (
                    <tr key={key}>
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