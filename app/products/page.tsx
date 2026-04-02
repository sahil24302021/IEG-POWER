'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS_READY, PRODUCTS_UPCOMING } from '@/lib/constants';

export default function ProductsPage() {
  return (
    <main>
      {/* Hero — product catalog style */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <p className="label mb-4">Products</p>
          <h1 className="heading-xl max-w-2xl mb-6">
            Real products.{' '}
            <span style={{ color: 'var(--text-muted)' }}>Real applications.</span>
          </h1>
          <p className="body-lg max-w-xl">
            From electric mobility to home appliances — IEG-powered products delivering
            continuous, fuel-free electricity.
          </p>
        </div>
      </section>

      {/* Current Products — large cards */}
      <section className="py-20" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Available Now</p>
          <h2 className="heading-lg mb-10">Current Products</h2>
          <div className="space-y-4">
            {PRODUCTS_READY.map((p, i) => (
              <div key={p.id} className="card overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0`}>
                  <div className="aspect-[4/3] lg:aspect-auto relative" style={{ background: '#0A0D0A', order: i % 2 === 1 ? 2 : 1 }}>
                    <Image src={p.image} alt={p.name} fill className="object-contain p-8" sizes="50vw" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded"
                        style={{ color: 'var(--accent)', background: 'var(--accent-muted)' }}>{p.category}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center" style={{ order: i % 2 === 1 ? 1 : 2 }}>
                    <h3 className="text-xl font-semibold text-white mb-3">{p.name}</h3>
                    <p className="body mb-5">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(p.specs).map(([, val]) => (
                        <span key={val} className="text-xs font-medium px-2.5 py-1 rounded"
                          style={{ color: 'var(--accent)', background: 'var(--accent-muted)' }}>{val}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Coming Soon</p>
          <h2 className="heading-lg mb-10">Upcoming Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {PRODUCTS_UPCOMING.map((name) => (
              <div key={name} className="card p-4 flex items-center gap-2">
                <span className="text-sm" style={{ color: 'var(--accent)' }}>⚡</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Discuss Requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}