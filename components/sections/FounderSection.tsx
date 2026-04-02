'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { JOURNEY_MILESTONES } from '@/lib/constants';

export default function FounderSection() {
  return (
    <section className="section-light relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/3 blur-[120px] rounded-full" />
      </div>

      <div className="ieg-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/images/founder.jpg"
                    alt="Ajay Choudhary - Founder & Inventor"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 via-transparent to-transparent" />
                </div>

                {/* Name badge at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-carbon/90 to-transparent">
                  <div className="text-amber text-xs font-bold uppercase tracking-widest font-heading mb-1">
                    Managing Director & Inventor
                  </div>
                  <div className="text-white text-2xl font-heading font-bold">
                    Ajay Choudhary
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-forest/10 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-amber/10 rounded-full blur-xl -z-10" />
            </div>
          </motion.div>

          {/* RIGHT: Story + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-forest" />
              <span className="text-xs font-bold tracking-[0.25em] text-forest uppercase font-heading">
                The Visionary
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-carbon mb-6 leading-tight">
              30 Years of
              <br />
              <span className="gradient-text-mixed">Relentless Innovation.</span>
            </h2>

            {/* Quote */}
            <div className="relative pl-6 py-2 border-l-2 border-amber mb-10">
              <p className="text-xl text-gray-600 font-light leading-relaxed italic">
                &ldquo;We didn&apos;t just build a machine; we rewrote the rules of energy regeneration.
                Our mission is to provide fuel-less, grid-independent power to every corner of the globe.&rdquo;
              </p>
            </div>

            <p className="text-gray-500 leading-relaxed mb-10">
              A visionary leader who began his groundbreaking research in 1993-94 and achieved
              a significant breakthrough in 2003. His pioneering efforts were personally recognized
              and appreciated by Dr. A.P.J. Abdul Kalam, former President of India.
            </p>

            {/* Mini Timeline */}
            <div className="space-y-0">
              {JOURNEY_MILESTONES.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="group flex items-start gap-4 py-3 border-b border-gray-100 last:border-0 hover:bg-forest/[0.02] px-3 -mx-3 rounded-lg transition-colors"
                >
                  <span className="shrink-0 text-lg font-mono font-bold text-forest w-14">
                    {milestone.year}
                  </span>
                  <div>
                    <span className="text-carbon font-heading font-semibold">{milestone.title}</span>
                    <span className="text-gray-400 text-sm ml-2">{milestone.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
