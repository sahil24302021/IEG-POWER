'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(formData.subject || 'Website Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-carbon overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[40%] w-[500px] h-[500px] bg-forest/[0.04] rounded-full blur-[200px]" />
        </div>
        <div className="ieg-container relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-6 block">Get in Touch</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.08]">
              Let&apos;s Build the <span className="text-forest-light">Future</span> Together
            </h1>
            <p className="text-lg text-white/40 font-body leading-relaxed">
              For partnerships, investments, product inquiries, or demonstrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-carbon-light">
        <div className="ieg-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-forest/10 mx-auto mb-6 flex items-center justify-center">
                    <Send className="w-7 h-7 text-forest-light" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">Message Sent</h3>
                  <p className="text-ieg-muted text-sm">Thank you for reaching out. Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-ieg-muted mb-2 block">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-ieg-muted/30 focus:outline-none focus:border-forest-light/50 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-ieg-muted mb-2 block">Email *</label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-ieg-muted/30 focus:outline-none focus:border-forest-light/50 transition-colors" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-ieg-muted mb-2 block">Phone</label>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-ieg-muted/30 focus:outline-none focus:border-forest-light/50 transition-colors" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-ieg-muted mb-2 block">Subject</label>
                      <select value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-forest-light/50 transition-colors appearance-none">
                        <option value="" className="bg-carbon">Select topic</option>
                        <option value="Investment Inquiry" className="bg-carbon">Investment Inquiry</option>
                        <option value="Product Demo" className="bg-carbon">Product Demo</option>
                        <option value="Partnership" className="bg-carbon">Partnership</option>
                        <option value="Media" className="bg-carbon">Media / Press</option>
                        <option value="Other" className="bg-carbon">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-ieg-muted mb-2 block">Message *</label>
                    <textarea required rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-ieg-muted/30 focus:outline-none focus:border-forest-light/50 transition-colors resize-none" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6">
              <div className="glass-card p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-forest-light" />
                  <h3 className="font-heading font-bold text-white">Email</h3>
                </div>
                <p className="text-ieg-muted text-sm">{BRAND.email}</p>
              </div>
              <div className="glass-card p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-forest-light" />
                  <h3 className="font-heading font-bold text-white">Phone</h3>
                </div>
                <p className="text-ieg-muted text-sm">{BRAND.phone}</p>
              </div>
              <div className="glass-card p-7">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-forest-light" />
                  <h3 className="font-heading font-bold text-white">Headquarters</h3>
                </div>
                <p className="text-ieg-muted text-sm">{BRAND.hq}</p>
              </div>
              <div className="glass-card p-7">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-ieg-orange" />
                  <h3 className="font-heading font-bold text-white">Manufacturing</h3>
                </div>
                <p className="text-ieg-muted text-sm">{BRAND.factory}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}