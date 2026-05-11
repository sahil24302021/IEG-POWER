'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';
import ParticleBg from '@/components/ui/ParticleBg';
import { JOURNEY_MILESTONES, VALUE_PROPS, TEAM_MEMBERS, RECOGNITIONS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero-label', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.about-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.2 });
      gsap.fromTo('.about-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.35 });

      ref.current!.querySelectorAll('.reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      // Timeline items stagger
      ref.current!.querySelectorAll('.timeline-item').forEach((el, i) => {
        gsap.fromTo(el,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, delay: i * 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
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
          <span className="about-hero-label section-label" style={{ display: 'block', marginBottom: '20px', opacity: 0 }}>
            [ 04 — About ]
          </span>
          <h1 className="about-hero-title" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-1)', maxWidth: '700px', marginBottom: '28px', opacity: 0 }}>
            30 Years <span className="gradient-text">In The Making</span>
          </h1>
          <p className="about-hero-sub body-xl" style={{ maxWidth: '600px', opacity: 0 }}>
            One inventor. One vision. A technology that could change the world.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-center">
            <div className="reveal">
              <div className="glass-card overflow-hidden" style={{ aspectRatio: '3/4', position: 'relative' }}>
                <Image
                  src="/assets/founder.png"
                  alt="Ajay Choudhary — Inventor & Managing Director"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ The Founder ]</span>
              <h2 className="reveal display-md" style={{ marginBottom: '8px' }}>Ajay Choudhary</h2>
              <p className="reveal body-md" style={{ color: 'var(--gold)', marginBottom: '28px' }}>
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
              <p className="reveal body-md" style={{ marginBottom: '32px' }}>
                After a 10-year patent examination process, the patent was officially granted in 2022. 
                In 2024, IEG Auto Powers Ltd. was formally incorporated, and in January 2025, 
                a second patent (No. 557845) was granted for the System for Regeneration of Internal Energy.
              </p>
              <div className="reveal glass-card" style={{ padding: 'clamp(20px, 3vw, 28px)', borderLeft: '3px solid var(--gold)' }}>
                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
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
      <section className="section-pad relative" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-glow-left" />
        <div className="ieg-container">
          <div className="text-center" style={{ marginBottom: 'clamp(32px, 5vw, 64px)' }}>
            <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ The Journey ]</span>
            <h2 className="reveal display-md">30+ Years to <span className="gradient-text">This Moment</span></h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {JOURNEY_MILESTONES.map((m, i) => (
              <div key={m.year} className="timeline-item" style={{ marginBottom: i < JOURNEY_MILESTONES.length - 1 ? '0' : '0' }}>
                <div className="roadmap-step" style={{ paddingBottom: '36px' }}>
                  <div className="roadmap-dot" />
                  <span style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 800,
                    fontSize: '32px',
                    color: 'var(--gold)',
                    display: 'block',
                    marginBottom: '6px',
                  }}>
                    {m.year}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: 'var(--text-1)',
                    display: 'block',
                    marginBottom: '8px',
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
          <div className="text-center" style={{ marginBottom: 'clamp(32px, 5vw, 64px)' }}>
            <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Vision ]</span>
            <h2 className="reveal display-md" style={{ marginBottom: '16px' }}>
              Making the Globe More <span className="gradient-text">Sustainable</span>
            </h2>
            <p className="reveal body-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
              For future generations — through clean, self-sustaining, zero-emission energy technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUE_PROPS.map((v) => (
              <div key={v.title} className="reveal glass-card text-center hover-lift" style={{ padding: '36px 24px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: v.icon === 'globe' || v.icon === 'leaf' ? 'rgba(27,115,64,0.08)' : v.icon === 'shield' ? 'rgba(46,134,193,0.08)' : 'rgba(201,162,39,0.06)', border: `1px solid ${v.icon === 'globe' || v.icon === 'leaf' ? 'rgba(27,115,64,0.15)' : v.icon === 'shield' ? 'rgba(46,134,193,0.15)' : 'rgba(201,162,39,0.12)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                  {v.icon === 'leaf' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B7340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22c3.3-3.3 6-8 6-15a12 12 0 0112 12c-7 0-11.7 2.7-15 3z"/><path d="M2 22L12 12"/></svg>
                  )}
                  {v.icon === 'globe' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B7340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  )}
                  {v.icon === 'shield' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E86C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                  )}
                  {v.icon === 'coin' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  )}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: 'var(--text-1)',
                  marginBottom: '10px',
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
          <div className="text-center" style={{ marginBottom: 'clamp(32px, 5vw, 64px)' }}>
            <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Board of Directors ]</span>
            <h2 className="reveal display-md">The <span className="gradient-text">Directors</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="reveal team-card text-center">
                <div style={{
                  width: 'clamp(56px, 8vw, 68px)',
                  height: 'clamp(56px, 8vw, 68px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--bg-secondary), rgba(27,111,168,0.1))',
                  border: '1px solid rgba(27,111,168,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  color: 'var(--blue)',
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  color: 'var(--text-1)',
                  marginBottom: '4px',
                  lineHeight: 1.3,
                }}>
                  {member.name}
                </h3>
                <span className="body-sm">{member.role}</span>
              </div>
            ))}
          </div>

          {/* Shareholders */}
          <div className="text-center" style={{ marginTop: 'clamp(48px, 6vw, 80px)', marginBottom: 'clamp(24px, 4vw, 40px)' }}>
            <h3 className="reveal" style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              color: 'var(--text-1)',
              marginBottom: '8px',
            }}>
              Shareholders
            </h3>
            <p className="reveal body-md" style={{ color: 'var(--text-3)' }}>Key stakeholders of the company</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="reveal glass-card text-center hover-lift" style={{ padding: '28px 16px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--bg-secondary), rgba(212,175,55,0.08))',
                  border: '1px solid rgba(212,175,55,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 600,
                  fontSize: '13px',
                  color: 'var(--text-2)',
                }}>
                  Share Holder
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="text-center" style={{ marginBottom: 'clamp(32px, 5vw, 64px)' }}>
            <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Recognition ]</span>
            <h2 className="reveal display-md">Recognized By <span className="gradient-text">The Best</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
            {RECOGNITIONS.map((rec) => (
              <div key={rec.name} className="reveal glass-card" style={{ padding: 'clamp(28px, 5vw, 44px) clamp(20px, 4vw, 36px)' }}>
                <div style={{ fontSize: 'clamp(36px, 5vw, 52px)', lineHeight: 1, color: 'var(--gold)', opacity: 0.15, fontFamily: 'var(--font-syne)', marginBottom: '-8px' }}>&ldquo;</div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontStyle: 'italic', fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 'clamp(18px, 3vw, 28px)' }}>
                  {rec.quote}
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 'clamp(14px, 1.6vw, 17px)', color: 'var(--text-1)', display: 'block', marginBottom: '4px' }}>
                    {rec.name}
                  </span>
                  <span className="body-sm">{rec.title} · <span style={{ color: 'var(--gold)' }}>{rec.year}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

