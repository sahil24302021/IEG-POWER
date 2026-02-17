export const metadata = { title: 'EV | IEG' }

export default function EVPage() {
  return (
    <main className="min-h-screen px-6 sm:px-8 lg:px-12 py-16 bg-[#0b1a14]">
      <section className="max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#eaf2ee]">EV Power Systems</h1>
        {/* Short technical description */}
        <p className="mt-4 text-[#b7c3bd]">
          Integrated internal energy generation module for electric mobility. Provides continuous, fuel‑less power delivery with high reliability and low maintenance.
        </p>

        {/* Use-cases */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Passenger EV</h3>
            <p className="mt-2 text-[#b7c3bd]">Extended range and self‑charging capability for consumer vehicles.</p>
          </div>
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Commercial Fleet</h3>
            <p className="mt-2 text-[#b7c3bd]">Consistent uptime for delivery, logistics, and transit applications.</p>
          </div>
          <div className="rounded-lg border border-[rgba(62,84,73,0.35)] p-6 bg-gradient-to-b from-[#0f221b] to-[#0b1a14]">
            <h3 className="text-lg font-medium text-[#cfe7dc]">Special Vehicles</h3>
            <p className="mt-2 text-[#b7c3bd]">Emergency, defense, and off‑grid mobility with continuous power.</p>
          </div>
        </div>

        {/* Accent strip */}
        <div className="mt-12 h-1 w-24 bg-[#00FF88]" />
      </section>
    </main>
  )
}