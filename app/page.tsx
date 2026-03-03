import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TickerSection } from "@/components/ticker-section"
import { ServiceAnatomy } from "@/components/service-anatomy"
import { PlatformAnatomy } from "@/components/platform-anatomy"
import { IndustriesSection } from "@/components/industries-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { AgentActionsSection } from "@/components/agent-actions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <TickerSection />
      <ServiceAnatomy />
      <PlatformAnatomy />
      <IndustriesSection />
      <CapabilitiesSection />
      <AgentActionsSection />
      <Footer />
    </main>
  )
}
