"use client"

import { useState } from "react"

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

const THERAPEUTIC_AREAS = [
  "Rare Disease",
  "Gene Therapy",
  "Oncology",
  "Immunology",
  "Cell & Gene",
]

const AGENTS = [
  {
    name: "Clinical Trial Intelligence",
    description:
      "Protocol optimization, site selection, enrollment forecasting",
  },
  {
    name: "Pharmacovigilance Agent",
    description:
      "ADE signal detection, CIOMS/MedWatch automation, interaction monitoring",
  },
  {
    name: "Regulatory Intelligence",
    description:
      "FDA/EMA submission tracking, label change impact, inspection readiness",
  },
  {
    name: "Medical Affairs Agent",
    description:
      "KOL mapping, MSL territory optimization, medical information requests",
  },
  {
    name: "Commercial Launch Agent",
    description:
      "Market access, formulary tracking, payer analytics, launch sequencing",
  },
  {
    name: "Real-World Evidence Agent",
    description:
      "Claims analysis, patient outcomes, comparative effectiveness",
  },
  {
    name: "Supply Chain & GMP Agent",
    description:
      "Batch release, deviation management, cold-chain monitoring",
  },
  {
    name: "Patient Journey Agent",
    description:
      "Time to diagnosis, treatment pathways, adherence, access barriers",
  },
  {
    name: "Drug Interaction & Safety Agent",
    description:
      "KG-powered interaction checks, contraindication alerts, dosing verification",
  },
]

const SAFEGUARD_LAYERS = [
  {
    number: "01",
    title: "Knowledge Graph",
    tagline: "Every edge curated — not scraped.",
    description:
      "Expert-verified drug-disease-gene-pathway relationships queryable by agents.",
  },
  {
    number: "02",
    title: "RAG Document Intelligence",
    tagline: "Citations from your evidence base, not the internet.",
    description:
      "Agents search approved clinical guidelines, FDA labels, and trial protocols before answering.",
  },
  {
    number: "03",
    title: "Critiquers",
    tagline: "Multi-agent peer review, not single-pass generation.",
    description:
      "Adversarial second-opinion agents validate every output against the KG, RAG evidence, and clinical rules.",
  },
  {
    number: "04",
    title: "Clinical Guardrails",
    tagline: "Pediatric weight-based dosing without weight input? Blocked.",
    description:
      "Hard-coded rules for dosing limits, interaction severity, and contraindications override the LLM.",
  },
  {
    number: "05",
    title: "Confidence Gating",
    tagline: "Never silently wrong.",
    description:
      "Below-threshold answers blocked and escalated to human experts.",
  },
  {
    number: "06",
    title: "Audit & Transparency",
    tagline: "Every answer traceable. Every decision logged.",
    description:
      "Complete audit trail of every interaction: sources consulted, agents invoked, guardrails triggered.",
  },
]

const ARCH_LAYERS = [
  {
    label: "Interface",
    items: ["Single User", "Organization / Multi-user", "Secure / Firewall", "Multi Screen", "Multi Device", "Full Scalability"],
    accent: true,
  },
  {
    label: "Brain — Agent Building Architecture",
    items: ["Clinical Trial Intelligence", "Pharmacovigilance", "Regulatory", "Medical Affairs", "Commercial Launch", "RWE", "Supply Chain", "Patient Journey", "Drug Safety", "Custom..."],
    accent: false,
  },
  {
    label: "Knowledge Graph + Plug-in Architecture",
    items: ["Fine-tuned models", "Scaffold", "Healthcare ontologies", "Extensible plugins"],
    accent: true,
  },
  {
    label: "Backplane — Data Source Connectors",
    items: ["FHIR", "OMOP", "DICOM", "Claims", "Clinical Notes", "PPT", "Excel", "Databases", "APIs", "MCP"],
    accent: false,
  },
  {
    label: "Virtual Storage Layer",
    items: ["Kubernetes", "GPU", "RAM", "Storage", "Azure / On-Prem"],
    accent: false,
  },
  {
    label: "Pharma Core Technology Base",
    items: ["HIPAA", "GxP", "21 CFR Part 11", "Security", "Token Management", "SOC 2", "Secure Source Control"],
    accent: false,
  },
]

