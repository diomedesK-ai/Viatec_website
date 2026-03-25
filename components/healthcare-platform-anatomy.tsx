const trustLayer = [
  "TRE / research environments",
  "Confidential compute",
  "Policy, audit, and approvals",
  "Role-based access and traceability",
]

const layers = [
  {
    eyebrow: "01 · Data estate",
    title: "Connected healthcare foundation",
    description: "FHIR, OMOP, DICOM, claims, notes, SDOH, lab, and outreach data aligned into one usable estate inside Azure and Fabric.",
    items: ["Azure Health Data Services", "OneLake", "Fabric pipelines", "Cross-system mapping"],
  },
  {
    eyebrow: "02 · Context layer",
    title: "Healthcare context and reasoning",
    description: "Clinical, operational, and commercial context turns raw data into questions leaders can trust and teams can act on.",
    items: ["Healthcare ontologies", "Entity resolution", "Grounded Q&A", "Multimodal interpretation"],
  },
  {
    eyebrow: "03 · Agent control",
    title: "Agent orchestration and MCP",
    description: "A control plane for agents, tools, and actions so insights move into workflows, copilots, Teams, and applications with governance intact.",
    items: ["MCP support", "Tool orchestration", "Human approval loops", "Cross-channel delivery"],
  },
]

const executiveSignals = [
  "Care operations",
  "Cohort strategy",
  "Research coordination",
  "Commercial readiness",
]

const deliverySurfaces = [
  "Executive command center",
  "Teams and copilots",
  "Dashboards and workflow apps",
  "Agent-triggered operating actions",
]

export function HealthcarePlatformAnatomy() {
  return (
    <section className="py-24 md:py-34">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground mb-5">
            Architecture
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.02]">
            Make the stack legible.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The point is not more tooling. The point is a clean path from
            healthcare data foundations to executive action.
          </p>
        </div>

        <div className="mt-14 rounded-[2rem] border border-foreground/[0.08] bg-gradient-to-b from-background to-muted/40 p-6 md:p-8">
          <div className="rounded-[1.5rem] border border-foreground/[0.08] bg-background p-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Trust boundary
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
              TRE environments, confidential compute, and governed execution.
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {trustLayer.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-muted px-3 py-2 text-sm text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr_1fr_0.95fr]">
            {layers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-[1.5rem] border border-foreground/[0.08] bg-background p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {layer.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                  {layer.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {layer.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-muted px-3 py-2 text-sm text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-[1.5rem] bg-foreground text-background p-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-background/45">
                Delivery and outcomes
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                What leadership and operators actually receive
              </h3>
              <div className="mt-6 grid gap-3">
                {deliverySurfaces.map((surface) => (
                  <div
                    key={surface}
                    className="rounded-2xl border border-background/10 bg-background/6 px-4 py-3 text-sm text-background/85"
                  >
                    {surface}
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3">
                {executiveSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-2xl border border-background/10 bg-background/6 px-4 py-3 text-sm text-background/85"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
