"use client"

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"

const KEYWORDS = [
  "Interoperability",
  "OneLake",
  "FHIR",
  "Multimodal",
  "Action",
]

const ROLE_TENSIONS = [
  {
    role: "CEO",
    question: "Where do we have strategic drag because data still lives in islands?",
  },
  {
    role: "COO",
    question: "Why does it still take this many teams to get one operational answer?",
  },
  {
    role: "Data Leadership",
    question: "How do we unlock Fabric without creating one more disconnected layer?",
  },
  {
    role: "Clinical and Operations",
    question: "Can we trust the answer enough to act on it now?",
  },
]

const HEALTHCARE_CAPABILITIES = [
  "FHIR foundations",
  "OMOP standardization",
  "DICOM transformation",
  "Claims and SDOH",
  "Clinical notes",
  "Azure Health Data Services",
  "OneLake unification",
  "TRE environments",
  "Confidential compute",
  "MCP-enabled agents",
]

const OUTCOMES = [
  "Sharper executive visibility",
  "Faster cross-functional decisions",
  "Less reporting drag",
  "A clearer path from AI to operations",
]

const KW_START = 1
const KW_END = KW_START + KEYWORDS.length - 1
const TOTAL_SLIDES = 1 + KEYWORDS.length + 5
const LIGHT_START = KW_END + 2

function isKeywordSlide(index: number) {
  return index >= KW_START && index <= KW_END
}