const ARCH_LEFT_RAIL = ["Guardrails", "Security Posture", "Critiquers", "Clinical Rules", "Confidence Gating", "Audit Trail"]
const ARCH_RIGHT_RAIL = ["Claude", "GPT", "Mistral", "Open Source LLMs", "Graffs.io RAG", "Integration Engine"]

const CASE_STUDIES = [
  {
    number: "Case 01",
    title: "Drug Interaction Check",
    scenario:
      '"Can I prescribe aspirin to a 68-year-old already taking warfarin?"',
    steps: [
      {
        layer: "Fine-Tuned LLM",
        badge: "FT",
        badgeColor: "bg-sky-50 text-sky-700",
        text: "Recognises warfarin as an anticoagulant. Formulates a KG query for drug-drug interactions on the \"interacts with\" edge type. Simultaneously queries RAG for anticoagulation guidelines in elderly patients.",
      },
      {
        layer: "Knowledge Graph",
        badge: "KG",
        badgeColor: "bg-sky-50 text-sky-700",
        text: "Aspirin → interacts with → Warfarin → increases → Bleeding Risk. Severity: High. Monitoring: INR test required.",
      },
      {
        layer: "RAG Documents",
        badge: "RAG",
        badgeColor: "bg-foreground/[0.05] text-foreground/70",
        text: "Returns ACC/AHA guidelines on combination antithrombotic therapy in elderly patients, including risk-benefit assessment guidance.",
      },
      {
        layer: "LLM Synthesises",
        badge: "LLM",
        badgeColor: "bg-sky-50 text-sky-700",
        text: "Combines KG facts and guideline text — recommends assessing bleeding risk, reviewing whether combination therapy is clinically necessary, and considering gastroprotection when indicated.",
      },
      {
        layer: "Guardrail Validation",
        badge: "G",
        badgeColor: "bg-foreground/[0.05] text-foreground/70",
        text: "Clinical rules engine confirms interaction severity matches KG. Source verification checks material claims trace to KG edges and RAG passages. Answer delivered with interaction warning.",
      },
    ],
  },
  {
    number: "Case 02",
    title: "Pediatric Dosing — Weight Required",
    scenario:
      '"What\'s the recommended dosage of amoxicillin for a 4-year-old with strep throat?"',
    steps: [
      {
        layer: "Fine-Tuned LLM",
        badge: "FT",
        badgeColor: "bg-sky-50 text-sky-700",
        text: "Recognises pediatric dosing question. Queries KG for Amoxicillin → treats → Group A Strep with dosage properties. Queries RAG for CDC pediatric dosing guidance.",
      },
      {
        layer: "Knowledge Graph",
        badge: "KG",
        badgeColor: "bg-sky-50 text-sky-700",
        text: "Returns weight-based dosing: 50 mg/kg once daily (max 1000 mg) or 25 mg/kg twice daily (max 500 mg/dose), for 10 days. Requires patient weight.",
      },
      {
        layer: "LLM Hallucinates",
        badge: "!!",
        badgeColor: "bg-foreground text-background",
        text: 'Despite correct retrieval stating weight is required, the model generates "500mg twice daily" — an adult dose, without requesting the child\'s weight. The rest sounds clinically fluent, making the error harder to spot.',
      },
      {
        layer: "Guardrail Catches It",
        badge: "G",
        badgeColor: "bg-foreground text-background",
        text: "Clinical rules engine detects two violations: (1) fixed-dose without required weight input, (2) 500mg exceeds per-dose maximum for estimated pediatric weight at age 4. Response blocked. System asks for weight. Flagged for human review.",
      },
    ],
  },
]

