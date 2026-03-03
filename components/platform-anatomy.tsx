export function PlatformAnatomy() {
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
        <div className="relative rounded-3xl overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.22)] border border-foreground/[0.04]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202026-03-03%20at%2019.04.35-crsWkg9dffgFUWyTjuPXeuImTYhzci.png"
            alt="Graffs.io Architecture - Multi-agent pipeline with orchestrator, intent specialist, data brain, and renderer"
            className="w-full h-auto block"
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}
