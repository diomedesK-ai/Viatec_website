export function CapabilitiesSection() {
  return (
    <section className="py-28 md:py-44">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl lg:text-[4rem] font-bold tracking-[-0.04em] text-center mb-24 text-balance leading-tight">
          Agents that feel right.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/[0.06] rounded-3xl overflow-hidden">
          <div className="bg-background p-12 md:p-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-[-0.02em]">Self-Organizing</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Continuously maps new data sources, protocols, and schemas without
              manual configuration. The platform grows as your operations grow.
            </p>
          </div>
          <div className="bg-background p-12 md:p-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-[-0.02em]">Self-Adjusting</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Models adapt to changing operational realities. New fleet
              compositions, regulatory shifts, seasonal patterns — absorbed
              automatically.
            </p>
          </div>
          <div className="bg-background p-12 md:p-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-[-0.02em]">Self-Healing</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Data inconsistencies and schema conflicts detected and resolved in
              real time. Missing values imputed, duplicates reconciled, drift
              corrected.
            </p>
          </div>
          <div className="bg-background p-12 md:p-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-[-0.02em]">Self-Optimizing</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Agents improve workflows, reduce idle cost, and refine decisions
              over time. Every interaction makes the system smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
