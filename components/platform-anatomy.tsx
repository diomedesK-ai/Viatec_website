"use client"

import { useState } from "react"

/* ─── SVG Icons ─── */

function IconDb({ s = 24 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  )
}

function IconNetwork({ s = 24 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2.5" />
      <line x1="7.8" y1="7.2" x2="10" y2="10" /><line x1="16.2" y1="7.2" x2="14" y2="10" />
      <line x1="7.8" y1="16.8" x2="10" y2="14" /><line x1="16.2" y1="16.8" x2="14" y2="14" />
    </svg>
  )
}

function IconAgent({ s = 24 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" /><path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" /><path d="M18 12h4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}

function IconDashboard({ s = 24 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="4" rx="1" />
      <rect x="14" y="10" width="7" height="11" rx="1" />
      <rect x="3" y="13" width="7" height="8" rx="1" />
    </svg>
  )
}

function IconShield({ s = 16 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function IconFile() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

function IconServer() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function IconPulse() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function IconTree() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="5" rx="1" />
      <rect x="2" y="17" width="6" height="5" rx="1" />
      <rect x="16" y="17" width="6" height="5" rx="1" />
      <line x1="12" y1="7" x2="12" y2="12" />
      <line x1="5" y1="17" x2="5" y2="12" />
      <line x1="19" y1="17" x2="19" y2="12" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function IconCompass() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function IconSparkle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
  )
}

function IconEye() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function IconShieldPlain() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function IconMic() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}

function IconGrid() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}

function IconMessage() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

/* ─── Layer Data ─── */

const LAYERS = [
  {
    label: "Flexible Data Lakehouse",
    tagline: "Any document. Any database. Any system.",
    accent: "#8896ab",
    cardIcon: <IconDb s={32} />,
    detailIcon: <IconDb s={18} />,
    details: [
      { icon: <IconFile />, title: "Documents & Files", desc: "PDFs, manuals, specs, reports" },
      { icon: <IconDb s={20} />, title: "Any Database", desc: "SQL, NoSQL, time-series, graph" },
      { icon: <IconServer />, title: "Enterprise Systems", desc: "ERPs, SCADA, CMMS, GIS, OEM portals" },
      { icon: <IconPulse />, title: "IoT & Telemetry", desc: "Sensors, telematics, real-time streams" },
    ],
  },
  {
    label: "Industry-Specific Knowledge",
    tagline: "Domain ontologies, asset taxonomies, operational context.",
    accent: "#7a9e8a",
    cardIcon: <IconNetwork s={32} />,
    detailIcon: <IconNetwork s={18} />,
    details: [
      { icon: <IconTree />, title: "Asset Taxonomies", desc: "Equipment hierarchies & relationships" },
      { icon: <IconNetwork s={20} />, title: "Domain Ontologies", desc: "Industry-specific knowledge models" },
      { icon: <IconCompass />, title: "Operational Context", desc: "Rules, thresholds, constraints" },
      { icon: <IconSparkle />, title: "Auto-Structured", desc: "ML-driven schema & entity mapping" },
    ],
  },
  {
    label: "Agentic Workforce & Workflows",
    tagline: "Autonomous agents that detect, decide, and act.",
    accent: "#b8a07a",
    cardIcon: <IconAgent s={32} />,
    detailIcon: <IconAgent s={18} />,
    details: [
      { icon: <IconEye />, title: "Pattern Detection", desc: "Signal analysis & anomaly scoring" },
      { icon: <IconBolt />, title: "Autonomous Actions", desc: "Work orders, alerts, dispatch" },
      { icon: <IconLayers />, title: "Multi-LLM Orchestration", desc: "Claude, GPT, Mistral auto-fallback" },
      { icon: <IconShieldPlain />, title: "Self-Healing", desc: "Auto-recovery & error correction" },
    ],
  },
  {
    label: "Just-in-Time Intelligence & Experience",
    tagline: "Dashboards, voice, text, images — any channel.",
    accent: "#9f8eb8",
    cardIcon: <IconDashboard s={32} />,
    detailIcon: <IconDashboard s={18} />,
    details: [
      { icon: <IconChart />, title: "Dynamic Dashboards", desc: "Real-time analytics & visualizations" },
      { icon: <IconMic />, title: "Voice & Text", desc: "Natural language & speech queries" },
      { icon: <IconGrid />, title: "Multi-Modal", desc: "Images, documents, structured data" },
      { icon: <IconMessage />, title: "Any Channel", desc: "WhatsApp, Teams, apps, embedded" },
    ],
  },
]

