"use client"

import { useState, useEffect } from "react"

const rotatingWords = [
  "clarity.",
  "action.",
  "outcomes.",
  "competitive edge.",
  "command.",
  "foresight.",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 400)
    }, 2800)
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
            <span
              className="inline-block transition-all duration-500 ease-out ml-[0.25em]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
                filter: isVisible ? "blur(0px)" : "blur(4px)",
              }}
            >
              {rotatingWords[currentIndex]}
            </span>
          </span>
        </h1>
        <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          An industry-native agentic intelligence platform that discovers
          data, organizes it, understands it — and acts on it.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 mt-14 md:mt-20 animate-hero-image-enter">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)]">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2400&q=90&auto=format&fit=crop"
            alt="Modern smart industrial facility with autonomous intelligent systems"
            className="w-full h-auto block"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
