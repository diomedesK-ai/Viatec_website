export function IndustriesSection() {
  return (
    <section className="py-24 md:py-40">
      {/* --- Section 1: TCO & Fleet --- */}
      <div className="max-w-[1200px] mx-auto px-6 mb-40 md:mb-56">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
              EV &amp; Fleet Intelligence
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.035em] mb-6 leading-[1.08]">
              Every dollar, every asset, every decision — visible.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Idle reduction, energy optimization, battery health, and TCO
              calculation. Real-time telemetry meets predictive maintenance in
              a single intelligent view.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_50px_120px_-25px_rgba(0,0,0,0.2)] border border-foreground/[0.04]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202026-03-03%20at%2019.06.49-A5rL0oVxjRcc4ZNNVNY4fP04VrpXdS.png"
              alt="TCO Calculator showing fleet cost analysis over 10 years with ROI breakdown"
              className="w-full h-auto block"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* --- Section 2: Predictive Maintenance --- */}
      <div className="max-w-[1200px] mx-auto px-6 mb-40 md:mb-56">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-[0_50px_120px_-25px_rgba(0,0,0,0.2)] border border-foreground/[0.04]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202026-03-03%20at%2019.07.39-Hpiby71QufkNgY0okO9dIaTV81vVLT.png"
              alt="Alert dashboard showing cooling system anomaly with signal trends and workflow progress"
              className="w-full h-auto block"
              draggable={false}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Predictive Maintenance
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.035em] mb-6 leading-[1.08]">
              Catch the failure before the failure catches you.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Signal trend analysis, root cause reasoning, automatic work order
              creation, and parts identification. From anomaly to action in
              minutes.
            </p>
          </div>
        </div>
      </div>

      {/* --- Section 3: AI Command Center --- */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5">
              AI Command Center
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.035em] mb-6 leading-[1.08]">
              Ask anything. Get everything.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Natural language and voice-driven queries across your entire
              operation. Multi-agent reasoning with full SSOT grounding.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_50px_120px_-25px_rgba(0,0,0,0.2)] border border-foreground/[0.04]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202026-03-03%20at%2019.05.39-lXODdmcIAIzZxpYbs27rRnkF0ho5Gy.png"
              alt="WorkForce Intelligence AI command center with natural language input"
              className="w-full h-auto block"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
