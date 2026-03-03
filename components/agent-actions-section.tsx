export function AgentActionsSection() {
  return (
    <section className="mt-16 md:mt-28">
      <div className="bg-foreground text-background py-32 md:py-48">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
            Data. Reasoning. Execution.
          </h2>
          <p className="text-center text-background/45 text-lg md:text-xl max-w-2xl mx-auto mb-24 leading-relaxed">
            Agents that do not just analyze. They act with precision and full
            operational context.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <div className="bg-foreground p-12">
              <p className="text-xl font-semibold mb-3">Answer Q&amp;A</p>
              <p className="text-background/40 text-sm leading-relaxed">
                Domain-specific questions answered with full SSOT context and
                reasoning transparency.
              </p>
            </div>
            <div className="bg-foreground p-12">
              <p className="text-xl font-semibold mb-3">Generate Dashboards</p>
              <p className="text-background/40 text-sm leading-relaxed">
                Dynamic visualizations created on demand. KPIs, fleet systems,
                LLM insights, ROI tables.
              </p>
            </div>
            <div className="bg-foreground p-12">
              <p className="text-xl font-semibold mb-3">Trigger Actions</p>
              <p className="text-background/40 text-sm leading-relaxed">
                Automated work orders, dispatch scheduling, and parts ordering
                from a single anomaly detection.
              </p>
            </div>
            <div className="bg-foreground p-12">
              <p className="text-xl font-semibold mb-3">Orchestrate</p>
              <p className="text-background/40 text-sm leading-relaxed">
                Multi-step processes coordinated across agents, systems, and
                approval chains.
              </p>
            </div>
            <div className="bg-foreground p-12">
              <p className="text-xl font-semibold mb-3">Surface Anomalies</p>
              <p className="text-background/40 text-sm leading-relaxed">
                Pattern detection across signal trends, cost deviations, and
                operational drift.
              </p>
            </div>
            <div className="bg-foreground p-12">
              <p className="text-xl font-semibold mb-3">Optimize</p>
              <p className="text-background/40 text-sm leading-relaxed">
                Proactive suggestions to reduce cost, improve uptime, and extend
                asset life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-32 md:py-48">
        <div className="max-w-5xl mx-auto px-6">
          <div className="md:text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Multi-LLM Orchestration
            </p>
            <h3 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.035em] mb-6 leading-[1.08] text-balance">
              The right model for every moment.
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Auto-fallback between Claude, OpenAI, and Mistral. Voice AI, TCO
              resolution, dashboard generation — each routed to the optimal
              model.
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.2)] border border-foreground/[0.04]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202026-03-03%20at%2019.05.08-Poj0NEaw3mbF5re0zpKrCGwL3hkWQU.png"
              alt="LLM Configuration with auto-fallback between Claude, OpenAI, and Mistral"
              className="w-full h-auto block"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
