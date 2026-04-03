'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from '@/components/three/ParticleField';
import { JOURNEY_MILESTONES, VALUE_PROPS, TEAM_MEMBERS, RECOGNITIONS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
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
        <ParticleField count={50} opacity={0.25} color="#F7941D" />
        <div className="hero-glow" />
        <div className="ieg-container relative z-10">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>About</span>
          <h1 className="display-hero reveal" style={{ maxWidth: '700px', marginBottom: '24px' }}>
            30 Years <span className="text-orange">In The Making</span>
          </h1>
          <p className="body-xl reveal" style={{ maxWidth: '600px' }}>
            One inventor. One vision. A technology that could change the world.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-center">
            <div className="reveal">
              <div className="glass-card overflow-hidden" style={{ aspectRatio: '3/4', position: 'relative' }}>
                <Image
                  src="/assets/pdf_page5_img1.png"
                  alt="Ajay Choudhary — Inventor & Managing Director"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>The Founder</span>
              <h2 className="display-md reveal" style={{ marginBottom: '8px' }}>Ajay Choudhary</h2>
              <p className="reveal body-md" style={{ color: 'var(--orange)', marginBottom: '24px' }}>
                Inventor, Scientist & Managing Director
              </p>
              <p className="reveal body-lg" style={{ marginBottom: '20px' }}>
                In 1993, Ajay Choudhary began independent research into internal energy generation — 
                a concept considered impossible by most. Through a decade of relentless experimentation, 
                he achieved a breakthrough in 2003: a generator that could produce more energy output 
                than its input.
              </p>
              <p className="reveal body-md" style={{ marginBottom: '20px' }}>
                In 2004, he presented his invention to Dr. APJ Abdul Kalam, the President of India, 
                and received personal recognition from the Presidential Secretariat. The working 
                prototype was completed in 2011, the same year Patent No. 391051 was filed.
              </p>
              <p className="reveal body-md" style={{ marginBottom: '28px' }}>
                After a 10-year patent examination process, the patent was officially granted in 2022. 
                In 2024, IEG Vidaka Powers Ltd. was formally incorporated, and in January 2025, 
                a second patent (No. 557845) was granted for the System for Regeneration of Internal Energy.
              </p>
              <div className="reveal glass-card" style={{ padding: '24px', borderLeft: '3px solid var(--orange)' }}>
                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontStyle: 'italic',
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'var(--text-2)',
                }}>
                  &ldquo;From a small workshop to two government patents — the IEG system proves that 
                  energy independence is possible.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>The Journey</span>
            <h2 className="display-md reveal">30+ Years to <span className="text-orange">This Moment</span></h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {JOURNEY_MILESTONES.map((m, i) => (
              <div key={m.year} className="reveal" style={{ marginBottom: i < JOURNEY_MILESTONES.length - 1 ? '0' : '0' }}>
                <div className="roadmap-step" style={{ paddingBottom: '32px' }}>
                  <div className="roadmap-dot" />
                  <span style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 800,
                    fontSize: '28px',
                    color: 'var(--orange)',
                    display: 'block',
                    marginBottom: '4px',
                  }}>
                    {m.year}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'var(--text-1)',
                    display: 'block',
                    marginBottom: '6px',
                  }}>
                    {m.title}
                  </span>
                  <p className="body-md">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Vision</span>
            <h2 className="display-md reveal" style={{ marginBottom: '16px' }}>
              Making the Globe More <span className="text-orange">Sustainable</span>
            </h2>
            <p className="body-lg reveal" style={{ maxWidth: '560px', margin: '0 auto' }}>
              For future generations — through clean, self-sustaining, zero-emission energy technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((v) => (
              <div key={v.title} className="reveal glass-card text-center" style={{ padding: '32px 20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: 'var(--text-1)',
                  marginBottom: '8px',
                }}>
                  {v.title}
                </h3>
                <p className="body-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Leadership</span>
            <h2 className="display-md reveal">The <span className="text-orange">Team</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="reveal team-card text-center">
                {/* Avatar placeholder */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--orange)',
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'var(--text-1)',
                  marginBottom: '4px',
                  lineHeight: 1.3,
                }}>
                  {member.name}
                </h3>
                <span className="body-sm" style={{ display: 'block', marginBottom: '2px' }}>{member.role}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-3)', letterSpacing: '0.04em' }}>
                  {member.focus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION WALL */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Recognition</span>
            <h2 className="display-md reveal">Recognized By <span className="text-orange">The Best</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {RECOGNITIONS.map((rec) => (
              <div key={rec.name} className="reveal glass-card" style={{ padding: '40px 32px' }}>
                <div style={{ fontSize: '48px', lineHeight: 1, color: 'var(--orange)', opacity: 0.2, fontFamily: 'var(--font-syne)', marginBottom: '-10px' }}>&ldquo;</div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontStyle: 'italic', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-2)', marginBottom: '24px' }}>
                  {rec.quote}
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '16px', color: 'var(--text-1)', display: 'block', marginBottom: '2px' }}>
                    {rec.name}
                  </span>
                  <span className="body-sm">{rec.title} · <span style={{ color: 'var(--orange)' }}>{rec.year}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
