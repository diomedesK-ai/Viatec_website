"use client"

import { useState, useEffect, useCallback } from "react"

const rotatingWords = [
  "clarity.",
  "action.",
  "outcomes.",
  "command.",
  "foresight.",
]

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2400&q=90&auto=format&fit=crop",
    alt: "Advanced manufacturing and industrial automation",
  },
  {
    src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=2400&q=90&auto=format&fit=crop",
    alt: "Pharmaceutical research and drug manufacturing",
  },
  {
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=2400&q=90&auto=format&fit=crop",
    alt: "Electric vehicle battery technology and EV charging",
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2400&q=90&auto=format&fit=crop",
    alt: "Data center infrastructure and network operations",
  },
  {
    src: "https://images.unsplash.com/photo-1587370286959-23439ee6a87e?w=2400&q=90&auto=format&fit=crop",
    alt: "5G cell tower against clear blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=2400&q=90&auto=format&fit=crop",
    alt: "High-voltage transmission tower against bright blue sky",
  },
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const tick = useCallback(() => {
    const currentWord = rotatingWords[wordIndex]

    if (!isDeleting) {
      setDisplayText(currentWord.slice(0, displayText.length + 1))
      if (displayText.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1800)
        return
      }
    } else {
      setDisplayText(currentWord.slice(0, displayText.length - 1))
      if (displayText.length - 1 === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        return
      }
    }
  }, [displayText, wordIndex, isDeleting])

  useEffect(() => {
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting])

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-32 pb-0 md:pt-44">
      <div className="max-w-5xl mx-auto px-6 text-center animate-hero-enter">
        <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-[-0.045em] leading-[0.95] text-foreground">
          Turn complexity
          <br />
          <span className="inline-flex items-baseline">
            into{" "}
            <span className="inline-block ml-[0.25em] min-w-[2ch] text-left">
              {displayText}
              <span className="inline-block w-[3px] h-[0.85em] bg-foreground/80 ml-[1px] align-baseline animate-blink" />
            </span>
          </span>
        </h1>
        <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          An industry-native agentic intelligence platform that discovers
          data, organizes it, understands it — and acts on it.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-14 md:mt-20 animate-hero-image-enter">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)] aspect-[16/9]">
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
              style={{ opacity: i === imageIndex ? 1 : 0 }}
              draggable={false}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 pointer-events-none" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImageIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === imageIndex
                    ? "bg-white/80 scale-110"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
