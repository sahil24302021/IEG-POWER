export const metadata = { title: 'Industrial Energy | IEG' }

export default function IndustrialEnergyPage() {
  return (
    <main className="min-h-screen px-6 sm:px-8 lg:px-12 py-16 bg-[#0b1a14]">
      <section className="max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#eaf2ee]">Industrial Energy Systems</h1>
        {/* Short technical description */}
        <p className="mt-4 text-[#b7c3bd]">
          Modular high‑output units for factories, data centers, and remote operations. Designed for continuous duty cycles and robust integration.
        </p>

        {/* Use-cases */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Manufacturing</h3>
            <p className="mt-2 text-[#b7c3bd]">Stable process power with minimal downtime.</p>
          </div>
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Data Centers</h3>
            <p className="mt-2 text-[#b7c3bd]">Redundant energy modules for critical loads.</p>
          </div>
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Remote Sites</h3>
            <p className="mt-2 text-[#b7c3bd]">Off‑grid industrial operations with autonomous power.</p>
          </div>
        </div>

        {/* Secondary accent */}
        <div className="mt-12 h-1 w-24 bg-[#FF7A00]" />
      </section>
    </main>
  )
}