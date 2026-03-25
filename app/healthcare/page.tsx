import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HealthcareSection } from "@/components/healthcare-section"

export const metadata: Metadata = {
  title: "Graffs for Healthcare",
  description:
    "From molecule to market. Clinical trials, pharmacovigilance, regulatory, manufacturing, commercial launch — connected by a Knowledge Graph, secured by Confidential Compute, grounded in evidence.",
}

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HealthcareSection />
      <Footer />
    </main>
  )
}
