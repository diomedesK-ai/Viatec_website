const pillars = [
  {
    title: "Use the systems you already have",
    description:
      "Compatible with telematics, OEM portals, ERP, CMMS, GIS, and workflow tools — no rip-and-replace.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    title: "Predict across mixed assets, not just vehicles",
    description:
      "Goes beyond telematics-first platforms and OEM-specific tools to cover your entire asset base.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Move from visibility to action",
    description:
      "You already have dashboards. The unmet need is diagnosis and action prioritization — that's where Graffs starts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Stay vendor-neutral across OEMs",
    description:
      "No OEM lock-in. Graffs works across manufacturers so decisions aren't trapped in a single vendor's silo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
]

export function ValueProposition() {
  return (
    <section className="py-28 md:py-44">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground text-center mb-5">
          Why Graffs
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
          The cross-system predictive&#8209;intelligence layer.
        </h2>
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-20 leading-relaxed">
          Graffs turns your existing telematics, OEM, and enterprise data into
          earlier failure prediction, faster diagnosis, and prioritized action
          across mixed utility assets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/[0.06] rounded-3xl overflow-hidden">
          {pillars.map((p) => (
            <div key={p.title} className="bg-background p-12 md:p-16 group">
              <div className="w-14 h-14 rounded-2xl border border-foreground/[0.08] flex items-center justify-center text-foreground/60 group-hover:border-foreground/20 group-hover:text-foreground transition-all duration-300 mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-[-0.02em]">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
