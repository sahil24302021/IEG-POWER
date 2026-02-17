export default function Market() {
  const segments = [
    { title: 'Electric Mobility', description: 'Two-wheelers, three-wheelers, and light EVs with reduced charging dependency.' },
    { title: 'Residential Power', description: 'Resilient home energy with internal regeneration and smart storage.' },
    { title: 'Industrial Modules', description: 'High-availability energy units for continuous industrial operations.' }
  ]

  return (
  <section className="section relative bg-transparent">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Market Segments</h2>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">Initial deployments focus on high-need, high-impact use cases.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((s) => (
            <div key={s.title} className="ieg-card p-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">{s.title}</h3>
              <p className="mt-2 text-[var(--text-secondary)]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
