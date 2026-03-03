"use client"

import { useState, useEffect, useCallback } from "react"

const rotatingWords = [
  "clarity.",
  "action.",
  "outcomes.",
  "command.",
  "foresight.",
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

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