const SOVEREIGNTY_CARDS = [
  {
    title: "Trusted Research Environment (TRE)",
    description:
      "Deploy Graffs inside your TRE. Patient data, trial records, proprietary research stay within your sovereign boundary. No exfiltration, no model training on your data.",
    example:
      "Run pharmacovigilance on real-world data inside NHS Digital's TRE — not a single record leaves.",
  },
  {
    title: "Confidential LLMs",
    description:
      "Models execute inside hardware-encrypted enclaves (TEEs). Even Graffs cannot see your prompts, data, or intermediate states.",
    example:
      "Query gene therapy outcomes across 50,000 records — processed in encrypted memory no operator can observe.",
  },
  {
    title: "Multiparty Computation (MPC)",
    description:
      "Pharma + CRO + hospital + payer contribute data to joint analysis without any party seeing raw data. Only aggregates released.",
    example:
      "Three sites pool trial data for cross-site enrollment analysis. Each sees only the aggregate.",
  },
  {
    title: "Confidential Data Sharing",
    description:
      "Share derived insights with partners, regulators, or payers without sharing underlying patient data. Cryptographic attestation proves correctness.",
    example:
      "Share RWE with the FDA — they see the analysis and attestation, not the claims data.",
  },
]

const INTEROP_CARDS = [
  {
    title: "FHIR R4 Native",
    description:
      "Ingest, query, and reason over FHIR resources natively. EHR data, clinical documents, patient records — all structured and agent-ready from day one.",
  },
  {
    title: "OMOP / OHDSI",
    description:
      "Transform data into OMOP common data model for standardized observational research and comparative effectiveness studies.",
  },
  {
    title: "DICOM Imaging",
    description:
      "Bring medical imaging data (CT, MRI, pathology) into the analytics layer. Agents cross-reference imaging metadata with clinical records.",
  },
  {
    title: "CMS Claims & SDOH",
    description:
      "Ingest CMS CCLF claims data and Social Determinants of Health datasets for real-world evidence, market access, and patient journey analysis.",
  },
  {
    title: "Unstructured Clinical Notes",
    description:
      "AI-powered enrichment of free-text clinical notes. Extract structured entities (diagnoses, medications, procedures) from physician narratives.",
  },
  {
    title: "MCP (Model Context Protocol)",
    description:
      "Open protocol for connecting AI agents to any external tool, database, or API. Your LIMS, CTMS, EDC, safety databases, and ERP become agent-accessible without custom code.",
  },
]

const COMPARISON_ROWS = [
  {
    dimension: "Scope",
    traditional: "Commercial analytics only (6 fixed agents)",
    graffs:
      "Full pharma value chain — R&D to post-market (9+ extensible agents)",
  },
  {
    dimension: "Safety architecture",
    traditional: '"Hallucination-free" via prompt engineering',
    graffs:
      "6-layer evidence grounding: KG + RAG + Critiquers + Clinical Rules + Confidence Gates + Audit",
  },
  {
    dimension: "Validation",
    traditional: "Single-pass LLM generation",
    graffs: "Multi-agent Critiquers independently validate every output against KG and RAG evidence",
  },
  {
    dimension: "Configuration",
    traditional: "YAML, Python, consultant setup",
    graffs: "Auto-discover, auto-structure — zero configuration",
  },
  {
    dimension: "Data Sovereignty",
    traditional: "Your data on their cloud, their terms",
    graffs:
      "TRE, Confidential LLMs, MPC — data never leaves your boundary",
  },
  {
    dimension: "Interoperability",
    traditional: "Custom connectors per source",
    graffs: "Native FHIR, OMOP, DICOM, CMS Claims, SDOH + MCP protocol",
  },
  {
    dimension: "Compliance",
    traditional: "Generic cloud security",
    graffs:
      "HIPAA, GxP, 21 CFR Part 11, SOC 2, cryptographic attestation",
  },
  {
    dimension: "Extensibility",
    traditional: "Fixed agent library",
    graffs:
      "Agent Building Architecture with plugin support — build custom agents in minutes",
  },
]

