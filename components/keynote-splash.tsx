"use client"

import { useState, useEffect, useCallback, useRef, forwardRef, type ReactNode } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

function ImageFrame({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <div className={`relative rounded-3xl overflow-hidden ${
      light
        ? "shadow-[0_80px_160px_-40px_rgba(0,0,0,0.22)]"
        : "shadow-[0_60px_140px_-30px_rgba(255,255,255,0.08)]"
    } ${className}`}>
      {children}
    </div>
  )
}

const KEYWORDS = [
  "Data Silos",
  "Disconnected Systems",
  "Manual Reporting",
  "Limited Traceability",
  "Invisible Trends",
]

const CHALLENGES = [
  { role: "Fleet Manager", question: "Where is my data — and can I trust it?" },
  { role: "Finance Director", question: "How do I prove ROI, not just ESG compliance?" },
  { role: "Operations Lead", question: "Why won't my crews adopt the technology?" },
  { role: "Service Manager", question: "Why do I need five dashboards to get one answer?" },
  { role: "ESG Manager", question: "How do I turn sustainability into a number the board believes?" },
]

// Slide indices: 0=title, 1..6=keywords, 7=challenges, 8=old world, 9=here comes AI, 10=everywhere, 11=results, 12=video, 13=CTA
const KW_START = 1
const KW_END = KW_START + KEYWORDS.length - 1
const TOTAL_SLIDES = 1 + KEYWORDS.length + 7
const LIGHT_START = KW_END + 3

function isKeywordSlide(i: number) {
  return i >= KW_START && i <= KW_END
}

