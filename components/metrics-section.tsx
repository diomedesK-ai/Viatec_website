const metrics = [
  { value: "99%", label: "Faster to insight", detail: "From raw data to actionable intelligence" },
  { value: "10x", label: "Fewer manual reviews", detail: "Agents handle triage autonomously" },
  { value: "<3 min", label: "Anomaly to action", detail: "Detection, reasoning, and dispatch" },
  { value: "24/7", label: "Predictive coverage", detail: "Continuous monitoring across every asset" },
]

const pipeline = [
  {
    step: "Data",
    description: "Raw telemetry, IoT signals, and operational feeds — unified in real time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    step: "Insights",
    description: "Pattern recognition, anomaly scoring, and contextual reasoning — automated.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    step: "Actions",
    description: "Work orders, dispatch, alerts, and system responses — executed with precision.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    step: "Prediction",
    description: "Failure forecasting, cost modeling, and optimization — before the problem arrives.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
]

export function MetricsSection() {
  return (
    <section className="py-24 md:py-40">
      {/* Big metrics band */}
      <div className="max-w-5xl mx-auto px-6 mb-32 md:mb-44">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/[0.06] rounded-3xl overflow-hidden">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background p-8 md:p-12 text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-foreground mb-3">
                {m.value}
              </p>
              <p className="text-sm md:text-base font-semibold text-foreground mb-1.5">
                {m.label}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Data-driven pipeline */}
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground text-center mb-5">
          Intelligence pipeline
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
          From signal to foresight.
        </h2>
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed">
          Every data point flows through four stages — each one
          compounding value for the next.
        </p>

        {/* Horizontal pipeline on desktop, vertical on mobile */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connector line — horizontal on lg, vertical on mobile */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-foreground/[0.08]" />
          <div className="lg:hidden absolute left-8 top-[60px] bottom-[60px] w-px bg-foreground/[0.08]" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {pipeline.map((p, i) => (
              <div key={p.step} className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0 lg:text-center px-0 lg:px-4">
                {/* Step number + icon node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-background border border-foreground/[0.08] flex items-center justify-center text-foreground/60 hover:border-foreground/20 hover:text-foreground transition-all duration-300">
                    {p.icon}
                  </div>
                </div>

                {/* Arrow between nodes (desktop only) */}
                {i < pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2 z-20 text-foreground/15">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 2l4 4-4 4" />
                    </svg>
                  </div>
                )}

                {/* Content */}
                <div className="pt-0.5 lg:pt-6 pb-10 lg:pb-0">
                  <p className="text-xs font-mono text-muted-foreground/40 mb-1.5 tabular-nums">
                    0{i + 1}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold tracking-[-0.02em] mb-2">
                    {p.step}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px] lg:mx-auto">
                    {p.description}
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
