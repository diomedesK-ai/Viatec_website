const pillars = [
  {
    title: "Interoperable by design",
    description: "Connect FHIR, imaging, claims, notes, lab, outreach, and operational systems without forcing the enterprise into one vendor view.",
    eyebrow: "Interoperability",
  },
  {
    title: "Fabric for Healthcare, made usable",
    description: "Use Microsoft Fabric for Healthcare as the estate. Let Graffs become the reasoning and action layer executives and operators actually feel.",
    eyebrow: "Fabric",
  },
  {
    title: "From data estate to operating model",
    description: "MCP-enabled agents make workflows portable across analytics, copilots, dashboards, and front-line applications.",
    eyebrow: "Agents",
  },
  {
    title: "Clear value to the C-suite",
    description: "Less time reconciling systems. Faster decisions. Better coordination across patient, research, commercial, and operational teams.",
    eyebrow: "Outcomes",
  },
]

export function HealthcareValueProposition() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground mb-5">
            Why it lands
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.02]">
            The missing layer between healthcare data and executive momentum.
          </h2>
        </div>

        <div className="mt-14 grid gap-px rounded-[2rem] overflow-hidden bg-foreground/[0.08] md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-background p-10 md:p-12">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                {pillar.eyebrow}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
