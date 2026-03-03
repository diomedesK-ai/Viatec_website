const layers = [
  {
    label: "Data Ingestion",
    description: "Telemetry, IoT sensors, ERPs, SCADA, APIs — unified in real time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    label: "Knowledge Graphs",
    description: "Ontologies, entity relationships, and domain context — structured automatically.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <circle cx="12" cy="12" r="2" />
        <line x1="7.8" y1="7.2" x2="10.5" y2="10.5" />
        <line x1="16.2" y1="7.2" x2="13.5" y2="10.5" />
        <line x1="7.8" y1="16.8" x2="10.5" y2="13.5" />
        <line x1="16.2" y1="16.8" x2="13.5" y2="13.5" />
      </svg>
    ),
  },
  {
    label: "Data Agents",
    description: "Pattern detection, signal analysis, anomaly scoring — always running.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    label: "Action Agents",
    description: "Work orders, dispatch, alerts, notifications — executed autonomously.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: "Industry Agents",
    description: "Fleet, energy, utilities, manufacturing — domain expertise built in.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l5-4v16" />
        <path d="M10 20V4l9 4v12" />
        <line x1="7" y1="10" x2="7" y2="10.01" />
        <line x1="7" y1="13" x2="7" y2="13.01" />
        <line x1="7" y1="16" x2="7" y2="16.01" />
        <line x1="14" y1="10" x2="14" y2="10.01" />
        <line x1="14" y1="13" x2="14" y2="13.01" />
        <line x1="14" y1="16" x2="14" y2="16.01" />
        <line x1="17" y1="10" x2="17" y2="10.01" />
        <line x1="17" y1="13" x2="17" y2="13.01" />
        <line x1="17" y1="16" x2="17" y2="16.01" />
      </svg>
    ),
  },
]

export function ServiceAnatomy() {
  return (
    <section className="py-28 md:py-44">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground text-center mb-5">
          How it works
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
          Anatomy of the service.
        </h2>
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed">
          Five intelligent layers — from raw signal to autonomous action.
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-px bg-foreground/[0.08]" />

          <div className="space-y-0">
            {layers.map((layer, i) => (
              <div key={layer.label} className="relative flex items-start gap-6 md:gap-8 group">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-background border border-foreground/[0.08] flex items-center justify-center text-foreground/70 group-hover:border-foreground/20 group-hover:text-foreground transition-all duration-300">
                  {layer.icon}
                </div>

                {/* Content */}
                <div className="pt-1 md:pt-3 pb-12 md:pb-16">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-muted-foreground/50 tabular-nums">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em]">
                      {layer.label}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[15px] max-w-md">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