function Panel({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-[1.75rem] border border-current/10 ${className}`}>
      {children}
    </div>
  )
}

export function HealthcareKeynoteSplash({ onClose }: { onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideKey, setSlideKey] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const isLight = currentSlide >= LIGHT_START
  const isKw = isKeywordSlide(currentSlide)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return
      if (index < 0 || index >= TOTAL_SLIDES) return
      setIsTransitioning(true)
      const duration = isKeywordSlide(currentSlide) && isKeywordSlide(index) ? 350 : 500
      setTimeout(() => {
        setCurrentSlide(index)
        setSlideKey((value) => value + 1)
        setIsTransitioning(false)
      }, duration)
    },
    [currentSlide, isTransitioning],
  )

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo])
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault()
        next()
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault()
        prev()
      } else if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next, onClose, prev])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (autoPlay && currentSlide < TOTAL_SLIDES - 1) {
      const ms = isKeywordSlide(currentSlide) ? 4000 : 14000
      autoPlayRef.current = setTimeout(next, ms)
    }

    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    }
  }, [autoPlay, currentSlide, next])

  const touchStart = useRef<number | null>(null)

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStart.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - event.changedTouches[0].clientX
    if (Math.abs(diff) > 60) {
      diff > 0 ? next() : prev()
    }
    touchStart.current = null
  }

  const nonKeywordSlides = [0, ...Array.from({ length: TOTAL_SLIDES - KW_END - 1 }, (_, i) => KW_END + 1 + i)]

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex flex-col select-none transition-colors duration-1000 ${
        isLight ? "bg-white text-black" : "bg-black text-white"
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {autoPlay && currentSlide < TOTAL_SLIDES - 1 && (
        <div className="absolute top-0 left-0 right-0 h-[2px] z-10">
          <div
            key={`progress-${currentSlide}`}
            className={`h-full ${isLight ? "bg-black/10" : "bg-white/20"}`}
            style={{ animation: `keynote-progress ${isKw ? 4000 : 14000}ms linear forwards` }}
          />
        </div>
      )}

      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`transition-all text-xs tracking-widest uppercase cursor-pointer rounded-full px-3 py-1.5 ${
            autoPlay
              ? isLight
                ? "text-black/70 bg-black/[0.06]"
                : "text-white/90 bg-white/[0.1]"
              : isLight
                ? "text-black/30 hover:text-black/60"
                : "text-white/40 hover:text-white/70"
          }`}
        >
          {autoPlay ? "Auto ●" : "Auto ○"}
        </button>
        <button
          onClick={onClose}
          className={`${isLight ? "text-black/30 hover:text-black" : "text-white/40 hover:text-white"} transition-colors cursor-pointer p-2`}
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
      </div>

      <div
        className={`flex-1 flex items-center justify-center transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        key={slideKey}
      >
        {currentSlide === 0 && <HealthcareTitleSlide />}
        {isKw && <HealthcareKeywordSlide word={KEYWORDS[currentSlide - KW_START]} />}
        {currentSlide === KW_END + 1 && <HealthcareTensionsSlide />}
        {currentSlide === KW_END + 2 && <HealthcareFabricSlide />}
        {currentSlide === KW_END + 3 && <HealthcareCapabilitiesSlide />}
        {currentSlide === KW_END + 4 && <HealthcareOutcomesSlide />}
        {currentSlide === KW_END + 5 && <HealthcareCtaSlide />}
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-8 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          disabled={currentSlide === 0}
          className={`${isLight ? "text-black/15 hover:text-black/50" : "text-white/20 hover:text-white/60"} disabled:opacity-0 transition-all cursor-pointer p-2`}
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3L5 8L10 13" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goTo(0)}
            aria-label="Go to title"
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === 0
                ? `${isLight ? "bg-black" : "bg-white"} w-6`
                : `${isLight ? "bg-black/15 hover:bg-black/30" : "bg-white/25 hover:bg-white/40"} w-2`
            }`}
          />

          <div
            className={`flex items-center gap-1.5 rounded-full px-2 py-1.5 transition-colors duration-300 ${
              isKw ? (isLight ? "bg-black/[0.06]" : "bg-white/[0.08]") : "bg-transparent"
            }`}
          >
            {KEYWORDS.map((_, index) => {
              const slideIndex = KW_START + index
              const isCurrent = currentSlide === slideIndex
              const isPast = currentSlide > slideIndex

              return (
                <button
                  key={KEYWORDS[index]}
                  onClick={() => goTo(slideIndex)}
                  aria-label={`Go to: ${KEYWORDS[index]}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? `${isLight ? "bg-black" : "bg-white"} w-5`
                      : isPast
                        ? `${isLight ? "bg-black/30" : "bg-white/40"} w-2`
                        : `${isLight ? "bg-black/12 hover:bg-black/25" : "bg-white/20 hover:bg-white/35"} w-2`
                  }`}
                />
              )
            })}
          </div>

          {nonKeywordSlides.slice(1).map((slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goTo(slideIndex)}
              aria-label={`Go to slide ${slideIndex + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === slideIndex
                  ? `${isLight ? "bg-black" : "bg-white"} w-6`
                  : `${isLight ? "bg-black/15 hover:bg-black/30" : "bg-white/25 hover:bg-white/40"} w-2`
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className={`${isLight ? "text-black/15 hover:text-black/50" : "text-white/20 hover:text-white/60"} disabled:opacity-0 transition-all cursor-pointer p-2`}
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3L11 8L6 13" />
          </svg>
        </button>
      </div>
    </div>,
    document.body,
  )
}

function HealthcareTitleSlide() {
  return (
    <div className="text-center px-8 max-w-5xl">
      <p className="text-sm tracking-[0.32em] uppercase text-white/40 animate-keynote-fade-in">
        Graffs for Healthcare
      </p>
      <h1
        className="mt-8 text-5xl md:text-8xl font-medium tracking-[-0.05em] text-white animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0, textShadow: "0 0 80px rgba(255,255,255,0.12)" }}
      >
        From fragmented data
        <br />
        to coordinated action.
      </h1>
      <p
        className="mt-8 text-lg md:text-xl text-white/35 font-light tracking-wide animate-keynote-fade-in keynote-stagger-3"
        style={{ opacity: 0 }}
      >
        Built for healthcare leaders who want Fabric to feel strategic, not abstract.
      </p>
    </div>
  )
}

function HealthcareKeywordSlide({ word }: { word: string }) {
  return (
    <div className="text-center px-8">
      <h2
        className="text-5xl md:text-8xl font-semibold tracking-[-0.04em] text-white animate-keynote-keyword-reveal"
        style={{ textShadow: "0 0 80px rgba(255,255,255,0.12)" }}
      >
        {word}
      </h2>
    </div>
  )
}

