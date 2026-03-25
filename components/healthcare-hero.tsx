"use client"

import { useMemo, useState } from "react"

const sourceSystems = [
  "FHIR / EHR",
  "Clinical Notes",
  "DICOM Imaging",
  "Claims",
  "Labs",
  "CRM / Outreach",
]

const foundationChips = [
  "OneLake",
  "OMOP",
  "Azure Health Data Services",
  "MCP-ready agents",
]

const quickViews = {
  FHIR: {
    label: "FHIR quick view",
    title: "Live patient and encounter context",
    description: "Pull together encounter history, medications, problems, orders, and care pathways into one grounded operational picture.",
    examples: [
      "Example: rising infusion delays by site, patient cohort, and care team",
      "Example: handoff view across scheduling, orders, and clinical follow-up",
      "Example: agent answers grounded in encounter, medication, and visit history",
    ],
  },
  OMOP: {
    label: "OMOP quick view",
    title: "Research-ready analytics that do not start from scratch",
    description: "Standardize clinical and observational data so analytics, cohorts, and longitudinal questions can move faster across teams.",
    examples: [
      "Example: cohort selection for trial feasibility or protocol planning",
      "Example: cross-site analytics using a shared data model instead of custom joins",
      "Example: agent-assisted exploration of phenotype, treatment, and outcome patterns",
    ],
  },
  DICOM: {
    label: "DICOM quick view",
    title: "Imaging becomes part of the same decision loop",
    description: "Imaging metadata and derived insights can sit beside clinical and operational context instead of living in a separate workflow.",
    examples: [
      "Example: imaging backlog visibility by modality, site, and turnaround risk",
      "Example: multimodal review alongside notes and claims context",
      "Example: agent triage for exceptions, escalation, and routing",
    ],
  },
  Claims: {
    label: "Claims quick view",
    title: "See operational friction in the financial trail",
    description: "Claims data makes delay, leakage, utilization, and coverage patterns far more visible to executive and operational teams.",
    examples: [
      "Example: prior auth bottlenecks by therapy, region, and account",
      "Example: reimbursement leakage connected back to care and outreach activity",
      "Example: agent-generated exception queues with the right owner attached",
    ],
  },
  "Clinical Notes": {
    label: "Clinical notes quick view",
    title: "Unstructured language becomes usable context",
    description: "Notes stop being trapped in narrative form and become part of the evidence layer for operators and leaders.",
    examples: [
      "Example: themes emerging across case notes, escalation logs, and support teams",
      "Example: patient friction signals extracted from free text",
      "Example: grounded summaries for executives without losing source traceability",
    ],
  },
  OneLake: {
    label: "OneLake quick view",
    title: "One estate, many healthcare motions",
    description: "Fabric organizes the storage and movement layer. Graffs turns that into a coherent operating experience across teams.",
    examples: [
      "Example: shared data foundation for patient, research, commercial, and operations",
      "Example: one governed base feeding dashboards, copilots, and agent workflows",
      "Example: less duplication across analytics programs and executive reporting",
    ],
  },
} as const

const outcomeCards = [
  {
    title: "Executive clarity",
    description: "One view across patient, research, and operational signals.",
  },
  {
    title: "Faster decisions",
    description: "From fragmented reporting cycles to live, grounded answers.",
  },
  {
    title: "Operational leverage",
    description: "Teams move from chasing data to acting on it.",
  },
]

export function HealthcareHero() {
  const [activeQuickView, setActiveQuickView] = useState<keyof typeof quickViews>("FHIR")
  const activeView = useMemo(() => quickViews[activeQuickView], [activeQuickView])

  return (
    <section className="pt-34 md:pt-40 pb-14 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground mb-5">
            Graffs for Healthcare
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.6rem] font-bold tracking-[-0.05em] leading-[0.95] text-balance">
            Turn fragmented health data into decisive action.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A healthcare-native intelligence layer for CEOs and COOs. Graffs
            unifies the data estate Microsoft Fabric for Healthcare makes
            possible, grounds it in healthcare context, and lets MCP-enabled
            agents move teams from question to action.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {(Object.keys(quickViews) as Array<keyof typeof quickViews>).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveQuickView(item)}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm transition-colors cursor-pointer ${
                activeQuickView === item
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/[0.08] bg-foreground/[0.03] text-foreground/75 hover:border-foreground/20 hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-foreground/[0.08] bg-background p-5 md:p-6 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.18)]">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                {activeView.label}
              </p>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
                {activeView.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {activeView.description}
              </p>
            </div>
            <div className="grid gap-3">
              {activeView.examples.map((example) => (
                <div
                  key={example}
                  className="rounded-2xl border border-foreground/[0.06] bg-muted/55 px-4 py-4 text-sm leading-relaxed text-foreground/80"
                >
                  {example}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-foreground/[0.08] bg-gradient-to-br from-background to-muted/40 p-6 md:p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.2)]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-foreground/[0.06] bg-background p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-4">
                  Interoperability first
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {sourceSystems.map((system) => (
                    <span
                      key={system}
                      className="rounded-full bg-muted px-3 py-2 text-sm text-foreground/80"
                    >
                      {system}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-foreground text-background p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-background/50 mb-4">
                  Fabric-native health data estate
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
                  Normalize once. Reason everywhere.
                </h2>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {foundationChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-background/12 bg-background/6 px-3 py-2 text-sm text-background/85"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {outcomeCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-foreground/[0.08] bg-background p-5"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                    Outcome
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