export function KeynoteSplash({ onClose }: { onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideKey, setSlideKey] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const isLight = currentSlide >= LIGHT_START
  const isKw = isKeywordSlide(currentSlide)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return
      if (index < 0 || index >= TOTAL_SLIDES) return
      setIsTransitioning(true)
      const dur = isKeywordSlide(currentSlide) && isKeywordSlide(index) ? 350 : 500
      setTimeout(() => {
        setCurrentSlide(index)
        setSlideKey((k) => k + 1)
        setIsTransitioning(false)
      }, dur)
    },
    [isTransitioning, currentSlide],
  )

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo])
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault()
        next()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault()
        prev()
      } else if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next, prev, onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (autoPlay && currentSlide < TOTAL_SLIDES - 1) {
      const ms = isKeywordSlide(currentSlide) ? 4000 : 30000
      autoPlayRef.current = setTimeout(next, ms)
    }
    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    }
  }, [autoPlay, currentSlide, next])

  const touchStart = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 60) {
      diff > 0 ? next() : prev()
    }
    touchStart.current = null
  }

  const nonKwSlides = [0, ...Array.from({ length: TOTAL_SLIDES - KW_END - 1 }, (_, i) => KW_END + 1 + i)]

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex flex-col select-none transition-colors duration-1000 ${
        isLight ? "bg-white" : "bg-black"
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {autoPlay && currentSlide < TOTAL_SLIDES - 1 && (
        <div className="absolute top-0 left-0 right-0 h-[2px] z-10">
          <div
            key={`progress-${currentSlide}`}
            className={`h-full ${isLight ? "bg-black/10" : "bg-white/20"}`}
            style={{ animation: `keynote-progress ${isKw ? 4000 : 30000}ms linear forwards` }}
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
          style={autoPlay ? {
            boxShadow: isLight
              ? "0 0 12px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.04)"
              : "0 0 12px rgba(255,255,255,0.15), 0 0 4px rgba(255,255,255,0.08)"
          } : undefined}
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
        {currentSlide === 0 && <SlideTitleCard />}
        {isKw && <SlideKeyword word={KEYWORDS[currentSlide - KW_START]} />}
        {currentSlide === KW_END + 1 && <SlideChallenges />}
        {currentSlide === KW_END + 2 && <SlideOldWorld />}
        {currentSlide === KW_END + 3 && <SlideHereComesAI />}
        {currentSlide === KW_END + 4 && <SlideEverywhere />}
        {currentSlide === KW_END + 5 && <SlideResults />}
        {currentSlide === KW_END + 6 && <SlideVideo ref={videoRef} />}
        {currentSlide === KW_END + 7 && <SlideCTA />}
      </div>

      {/* Navigation */}
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
          {/* Title dot */}
          <button
            onClick={() => goTo(0)}
            aria-label="Go to title"
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === 0
                ? `${isLight ? "bg-black" : "bg-white"} w-6`
                : `${isLight ? "bg-black/15 hover:bg-black/30" : "bg-white/25 hover:bg-white/40"} w-2`
            }`}
          />

          {/* Keyword pill group */}
          <div
            className={`flex items-center gap-1.5 rounded-full px-2 py-1.5 transition-colors duration-300 ${
              isKw
                ? isLight ? "bg-black/[0.06]" : "bg-white/[0.08]"
                : "bg-transparent"
            }`}
          >
            {KEYWORDS.map((_, ki) => {
              const slideIdx = KW_START + ki
              const isCurrent = currentSlide === slideIdx
              const isPast = currentSlide > slideIdx
              return (
                <button
                  key={ki}
                  onClick={() => goTo(slideIdx)}
                  aria-label={`Go to: ${KEYWORDS[ki]}`}
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

          {/* Remaining slide dots */}
          {nonKwSlides.slice(1).map((slideIdx) => (
            <button
              key={slideIdx}
              onClick={() => goTo(slideIdx)}
              aria-label={`Go to slide ${slideIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === slideIdx
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

/* ───────────────────────── DARK SLIDES ───────────────────────── */

function SlideTitleCard() {
  return (
    <div className="text-center px-8">
      <div className="mb-10 animate-keynote-fade-in">
        <Image
          src="/keynote/viatec-logo.png"
          alt="Viatec"
          width={180}
          height={50}
          className="mx-auto h-10 md:h-12 w-auto brightness-0 invert opacity-50"
          priority
        />
      </div>
      <h1
        className="text-5xl md:text-8xl font-medium tracking-[-0.04em] text-white animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0, textShadow: "0 0 80px rgba(255,255,255,0.15), 0 0 40px rgba(255,255,255,0.08)" }}
      >
        Workforce Intelligence
      </h1>
      <p
        className="mt-8 text-lg md:text-xl text-white/35 font-light tracking-wide animate-keynote-fade-in keynote-stagger-3"
        style={{ opacity: 0 }}
      >
        AI-powered fleet electrification analytics
      </p>
      <p
        className="mt-6 text-[11px] text-white/20 font-light tracking-wide animate-keynote-fade-in keynote-stagger-5"
        style={{ opacity: 0 }}
      >
        All customer names, fleet data, and figures shown are fictitious and for demonstration purposes only.
      </p>
    </div>
  )
}

function SlideKeyword({ word }: { word: string }) {
  return (
    <div className="text-center px-8">
      <div className="flex items-center justify-center">
        <h2
          className="text-5xl md:text-8xl font-semibold tracking-[-0.04em] text-white animate-keynote-keyword-reveal"
          style={{ textShadow: "0 0 80px rgba(255,255,255,0.12)" }}
        >
          {word}
        </h2>
      </div>
    </div>
  )
}

function SlideChallenges() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2
        className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] text-white/80 mb-20 text-center animate-keynote-fade-in"
        style={{ textShadow: "0 0 60px rgba(255,255,255,0.1)" }}
      >
        Every role. Same frustration.
      </h2>
      <div className="space-y-9">
        {CHALLENGES.map((item, i) => (
          <div
            key={i}
            className="animate-keynote-fade-in"
            style={{ opacity: 0, animationDelay: `${1.2 + i * 0.5}s` }}
          >
            <span className="text-xs tracking-[0.25em] uppercase text-white/30 mb-2 block">
              {item.role}
            </span>
            <p
              className="text-2xl md:text-[2.5rem] font-medium tracking-[-0.02em] text-white/85 leading-snug"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.06)" }}
            >
              &ldquo;{item.question}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideOldWorld() {
  return (
    <div className="text-center px-6 max-w-[1200px] mx-auto">
      <p className="text-sm tracking-[0.3em] uppercase text-white/30 mb-4 animate-keynote-fade-in">
        Before
      </p>
      <h2
        className="text-3xl md:text-5xl font-medium tracking-[-0.03em] text-white mb-8 animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0, textShadow: "0 0 60px rgba(255,255,255,0.1)" }}
      >
        The old data world.
      </h2>
      <ImageFrame className="animate-keynote-image-reveal keynote-stagger-2">
        <Image
          src="/keynote/old-analytics.png"
          alt="Legacy analytics dashboard"
          width={1400}
          height={700}
          className="w-full h-auto block"
          priority
        />
      </ImageFrame>
    </div>
  )
}

/* ───────────────────────── LIGHT SLIDES ───────────────────────── */

function SlideHereComesAI() {
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="text-center px-6 max-w-[1200px] mx-auto">
      <h2
        className="text-5xl md:text-8xl font-semibold tracking-[-0.04em] text-black animate-keynote-scale-in"
      >
        Here comes AI.
      </h2>
      {showImage && (
        <div className="mt-10 animate-keynote-image-reveal">
          <Image
            src="/keynote/wf-intelligence-ai.png"
            alt="WorkForce Intelligence AI"
            width={1600}
            height={800}
            className="w-full h-auto block"
            priority
          />
        </div>
      )}
    </div>
  )
}

function SlideEverywhere() {
  return (
    <div className="text-center px-4 max-w-[1400px] mx-auto">
      <p className="text-sm tracking-[0.3em] uppercase text-black/30 mb-4 animate-keynote-fade-in">
        Delivered Everywhere
      </p>
      <h2
        className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-black mb-4 animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0 }}
      >
        WhatsApp. Teams. Your App.
      </h2>
      <p className="text-lg text-black/40 font-normal mb-8 animate-keynote-fade-in keynote-stagger-2" style={{ opacity: 0 }}>
        Same AI, same data, same governance.
      </p>
      <div className="animate-keynote-image-reveal keynote-stagger-3">
        <Image
          src="/keynote/ai-whatsapp.png"
          alt="Fleet Intelligence on WhatsApp"
          width={1600}
          height={800}
          className="w-full h-auto block"
          priority
        />
      </div>
    </div>
  )
}

function SlideResults() {
  return (
    <div className="text-center px-6 max-w-[1200px] mx-auto">
      <p className="text-sm tracking-[0.3em] uppercase text-black/30 mb-4 animate-keynote-fade-in">
        Intelligence in Action
      </p>
      <h2
        className="text-3xl md:text-5xl font-medium tracking-[-0.03em] text-black mb-8 animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0 }}
      >
        Fleet Performance Comparison
      </h2>
      <div className="animate-keynote-image-reveal keynote-stagger-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_60px_140px_-30px_rgba(0,0,0,0.2)]">
        <video
          src="/keynote/fleet-sw-vs-canada.mp4"
          controls
          autoPlay
          muted
          playsInline
          className="w-full h-auto block"
        />
      </div>
    </div>
  )
}

const SlideVideo = forwardRef<HTMLVideoElement>(function SlideVideo(_, ref) {
  return (
    <div className="text-center px-6 max-w-[1200px] mx-auto">
      <p className="text-sm tracking-[0.3em] uppercase text-black/30 mb-4 animate-keynote-fade-in">
        Recorded from the Actual Platform
      </p>
      <h2
        className="text-3xl md:text-5xl font-medium tracking-[-0.03em] text-black mb-8 animate-keynote-fade-in keynote-stagger-1"
        style={{ opacity: 0 }}
      >
        Total Cost of Ownership
      </h2>
      <div className="animate-keynote-image-reveal keynote-stagger-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_60px_140px_-30px_rgba(0,0,0,0.2)]">
        <video
          ref={ref}
          src="/keynote/tco-demo.mp4"
          controls
          autoPlay
          muted
          playsInline
          className="w-full h-auto block"
        />
      </div>
    </div>
  )
})

function SlideCTA() {
  return (
    <div className="text-center px-8">
      <h2
        className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] text-black animate-keynote-scale-in"
      >
        Experience it yourself.
      </h2>
      <a
        href="https://demo.graffs.io/login"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex mt-12 h-14 px-10 items-center justify-center rounded-full bg-black text-white text-base font-medium hover:bg-black/85 transition-all animate-keynote-fade-in keynote-stagger-3 cursor-pointer"
        style={{ opacity: 0 }}
      >
        Try the platform
      </a>
    </div>
  )
}