function HealthcareTensionsSlide() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <h2
        className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] text-white/80 mb-16 text-center animate-keynote-fade-in"
        style={{ textShadow: "0 0 60px rgba(255,255,255,0.08)" }}
      >
        Different roles. Same drag.
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {ROLE_TENSIONS.map((item, index) => (
          <div
            key={item.role}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 animate-keynote-fade-in"
            style={{ opacity: 0, animationDelay: `${0.3 + index * 0.18}s` }}
          >
            <p className="text-xs tracking-[0.24em] uppercase text-white/35">{item.role}</p>
            <p className="mt-4 text-2xl leading-snug tracking-[-0.03em] text-white/88">
              {item.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function HealthcareFabricSlide() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-sm tracking-[0.3em] uppercase text-black/30 mb-4 text-center animate-keynote-fade-in">
        Why this matters now
      </p>
      <h2
        className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-8 text-center animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0 }}
      >
        Fabric gives you the estate.
        <br />
        Graffs gives you the operating layer.
      </h2>
      <div className="grid gap-4 lg:grid-cols-3 animate-keynote-image-reveal keynote-stagger-2">
        {[
          {
            title: "Healthcare foundations",
            description: "FHIR, OMOP, DICOM, claims, notes, and OneLake create the base.",
          },
          {
            title: "Healthcare reasoning",
            description: "Graffs adds context, grounding, and executive-ready interpretation.",
          },
          {
            title: "Healthcare action",
            description: "MCP-enabled agents route the next step into the right workflow and channel inside a governed trust boundary.",
          },
        ].map((card) => (
          <Panel key={card.title} className="bg-black/[0.03] p-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-black/35">Layer</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">
              {card.title}
            </h3>
            <p className="mt-4 text-black/55 leading-relaxed">{card.description}</p>
          </Panel>
        ))}
      </div>
    </div>
  )
}

function HealthcareCapabilitiesSlide() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-sm tracking-[0.3em] uppercase text-black/30 mb-4 text-center animate-keynote-fade-in">
        Native support
      </p>
      <h2
        className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-black text-center animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0 }}
      >
        Designed for the healthcare data reality you already have.
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-3 animate-keynote-image-reveal keynote-stagger-2">
        {HEALTHCARE_CAPABILITIES.map((item) => (
          <div
            key={item}
            className="rounded-full border border-black/10 bg-black/[0.03] px-5 py-3 text-sm text-black/75"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function HealthcareOutcomesSlide() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <p className="text-sm tracking-[0.3em] uppercase text-black/30 mb-4 text-center animate-keynote-fade-in">
        Executive payoff
      </p>
      <h2
        className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-black text-center animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0 }}
      >
        Cleaner decisions.
        <br />
        Less coordination drag.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 animate-keynote-image-reveal keynote-stagger-2">
        {OUTCOMES.map((item) => (
          <Panel key={item} className="bg-black/[0.03] p-6">
            <p className="text-2xl font-semibold tracking-[-0.03em] text-black">{item}</p>
          </Panel>
        ))}
      </div>
    </div>
  )
}

function HealthcareCtaSlide() {
  return (
    <div className="text-center px-8 max-w-4xl">
      <h2
        className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] text-black animate-keynote-scale-in"
      >
        Show healthcare leadership what the stack can become.
      </h2>
      <p
        className="mt-6 text-lg md:text-xl text-black/45 animate-keynote-fade-in keynote-stagger-2"
        style={{ opacity: 0 }}
      >
        A sharper healthcare surface. A sharper executive story.
      </p>
      <a
        href="https://demo.graffs.io/login"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex mt-12 h-14 px-10 items-center justify-center rounded-full bg-black text-white text-base font-medium hover:bg-black/85 transition-all animate-keynote-fade-in keynote-stagger-3 cursor-pointer"
        style={{ opacity: 0 }}
      >
        Explore the platform
      </a>
    </div>
  )
}
