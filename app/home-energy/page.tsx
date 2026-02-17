export const metadata = { title: 'Home Energy | IEG' }

export default function HomeEnergyPage() {
  return (
    <main className="min-h-screen px-6 sm:px-8 lg:px-12 py-16 bg-[#0b1a14]">
      <section className="max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#eaf2ee]">Home Energy Systems</h1>
        {/* Short technical description */}
        <p className="mt-4 text-[#b7c3bd]">
          Self‑sustaining residential power modules delivering clean, stable energy with integrated storage and intelligent control.
        </p>

        {/* Use-cases */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Grid‑Tied Homes</h3>
            <p className="mt-2 text-[#b7c3bd]">Peak‑shaving and uninterrupted backup for urban residences.</p>
          </div>
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Off‑Grid Cabins</h3>
            <p className="mt-2 text-[#b7c3bd]">Reliable power generation where grid access is limited.</p>
          </div>
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Multi‑Unit Buildings</h3>
            <p className="mt-2 text-[#b7c3bd]">Scalable deployments for apartment and mixed‑use properties.</p>
          </div>
        </div>

        {/* Accent strip */}
        <div className="mt-12 h-1 w-24 bg-[#00FF88]" />
      </section>
    </main>
  )
}