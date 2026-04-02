'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Clock, Award } from 'lucide-react';
import { BRAND, EXECUTIVE_BOARD, OPERATIONAL_DIRECTORS, JOURNEY_MILESTONES } from '@/lib/constants';

export default function CompanyPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-carbon overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[30%] w-[600px] h-[600px] bg-forest/[0.03] rounded-full blur-[200px]" />
        </div>
        <div className="ieg-container relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-6 block">About Us</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.08]">
              30+ Years of <span className="text-forest-light">Deep-Tech</span> Research
            </h1>
            <p className="text-lg text-white/40 font-body leading-relaxed max-w-2xl">{BRAND.vision}</p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-carbon-light">
        <div className="ieg-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-label mb-4 block">The Inventor</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                Ajay Choudhary
              </h2>
              <div className="space-y-4 text-ieg-muted text-sm leading-relaxed">
                <p>Managing Director, Patent Owner, and the inventor behind IEG technology. Mr. Choudhary began his research in <strong className="text-white">1993</strong>, driven by a vision of energy independence.</p>
                <p>In <strong className="text-white">2003-04</strong>, he presented his breakthrough to <strong className="text-white">Dr. APJ Abdul Kalam</strong>, then President of India, who recognized the potential of internal energy generation.</p>
                <p>After nearly two decades of refinement, the Indian Government granted <strong className="text-white">Patent No. 391051</strong> in 2022, validating a completely new category of energy technology.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="trust-badge"><Award className="w-3.5 h-3.5" /> Patent Owner</div>
                <div className="trust-badge"><Clock className="w-3.5 h-3.5" /> 30+ Years R&D</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="glass-card p-10 text-center">
              <div className="w-24 h-24 rounded-full bg-forest/10 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-forest-light" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Ajay Choudhary</h3>
              <p className="text-forest-light text-sm font-heading font-semibold mb-4">Managing Director & Inventor</p>
              <p className="text-ieg-muted text-sm italic">&ldquo;Energy should be generated from within — not extracted from the earth.&rdquo;</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-carbon">
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label justify-center mb-4">Our Journey</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-4">The IEG Timeline</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-1">
            {JOURNEY_MILESTONES.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start group">
                <div className="shrink-0 w-20 pt-6">
                  <span className="font-mono font-bold text-lg text-forest-light">{m.year}</span>
                </div>
                <div className="relative flex-1 pb-8 border-l border-white/[0.06] pl-8">
                  <div className="absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-carbon border-2 border-forest-light group-hover:bg-forest-light transition-colors" />
                  <div className="glass-card p-5">
                    <h3 className="font-heading font-bold text-white mb-1">{m.title}</h3>
                    <p className="text-ieg-muted text-sm">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-carbon-light">
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label justify-center mb-4">Leadership</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-4">Executive Board</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
            {EXECUTIVE_BOARD.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card p-7 text-center">
                <div className="w-16 h-16 rounded-full bg-forest/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-forest-light" />
                </div>
                <h3 className="font-heading font-bold text-white">{member.name}</h3>
                <p className="text-forest-light text-xs font-heading font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                <p className="text-ieg-muted text-xs mt-2">{member.focus}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-center font-heading font-bold text-xl text-white mb-8">Operational Directors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {OPERATIONAL_DIRECTORS.map((d, i) => (
              <motion.div key={d.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass-card p-4 text-center">
                <p className="font-heading font-bold text-sm text-white">{d.name}</p>
                <p className="text-[10px] text-ieg-muted mt-1">{d.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-carbon">
        <div className="ieg-container">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-forest-light" />
                <h3 className="font-heading font-bold text-white text-lg">Headquarters</h3>
              </div>
              <p className="text-ieg-muted text-sm">{BRAND.hq}</p>
              <p className="text-ieg-muted text-sm mt-2">{BRAND.phone}</p>
              <p className="text-ieg-muted text-sm">{BRAND.email}</p>
            </div>
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-ieg-orange" />
                <h3 className="font-heading font-bold text-white text-lg">Manufacturing</h3>
              </div>
              <p className="text-ieg-muted text-sm">{BRAND.factory}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Get in Touch <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}