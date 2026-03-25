function UnifiedEstateVisual() {
  return (
    <div className="rounded-[1.5rem] border border-foreground/[0.08] bg-background p-5">
      <div className="grid gap-3 md:grid-cols-3">
        {["Patient", "Research", "Commercial"].map((item) => (
          <div key={item} className="rounded-2xl bg-muted p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{item}</p>
            <div className="mt-8 h-2 rounded-full bg-foreground/10" />
            <div className="mt-2 h-2 w-3/4 rounded-full bg-foreground/10" />
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-foreground text-background p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-background/50">Unified reasoning layer</p>
        <p className="mt-2 text-lg font-semibold">One operating picture, not three disconnected programs.</p>
      </div>
    </div>
  )
}

function MultimodalVisual() {
  return (
    <div className="rounded-[1.5rem] border border-foreground/[0.08] bg-background p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {["Clinical Notes", "Imaging", "Claims", "Operational Signals"].map((item) => (
          <div key={item} className="rounded-2xl border border-foreground/[0.06] p-4">
            <p className="text-sm font-medium">{item}</p>
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-muted" />
              <div className="h-2 w-5/6 rounded-full bg-muted" />
              <div className="h-2 w-2/3 rounded-full bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CommandCenterVisual() {
  return (
    <div className="rounded-[1.5rem] border border-foreground/[0.08] bg-background p-5">
      <div className="rounded-2xl bg-foreground text-background p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-background/50">Executive command center</p>
        <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">Where are the blockers across care, trials, and operations?</p>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {["Risk rising", "Data aligned", "Action routed"].map((item) => (
          <div key={item} className="rounded-2xl bg-muted p-4 text-sm font-medium text-foreground/80">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

const modules = [
  {
    eyebrow: "Module 01",
    title: "Unify patient, research, and commercial context.",
    description: "For healthcare and biopharma leaders, the real unlock is seeing across silos that were never designed to speak the same language.",
    visual: <UnifiedEstateVisual />,
  },
  {
    eyebrow: "Module 02",
    title: "Bring multimodal healthcare data into one decision loop.",
    description: "Fabric for Healthcare gives the estate. Graffs helps teams reason across notes, imaging, claims, and operational signals without losing context.",
    visual: <MultimodalVisual />,
  },
  {
    eyebrow: "Module 03",
    title: "Give leadership a command center, not another dashboard cemetery.",
    description: "The experience should feel crisp and immediate: where risk is rising, what changed, and what action should happen next.",
    visual: <CommandCenterVisual />,
  },
]

export function HealthcareModules() {
  return (
    <section className="py-24 md:py-34">
      <div className="max-w-6xl mx-auto px-6 space-y-14">
        {modules.map((module, index) => (
          <div
            key={module.title}
            className="grid gap-8 lg:gap-14 items-center lg:grid-cols-2"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground mb-5">
                {module.eyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.05]">
                {module.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                {module.description}
              </p>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>{module.visual}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
