'use client';

import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(form.subject || 'Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const inputClass = "w-full text-sm bg-transparent rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1 focus:ring-green-500/30";

  return (
    <main>
      {/* Minimal header — no big hero */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="container-main">
          <p className="label mb-4">Contact</p>
          <h1 className="heading-lg max-w-lg">Get in touch.</h1>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10">
            {/* Form */}
            <div>
              {sent ? (
                <div className="card p-10 text-center">
                  <p className="text-4xl mb-4">✓</p>
                  <p className="heading-md mb-2">Message sent</p>
                  <p className="body-sm">We&apos;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--text-muted)' }}>Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className={inputClass} style={{ border: '1px solid var(--border)' }} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--text-muted)' }}>Email *</label>
                      <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className={inputClass} style={{ border: '1px solid var(--border)' }} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--text-muted)' }}>Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        className={inputClass} style={{ border: '1px solid var(--border)' }} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--text-muted)' }}>Subject</label>
                      <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                        className={inputClass} style={{ border: '1px solid var(--border)', appearance: 'none' }}>
                        <option value="" className="bg-neutral-900">Select topic</option>
                        <option value="Investment" className="bg-neutral-900">Investment</option>
                        <option value="Product Demo" className="bg-neutral-900">Product Demo</option>
                        <option value="Partnership" className="bg-neutral-900">Partnership</option>
                        <option value="Media" className="bg-neutral-900">Media</option>
                        <option value="Other" className="bg-neutral-900">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--text-muted)' }}>Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className={inputClass} style={{ border: '1px solid var(--border)', resize: 'none' }} placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4 lg:pt-6">
              {[
                { icon: Mail, title: 'Email', value: BRAND.email },
                { icon: Phone, title: 'Phone', value: BRAND.phone },
                { icon: MapPin, title: 'Headquarters', value: BRAND.hq },
                { icon: MapPin, title: 'Manufacturing', value: BRAND.factory },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <item.icon className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                    <p className="text-sm font-medium text-white">{item.title}</p>
                  </div>
                  <p className="text-sm pl-6" style={{ color: 'var(--text-muted)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}