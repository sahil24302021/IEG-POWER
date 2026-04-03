'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from '@/components/three/ParticleField';
import { BRAND } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Investment', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 50, opacity: 0, duration: 0.8, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative" style={{ padding: '160px 0 60px', background: 'var(--bg-primary)' }}>
        <ParticleField count={40} opacity={0.2} />
        <div className="hero-glow" />
        <div className="ieg-container relative z-10">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Contact</span>
          <h1 className="display-hero reveal" style={{ maxWidth: '700px', marginBottom: '24px' }}>
            Let&apos;s Build A <span className="text-orange">Cleaner Future</span> — Together
          </h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            {/* LEFT — Contact Details */}
            <div>
              <div className="reveal" style={{ marginBottom: '48px' }}>
                <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '24px', color: 'var(--text-1)', marginBottom: '6px' }}>
                  Ajay Choudhary
                </h2>
                <p className="body-md" style={{ color: 'var(--orange)', marginBottom: '24px' }}>Founder & Managing Director</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>Mobile</span>
                    <a href={`tel:${BRAND.phone}`} className="body-md" style={{ color: 'var(--text-1)', textDecoration: 'none' }}>
                      {BRAND.phone}
                    </a>
                  </div>
                  <div>
                    <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>Email</span>
                    <a href={`mailto:${BRAND.founderEmail}`} className="body-md" style={{ color: 'var(--text-1)', textDecoration: 'none' }}>
                      {BRAND.founderEmail}
                    </a>
                  </div>
                  <div>
                    <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>Company Email</span>
                    <a href={`mailto:${BRAND.email}`} className="body-md" style={{ color: 'var(--text-1)', textDecoration: 'none' }}>
                      {BRAND.email}
                    </a>
                  </div>
                  <div>
                    <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>Website</span>
                    <span className="body-md" style={{ color: 'var(--text-1)' }}>{BRAND.website}</span>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ marginBottom: '40px' }}>
                <span className="mono-label" style={{ display: 'block', marginBottom: '12px', color: 'var(--orange)' }}>Locations</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="glass-card" style={{ padding: '16px 20px' }}>
                    <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>HQ & R&D</span>
                    <p className="body-sm" style={{ color: 'var(--text-2)' }}>{BRAND.hq}</p>
                  </div>
                  <div className="glass-card" style={{ padding: '16px 20px' }}>
                    <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>Manufacturing</span>
                    <p className="body-sm" style={{ color: 'var(--text-2)' }}>{BRAND.factory}</p>
                  </div>
                </div>
              </div>

              {/* Inquiry type cards */}
              <div className="reveal grid gap-3">
                {['Investor Inquiry', 'Product Demo', 'Partnership'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setForm(f => ({ ...f, subject: type }))}
                    className="glass-card text-left"
                    style={{
                      padding: '16px 20px',
                      border: form.subject === type ? '1px solid var(--orange)' : '1px solid var(--border)',
                      background: form.subject === type ? 'var(--orange-dim)' : 'var(--bg-card)',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 600,
                      fontSize: '15px',
                      color: form.subject === type ? 'var(--orange)' : 'var(--text-2)',
                    }}>
                      {type}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div className="reveal">
              {submitted ? (
                <div className="glass-card text-center" style={{ padding: '60px 40px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '24px', color: 'var(--text-1)', marginBottom: '12px' }}>
                    Message Sent
                  </h3>
                  <p className="body-md">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '36px' }}>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px', color: 'var(--text-1)', marginBottom: '28px' }}>
                    Send a Message
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label className="mono-label" style={{ display: 'block', marginBottom: '6px' }}>Full Name</label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mono-label" style={{ display: 'block', marginBottom: '6px' }}>Email</label>
                        <input
                          className="form-input"
                          type="email"
                          placeholder="email@example.com"
                          required
                          value={form.email}
                          onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="mono-label" style={{ display: 'block', marginBottom: '6px' }}>Phone</label>
                        <input
                          className="form-input"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mono-label" style={{ display: 'block', marginBottom: '6px' }}>Subject</label>
                      <select
                        className="form-input"
                        value={form.subject}
                        onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
                      >
                        <option>Investment</option>
                        <option>Product Enquiry</option>
                        <option>Partnership</option>
                        <option>General</option>
                      </select>
                    </div>
                    <div>
                      <label className="mono-label" style={{ display: 'block', marginBottom: '6px' }}>Message</label>
                      <textarea
                        className="form-input"
                        rows={5}
                        placeholder="Your message..."
                        required
                        value={form.message}
                        onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                      />
                    </div>
                    <button type="submit" className="btn-orange w-full justify-center" style={{ marginTop: '8px' }}>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}