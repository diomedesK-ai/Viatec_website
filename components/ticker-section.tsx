"use client"

const testimonials = [
  { quote: "Root cause in seconds, not days.", name: "Sarah M.", title: "VP Operations" },
  { quote: "This changes how we think about fleet data.", name: "David C.", title: "Chief Technology Officer" },
  { quote: "The TCO calculator alone paid for itself.", name: "Michael T.", title: "Chief Financial Officer" },
  { quote: "Like having a data scientist on every asset.", name: "Elena K.", title: "VP Engineering" },
  { quote: "Our agents caught an anomaly before the sensor alarm.", name: "James P.", title: "Reliability Engineer" },
  { quote: "Finally, intelligence that actually acts.", name: "Rachel A.", title: "Director of Operations" },
]

export function TickerSection() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-16 md:py-20 overflow-hidden">
      {/* Star rating */}
      <div className="flex items-center justify-center gap-1.5 mb-10">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill="currentColor" className="text-foreground/80">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Scrolling testimonials with names — Bauhaus Clock style */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-ticker">
          {doubled.map((t, index) => (
            <div key={index} className="flex-shrink-0 px-10 flex flex-col items-center text-center min-w-[280px]">
              <p className="text-base md:text-lg font-medium text-foreground mb-3 whitespace-nowrap">
                {`\u201C${t.quote}\u201D`}
              </p>
              <div className="flex items-center gap-3">
                {/* Avatar circle with initials */}
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-semibold text-foreground/60">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground/80">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
