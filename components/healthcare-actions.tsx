const actions = [
  "Answer board-level questions with grounded evidence",
  "Generate executive dashboards on demand",
  "Surface cohort and care-management opportunities",
  "Route compliant actions into Teams, apps, and workflows",
  "Monitor interoperability gaps before they become delays",
  "Coordinate humans and agents in one approval loop",
]

export function HealthcareActions() {
  return (
    <section className="py-24 md:py-34">
      <div className="bg-foreground text-background py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/45 mb-5">
              What the platform does
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.02]">
              Data. Context. Action.
            </h2>
            <p className="mt-6 text-lg text-background/65 leading-relaxed">
              The story should feel bigger than analytics. Graffs helps healthcare
              teams ask, understand, orchestrate, and move.
            </p>
          </div>

          <div className="mt-12 grid gap-px rounded-[2rem] overflow-hidden bg-background/12 md:grid-cols-2 lg:grid-cols-3">
            {actions.map((action) => (
              <div key={action} className="bg-foreground p-8">
                <p className="text-lg font-medium leading-snug">{action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20">
        <div className="rounded-[2rem] border border-foreground/[0.08] bg-gradient-to-r from-muted/70 via-background to-muted/60 p-8 md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            MCP and orchestration
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.04]">
                The right agent, the right model, the right workflow.
              </h3>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                MCP support gives Graffs a clean way to connect tools, policies,
                and actions. Fabric organizes the estate. Graffs orchestrates the
                experience across copilots, dashboards, and execution surfaces.
              </p>
            </div>
            <div className="grid gap-3">
              {["Model routing", "Policy-aware actions", "Human review", "Cross-channel delivery"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-foreground/[0.08] bg-background px-4 py-4 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
