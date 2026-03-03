"use client"

import { useState } from "react"

function GraffsLogo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 1.5 L22.5 12 L12 22.5 L1.5 12 Z"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinejoin="round"
      />
      <path
        d="M14.9 8.5 A 4.5 4.5 0 1 0 16.5 12 H 12"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/[0.04]">
      <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraffsLogo size={26} className="text-foreground" />
          <span className="text-[15px]">
            <span className="font-semibold tracking-[0.08em] uppercase text-[13px]">Graffs</span>
            <span className="text-muted-foreground font-light">.io</span>
          </span>
        </div>

        <a
          href="https://viatecintelligencedashboard.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
        >
          Try the demo
        </a>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="14" y2="14" />
                <line x1="14" y1="4" x2="4" y2="14" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="15" y2="5" />
                <line x1="3" y1="9" x2="15" y2="9" />
                <line x1="3" y1="13" x2="15" y2="13" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background px-6 py-5">
          <a
            href="https://viatecintelligencedashboard.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full h-11 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium cursor-pointer"
          >
            Try the demo
          </a>
        </div>
      )}
    </header>
  )
}