/* ─── Component ─── */

export function PlatformAnatomy() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-32 md:py-48">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground text-center mb-5">
          Architecture
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
          Intelligence that never sleeps.
        </h2>
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed">
          An industry-native agentic system that discovers data, organizes it,
          understands it — and acts on it.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        {/* Security / Guardrails ring */}
        <div className="relative rounded-[2rem] border border-foreground/[0.06] p-5 md:p-8 lg:p-10 platform-security-ring">
          {/* Top label */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background px-4">
            <span className="text-muted-foreground/50"><IconShield s={13} /></span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 whitespace-nowrap font-medium">
              Security · Ethics · Compliance · Guardrails
            </span>
            <span className="text-muted-foreground/50"><IconShield s={13} /></span>
          </div>

          {/* Layer cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {LAYERS.map((layer, i) => {
              const isActive = active === i
              const hasActive = active !== null
              return (
                <button
                  key={i}
                  onClick={() => setActive(isActive ? null : i)}
                  className="relative group text-left rounded-2xl cursor-pointer outline-none overflow-hidden border border-foreground/[0.06] bg-foreground/[0.02] hover:bg-foreground/[0.04]"
                  style={{
                    transform: isActive
                      ? "translateY(-6px)"
                      : hasActive
                        ? "scale(0.98)"
                        : "translateY(0)",
                    boxShadow: isActive
                      ? `0 12px 40px -8px rgba(0,0,0,0.08), 0 0 0 1px ${layer.accent}30`
                      : "0 1px 3px 0 rgba(0,0,0,0.02)",
                    opacity: hasActive && !isActive ? 0.45 : 1,
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Accent top line */}
                  <div
                    className="absolute top-0 inset-x-0 h-[2px]"
                    style={{
                      background: layer.accent,
                      opacity: isActive ? 0.7 : 0.25,
                      transition: "opacity 0.5s ease",
                    }}
                  />

                  <div className="p-5 md:p-6 flex flex-col justify-between" style={{ minHeight: "200px" }}>
                    <div
                      className="transition-opacity duration-300 opacity-50 group-hover:opacity-75"
                      style={{ color: layer.accent }}
                    >
                      {layer.cardIcon}
                    </div>
                    <div className="mt-8">
                      <h3 className="font-semibold text-base md:text-lg leading-snug mb-1.5 tracking-[-0.01em]">
                        {layer.label}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {layer.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Expanded detail panel */}
          {active !== null && (
            <div
              key={active}
              className="mt-6 md:mt-8 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] animate-platform-detail-in"
            >
              <div className="p-5 md:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${LAYERS[active].accent}15`,
                      color: LAYERS[active].accent,
                    }}
                  >
                    {LAYERS[active].detailIcon}
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-[-0.01em]">
                      {LAYERS[active].label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {LAYERS[active].tagline}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {LAYERS[active].details.map((detail, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-foreground/[0.04] bg-foreground/[0.015] hover:bg-foreground/[0.04] transition-colors animate-platform-item-in"
                      style={{ animationDelay: `${j * 70}ms` }}
                    >
                      <div
                        className="flex-shrink-0 mt-0.5 opacity-70"
                        style={{ color: LAYERS[active].accent }}
                      >
                        {detail.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{detail.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {detail.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Corner shields */}
          <div className="absolute -bottom-2.5 left-8 text-muted-foreground/20">
            <IconShield s={12} />
          </div>
          <div className="absolute -bottom-2.5 right-8 text-muted-foreground/20">
            <IconShield s={12} />
          </div>
        </div>

        <p className="text-center text-[11px] text-muted-foreground/35 mt-5 tracking-wide">
          Tap a layer to explore
        </p>
      </div>
    </section>
  )
}
