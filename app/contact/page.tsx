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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'c8e8cba8-cd28-4425-bc5f-336f096d0ee1',
          subject: `🔔 New ${form.subject} Inquiry — ${form.name}`,
          from_name: `${form.name} via IEG Website`,
          replyto: form.email,
          // Custom premium HTML email
          message: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0B1526; border-radius: 16px; overflow: hidden; border: 1px solid rgba(212,175,55,0.15);">
  
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #101E36 0%, #0B1526 100%); padding: 32px 36px; border-bottom: 1px solid rgba(212,175,55,0.12);">
    <div style="display: flex; align-items: center; gap: 14px;">
      <div style="width: 42px; height: 42px; border-radius: 12px; background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.15); display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 20px;">⚡</span>
      </div>
      <div>
        <div style="font-weight: 700; font-size: 16px; color: #F5F5F0; letter-spacing: -0.01em;">IEG Auto Powers Ltd</div>
        <div style="font-size: 11px; color: #5E7A99; letter-spacing: 0.05em; margin-top: 2px;">NEW WEBSITE INQUIRY</div>
      </div>
    </div>
  </div>

  <!-- Body -->
  <div style="padding: 32px 36px;">
    
    <!-- Inquiry Type Badge -->
    <div style="margin-bottom: 28px;">
      <span style="display: inline-block; padding: 6px 16px; border-radius: 20px; background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.15); color: #D4AF37; font-size: 12px; font-weight: 600; letter-spacing: 0.05em;">${form.subject.toUpperCase()}</span>
    </div>

    <!-- Contact Info Cards -->
    <div style="margin-bottom: 24px; padding: 20px 24px; background: rgba(16,30,54,0.8); border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
      <div style="font-size: 10px; color: #5E7A99; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">FROM</div>
      <div style="font-size: 18px; font-weight: 700; color: #F5F5F0; margin-bottom: 4px;">${form.name}</div>
      <div style="font-size: 14px; color: #94A3B8;">${form.email}</div>
      ${form.phone ? `<div style="font-size: 14px; color: #94A3B8; margin-top: 2px;">📱 ${form.phone}</div>` : ''}
    </div>

    <!-- Message -->
    <div style="margin-bottom: 24px; padding: 20px 24px; background: rgba(16,30,54,0.8); border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
      <div style="font-size: 10px; color: #5E7A99; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">MESSAGE</div>
      <div style="font-size: 15px; color: #F5F5F0; line-height: 1.7;">${form.message.replace(/\n/g, '<br/>')}</div>
    </div>

    <!-- Quick Reply Button -->
    <a href="mailto:${form.email}?subject=Re: Your ${form.subject} inquiry to IEG Auto Powers" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #D4AF37, #B8941E); color: #0B1526; font-weight: 700; font-size: 14px; text-decoration: none; border-radius: 10px; letter-spacing: 0.01em;">
      ↩ Reply to ${form.name.split(' ')[0]}
    </a>
  </div>

  <!-- Footer -->
  <div style="padding: 20px 36px; background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.04);">
    <div style="font-size: 11px; color: #3D5A73; line-height: 1.6;">
      Sent via <span style="color: #5E7A99;">iegautopower.com</span> contact form · ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} at ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
    </div>
  </div>
</div>`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', subject: 'Investment', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
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