const USE_CASES = [
  {
    eyebrow: "Rare Disease Gene Therapy Launch",
    text: "Launching a gene therapy for OTC deficiency? The Commercial Launch Agent models formulary trajectories across top payers. The Patient Journey Agent maps the diagnostic odyssey from first symptom to confirmed diagnosis. The Medical Affairs Agent identifies KOLs publishing on the condition. The Critiquer validates every projection against historical launch data in the Knowledge Graph. All from a single conversational query — grounded in your FHIR patient data and OMOP-standardized claims.",
  },
  {
    eyebrow: "Post-Market Pharmacovigilance",
    text: "A new adverse event pattern emerges post-approval. The Pharmacovigilance Agent cross-references the Knowledge Graph, identifies the signal, drafts a CIOMS II line listing, and escalates to your safety team. The Critiquer verifies signal thresholds, checks field completeness, and confirms the statistical method before the report reaches your safety officer. Minutes, not weeks. Evidence-grounded, not LLM-guessed.",
  },
  {
    eyebrow: "Multi-Site Confidential Trial Analysis",
    text: "Three academic medical centers and your CRO need to pool Phase III data for an interim futility analysis — but no site can share raw patient records. Graffs deploys inside each site's TRE, runs the analysis via Multiparty Computation across encrypted enclaves, and delivers aggregate efficacy and safety endpoints to the DSMB. No raw data crosses any boundary. The DSMB receives cryptographic attestation that the computation was correct. FHIR-native. OMOP-standardized. Zero configuration at each site.",
  },
]

const COMPLIANCE_BADGES = [
  "HIPAA",
  "GxP",
  "21 CFR Part 11",
  "SOC 2 Type II",
  "GDPR",
  "TRE-Ready",
  "Confidential Compute",
  "FHIR R4",
  "OMOP",
  "DICOM",
  "MCP",
  "Cryptographic Attestation",
]

/* ═══════════════════════════════════════════════════════════════════
   ICONS
   ═══════════════════════════════════════════════════════════════════ */

