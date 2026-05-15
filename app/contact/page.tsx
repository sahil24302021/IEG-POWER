'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';
import ParticleBg from '@/components/ui/ParticleBg';
import { BRAND } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

/**
 * ContactPage — Form submissions are sent via Web3Forms (free service).
 * All form data is delivered to the company email (legautopowerltd@gmail.com).
 * Web3Forms: 250 free submissions/month, no backend required.
 */
export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Investment', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero-label', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.contact-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.2 });

      ref.current!.querySelectorAll('.reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', subject: 'Investment', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div ref={ref} id="main-content">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ padding: '120px 0 60px' }}>
        <GradientMesh />
        <div className="grid-bg" />

        <div className="ieg-container relative z-10">
          <span className="contact-hero-label section-label" style={{ display: 'block', marginBottom: '20px', opacity: 0 }}>
            [ 08 — Contact ]
          </span>
          <h1 className="contact-hero-title display-hero" style={{ maxWidth: '700px', marginBottom: '28px', opacity: 0 }}>
            Let&apos;s Build A <span className="gradient-text">Cleaner Future</span> — Together
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
                <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '26px', color: 'var(--text-1)', marginBottom: '6px' }}>
                  Ajay Choudhary
                </h2>
                <p className="body-md" style={{ color: 'var(--gold)', marginBottom: '28px' }}>Founder & Managing Director</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    ['Email', BRAND.email, `mailto:${BRAND.email}`],
                    ['Website', `${BRAND.website}`, ''],
                  ].map(([label, value, href]) => (
                    <div key={label}>
                      <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>{label}</span>
                      {href ? (
                        <a href={href} className="body-md" style={{ color: 'var(--text-1)', textDecoration: 'none' }}>{value}</a>
                      ) : (
                        <span className="body-md" style={{ color: 'var(--text-1)' }}>{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal" style={{ marginBottom: '40px' }}>
                <span className="mono-label" style={{ display: 'block', marginBottom: '14px', color: 'var(--gold)' }}>Locations</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    ['HQ & R&D', BRAND.hq],
                    ['Manufacturing', BRAND.factory],
                  ].map(([label, value]) => (
                    <div key={label} className="glass-card" style={{ padding: '18px 22px' }}>
                      <span className="mono-label" style={{ display: 'block', marginBottom: '4px' }}>{label}</span>
                      <p className="body-sm" style={{ color: 'var(--text-2)' }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry type cards */}
              <div className="reveal grid gap-3">
                {['Investor Inquiry', 'Product Demo', 'Partnership'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setForm(f => ({ ...f, subject: type }))}
                    className="glass-card text-left hover-lift"
                    style={{
                      padding: '18px 22px',
                      border: form.subject === type ? '1px solid var(--gold)' : '1px solid var(--border)',
                      background: form.subject === type ? 'var(--gold-dim)' : 'var(--bg-card)',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 600,
                      fontSize: '15px',
                      color: form.subject === type ? 'var(--gold)' : 'var(--text-2)',
                    }}>
                      {type}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div className="reveal">
              {status === 'sent' ? (
                <div className="glass-card text-center" style={{ padding: '70px 40px' }}>
                  <div style={{ fontSize: '56px', marginBottom: '24px', color: 'var(--green)' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '26px', color: 'var(--text-1)', marginBottom: '14px' }}>
                    Message Sent
                  </h3>
                  <p className="body-md">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-ghost"
                    style={{ marginTop: '24px', fontSize: '14px' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '22px', color: 'var(--text-1)', marginBottom: '32px' }}>
                    Send a Message
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div>
                      <label htmlFor="contact-name" className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Full Name</label>
                      <input
                        id="contact-name"
                        className="form-input"
                        type="text"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
                      <input
                        id="contact-email"
                        className="form-input"
                        type="email"
                        placeholder="email@example.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Mobile Number</label>
                      <input
                        id="contact-phone"
                        className="form-input"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Subject</label>
                      <select
                        id="contact-subject"
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
                      <label htmlFor="contact-message" className="mono-label" style={{ display: 'block', marginBottom: '8px' }}>Message</label>
                      <textarea
                        id="contact-message"
                        className="form-input"
                        rows={5}
                        placeholder="Your message..."
                        required
                        value={form.message}
                        onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                      />
                    </div>

                    {status === 'error' && (
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(220,38,38,0.08)',
                        border: '1px solid rgba(220,38,38,0.2)',
                        color: '#ef4444',
                        fontSize: '13px',
                      }}>
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn-orange w-full justify-center"
                      style={{ marginTop: '8px' }}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          Sending...
                          <div style={{
                            width: '14px', height: '14px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderTop: '2px solid white',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite',
                          }} />
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}