const proofCards = [
  {
    title: "Built for fragmented reality",
    description: "Not one system. Not one schema. Not one team. Graffs is designed for the mess healthcare already has.",
  },
  {
    title: "Azure-aligned by design",
    description: "A natural operating layer for Fabric, OneLake, and Azure Health data flows without a rip-and-replace motion.",
  },
  {
    title: "Executive-ready language",
    description: "The story lands at the board level: speed, leverage, governance, and sharper enterprise coordination.",
  },
]

export function HealthcareProofStrip() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-px rounded-[2rem] overflow-hidden bg-foreground/[0.08] md:grid-cols-3">
          {proofCards.map((card) => (
            <div key={card.title} className="bg-background p-8 md:p-10">
              <p className="text-lg font-semibold tracking-[-0.02em]">{card.title}</p>
              <p className="mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