function IconShield({ s = 16 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-1.5">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/25">
        <path d="M8 3v10M4 9l4 4 4-4" />
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MODULE 1 — HERO
   ═══════════════════════════════════════════════════════════════════ */

function HeroModule() {
  return (
    <section className="pt-34 md:pt-44 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground mb-6">
          Graffs for Healthcare
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.05em] leading-[0.95] text-balance">
          From molecule to market.
          <br />
          One intelligent platform.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Clinical trials, pharmacovigilance, regulatory, manufacturing,
          commercial launch — connected by a Knowledge Graph, secured by
          Confidential Compute, grounded in evidence. Purpose-built for rare
          disease, oncology, and gene therapy.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {THERAPEUTIC_AREAS.map((area) => (
            <span
              key={area}
              className="rounded-full bg-foreground/[0.04] border border-foreground/[0.06] px-4 py-2 text-sm text-foreground/70"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MODULE 2 — AGENTS
   ═══════════════════════════════════════════════════════════════════ */

function AgentsModule() {
  return (
    <section>
      <div className="bg-foreground text-background py-28 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/40 text-center mb-5">
            Purpose-built agents
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
            Nine agents. Every stage of pharma.
          </h2>
          <p className="text-center text-background/45 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            From first-in-human to post-market surveillance — each agent
            reasons over the Knowledge Graph, validates through Critiquers,
            and operates within Clinical Guardrails.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden">
            {AGENTS.map((agent) => (
              <div key={agent.name} className="bg-foreground p-10 md:p-12">
                <p className="text-lg font-semibold mb-3">{agent.name}</p>
                <p className="text-background/40 text-sm leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-background/50 text-sm md:text-base italic max-w-3xl mx-auto leading-relaxed">
            Every agent is backed by a Knowledge Graph, validated by a
            Critiquer, and governed by Clinical Guardrails.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MODULE 3 — PLATFORM ARCHITECTURE + TRUST
   ═══════════════════════════════════════════════════════════════════ */

function ArchitectureModule() {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground text-center mb-5">
          Platform architecture
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
          Every layer, one view.
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          From infrastructure to interface — with guardrails and LLMs running
          the full height of the stack.
        </p>

        {/* Apple-style frosted container */}
        <div className="rounded-3xl shadow-[0_2px_40px_rgba(0,0,0,0.045)] bg-white/80 backdrop-blur-xl p-6 md:p-8 overflow-x-auto">
          <div className="min-w-[720px] flex gap-3">

            {/* Left rail — Guardrails */}
            <div className="w-[110px] flex-shrink-0 rounded-2xl bg-sky-50/70 flex flex-col overflow-hidden">
              <div className="px-3 py-3.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-600 font-semibold text-center">Guardrails</p>
              </div>
              {ARCH_LEFT_RAIL.map((item, i) => (
                <div
                  key={item}
                  className={`flex-1 flex items-center justify-center px-3 py-3 text-[11px] text-sky-700/65 text-center leading-tight ${
                    i < ARCH_LEFT_RAIL.length - 1 ? "border-b border-sky-200/40" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Center — stacked layers */}
            <div className="flex-1 space-y-2.5 min-w-0">
              {ARCH_LAYERS.map((layer) => (
                <div
                  key={layer.label}
                  className={`rounded-2xl px-5 py-4 ${
                    layer.accent
                      ? "bg-sky-50/70"
                      : "bg-foreground/[0.025]"
                  }`}
                >
                  <p
                    className={`text-[11px] uppercase tracking-[0.16em] font-semibold mb-3 ${
                      layer.accent ? "text-sky-600" : "text-foreground/40"
                    }`}
                  >
                    {layer.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium ${
                          layer.accent
                            ? "bg-white/80 text-sky-700 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                            : "bg-white/70 text-foreground/55 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right rail — LLMs & RAG */}
            <div className="w-[110px] flex-shrink-0 rounded-2xl bg-foreground/[0.025] flex flex-col overflow-hidden">
              <div className="px-3 py-3.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold text-center">LLMs & RAG</p>
              </div>
              {ARCH_RIGHT_RAIL.map((item, i) => (
                <div
                  key={item}
                  className={`flex-1 flex items-center justify-center px-3 py-3 text-[11px] text-foreground/45 text-center leading-tight ${
                    i < ARCH_RIGHT_RAIL.length - 1 ? "border-b border-foreground/[0.04]" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>

        <p className="text-center text-[11px] text-muted-foreground/30 mt-5 tracking-wide">
          Graffs Platform Architecture
        </p>
      </div>
    </section>
  )
}

function TrustModule() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground text-center mb-5">
          Safety architecture
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
          Six layers. One goal: never silently wrong.
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Fine-tuning reduces error frequency. The remaining five layers catch
          what remains. In healthcare, all six work together because the margin
          for error must approach zero.
        </p>

        {/* Critiquers callout */}
        <div className="rounded-2xl border-l-[3px] border-l-sky-300 border border-foreground/[0.06] bg-foreground/[0.03] p-8 md:p-10 mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-5">
            Every agent has a critic. By design.
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            When an agent generates an answer, a specialized Critiquer agent
            independently reviews the output against the Knowledge Graph, RAG
            evidence, and clinical rules. Unsupported claims, logical gaps, or
            dosing inconsistencies trigger revision or escalation before the
            answer reaches the user.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm mb-8">
            <span className="rounded-xl bg-foreground/[0.06] border border-foreground/[0.08] px-4 py-2.5 font-medium">
              Agent Output
            </span>
            <span className="text-muted-foreground text-lg">→</span>
            <span className="rounded-xl bg-foreground/[0.06] border border-foreground/[0.08] px-4 py-2.5 font-medium">
              Critiquer Review (KG + RAG + Rules)
            </span>
            <span className="text-muted-foreground text-lg">→</span>
            <div className="flex gap-2">
              <span className="rounded-full bg-foreground/[0.06] border border-foreground/[0.08] px-3 py-2 text-foreground/70 text-xs font-medium">
                Pass
              </span>
              <span className="rounded-full bg-foreground/[0.06] border border-foreground/[0.08] px-3 py-2 text-foreground/70 text-xs font-medium">
                Revise
              </span>
              <span className="rounded-full bg-foreground/[0.06] border border-foreground/[0.08] px-3 py-2 text-foreground/70 text-xs font-medium">
                Escalate
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-foreground/[0.04] p-5 text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Pharma example:</span>{" "}
            The Pharmacovigilance Agent drafts a safety signal report. The
            Critiquer cross-checks every cited ADE against the Knowledge Graph,
            verifies CIOMS field completeness, and confirms the statistical
            method. Only then does the report reach your safety officer.
          </div>
        </div>

        {/* 6 safeguard cards — clean monochrome with light blue accent numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/[0.08] rounded-3xl overflow-hidden">
          {SAFEGUARD_LAYERS.map((layer) => (
            <div
              key={layer.title}
              className="bg-background p-8 md:p-10"
            >
              <div className="text-2xl font-bold mb-2 text-sky-500">
                {layer.number}
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-[-0.02em]">
                {layer.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {layer.description}
              </p>
              <p className="text-xs text-foreground/40 italic">
                {layer.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MODULE 3B — CLINICAL WALKTHROUGHS (from explainer)
   ═══════════════════════════════════════════════════════════════════ */

function ClinicalWalkthroughModule() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground text-center mb-5">
          Architecture in action
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] text-center mb-16 text-balance leading-[1.05]">
          Watch every safeguard fire on a real question.
        </h2>

        <div className="space-y-10">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.title}
              className="rounded-2xl border border-foreground/[0.08] overflow-hidden"
            >
              <div className="p-6 md:p-8 border-b border-foreground/[0.06]">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground mb-3">
                  {cs.number}
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-2">
                  {cs.title}
                </h3>
                <p className="text-muted-foreground italic">{cs.scenario}</p>
              </div>
              <div className="divide-y divide-foreground/[0.06]">
                {cs.steps.map((step) => (
                  <div
                    key={step.layer}
                    className="flex gap-4 p-5 md:p-6"
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${step.badgeColor}`}
                    >
                      {step.badge}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground mb-1">
                        {step.layer}
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MODULE 4 — DATA SOVEREIGNTY
   ═══════════════════════════════════════════════════════════════════ */

function SovereigntyModule() {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-[2rem] border border-foreground/[0.12] p-5 md:p-8">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background px-4">
            <span className="text-muted-foreground/70">
              <IconShield s={13} />
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-muted-foreground/80 whitespace-nowrap font-medium">
              Data Sovereignty
            </span>
            <span className="text-muted-foreground/70">
              <IconShield s={13} />
            </span>
          </div>

          <div className="text-center mt-4 mb-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] mb-6 text-balance leading-[1.05]">
              Your data never leaves your boundary. Ever.
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Graffs runs inside Trusted Research Environments with Confidential
              LLMs on Confidential Compute — enabling collaboration without
              exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SOVEREIGNTY_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.02] p-6 md:p-8"
              >
                <h3 className="text-xl font-semibold mb-3 tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-5">
                  {card.description}
                </p>
                <div className="rounded-xl bg-foreground/[0.04] p-4 text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Example:</span>{" "}
                  {card.example}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-2.5 left-8 text-muted-foreground/35">
            <IconShield s={12} />
          </div>
          <div className="absolute -bottom-2.5 right-8 text-muted-foreground/35">
            <IconShield s={12} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MODULE 5 — INTEROPERABILITY
   ═══════════════════════════════════════════════════════════════════ */

function ConnectedModule() {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground text-center mb-5">
          Interoperability
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-center mb-6 text-balance leading-[1.05]">
          Connected to every system you already run.
        </h2>
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          Built on Microsoft Fabric for Healthcare. Native support for every
          major healthcare data standard. MCP-enabled for seamless tool and
          system integration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/[0.08] rounded-3xl overflow-hidden mb-14">
          {INTEROP_CARDS.map((card) => (
            <div key={card.title} className="bg-background p-10 md:p-12">
              <h3 className="text-xl font-semibold mb-3 tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-l-[3px] border-l-foreground/30 border border-foreground/[0.06] bg-foreground/[0.03] p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-5">
            Auto-discover. Auto-structure. Auto-connect.
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Graffs auto-discovers data sources, maps schemas to healthcare
            ontologies (FHIR, OMOP, SNOMED, ICD, RXNORM), and structures them
            for agent consumption. No YAML. No Python. No consultant. Connect
            your Azure Health Data Services, Fabric workspace, or on-prem
            databases — agents start reasoning in minutes.
          </p>
          <p className="text-sm text-foreground/50 italic">
            Other platforms require weeks of configuration and a data
            engineering team. Graffs requires a connection string.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MODULE 6 — COMPARISON
   ═══════════════════════════════════════════════════════════════════ */

function ComparisonModule() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? COMPARISON_ROWS : COMPARISON_ROWS.slice(0, 4)

  return (
    <section className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground text-center mb-5">
          Why this is different
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-center mb-16 text-balance leading-[1.05]">
          Not incremental. Structural.
        </h2>

        <div className="rounded-3xl border border-foreground/[0.08] overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-foreground/[0.03]">
            <div className="p-5 md:p-6 text-xs uppercase tracking-[0.18em] text-muted-foreground border-b border-foreground/[0.06]">
              Dimension
            </div>
            <div className="p-5 md:p-6 text-xs uppercase tracking-[0.18em] text-muted-foreground/60 border-b border-l border-foreground/[0.06]">
              Traditional platforms
            </div>
            <div className="p-5 md:p-6 text-xs uppercase tracking-[0.18em] text-foreground font-semibold border-b border-l border-foreground/[0.06]">
              Graffs for Healthcare
            </div>
          </div>

          {visible.map((row, index) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-[1fr_1fr_1fr] ${
                index < visible.length - 1
                  ? "border-b border-foreground/[0.06]"
                  : ""
              }`}
            >
              <div className="p-5 md:p-6 text-sm font-medium">
                {row.dimension}
              </div>
              <div className="p-5 md:p-6 text-sm text-muted-foreground/60 border-l border-foreground/[0.06]">
                {row.traditional}
              </div>
              <div className="p-5 md:p-6 text-sm text-foreground border-l border-foreground/[0.06] bg-foreground/[0.02]">
                {row.graffs}
              </div>
            </div>
          ))}
        </div>

        {COMPARISON_ROWS.length > 4 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {expanded
                ? "Show less"
                : `Show all ${COMPARISON_ROWS.length} dimensions`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MODULE 7 — PROOF (Use Cases + Compliance)
   ═══════════════════════════════════════════════════════════════════ */

function ProofModule() {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground text-center mb-5">
          In practice
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-center mb-20 text-balance leading-[1.05]">
          Show me it works.
        </h2>

        <div className="space-y-16 md:space-y-24 mb-24">
          {USE_CASES.map((uc, index) => (
            <div
              key={uc.eyebrow}
              className="grid grid-cols-1 lg:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-14 items-start"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground mb-4">
                  Scenario {index + 1}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
                  {uc.eyebrow}
                </h3>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.02] p-6 md:p-8">
                  <p className="text-[15px] text-muted-foreground leading-[1.7]">
                    {uc.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-foreground/[0.08] bg-foreground/[0.02] p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground text-center mb-6">
            Compliance & Trust
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {COMPLIANCE_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-foreground/[0.10] bg-foreground/[0.04] px-4 py-2 text-sm text-foreground/70 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════════════════════════════ */

export function HealthcareSection() {
  return (
    <>
      <HeroModule />
      <AgentsModule />
      <ArchitectureModule />
      <TrustModule />
      <ClinicalWalkthroughModule />
      <SovereigntyModule />
      <ConnectedModule />
      <ComparisonModule />
      <ProofModule />
    </>
  )
}
