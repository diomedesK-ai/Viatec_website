"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { HealthcareKeynoteSplash } from "./healthcare-keynote-splash"
import { KeynoteSplash } from "./keynote-splash"

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
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [keynoteOpen, setKeynoteOpen] = useState(false)
  const isHealthcare = pathname.startsWith("/healthcare")

  const navItems = [
    { href: "/", label: "Graffs for Industry 4.0", active: pathname === "/" },
    { href: "/healthcare", label: "Graffs for Healthcare", active: isHealthcare },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/[0.04]">
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <GraffsLogo size={26} className="text-foreground" />
            <span className="text-[15px]">
              <span className="font-semibold tracking-[0.08em] uppercase text-[13px]">Graffs</span>
              <span className="text-muted-foreground font-light">.io</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center rounded-full border border-foreground/[0.06] bg-foreground/[0.02] p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex h-9 px-4 items-center rounded-full text-sm transition-colors ${
                item.active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://demo.graffs.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 px-6 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Try the demo
          </a>
          <a
            href="https://dataq.graffs.io/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
            title="Data Questionnaire"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M9 12h6" />
              <path d="M9 16h6" />
            </svg>
          </a>
          <button
            onClick={() => setKeynoteOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
            title={isHealthcare ? "Healthcare Keynote" : "CEO Keynote"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </button>
        </div>

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
        <div className="md:hidden border-t border-border/40 bg-background px-6 py-5 space-y-3">
          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex w-full h-11 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-foreground text-background"
                    : "border border-foreground/15 text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="https://demo.graffs.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full h-11 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium cursor-pointer"
          >
            Try the demo
          </a>
          <a
            href="https://dataq.graffs.io/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full h-11 items-center justify-center gap-2 rounded-full border border-foreground/15 text-foreground text-sm font-medium hover:bg-foreground/5 transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M9 12h6" />
              <path d="M9 16h6" />
            </svg>
            Data Questionnaire
          </a>
          <button
            onClick={() => { setKeynoteOpen(true); setMenuOpen(false) }}
            className="flex w-full h-11 items-center justify-center gap-2 rounded-full border border-foreground/15 text-foreground text-sm font-medium hover:bg-foreground/5 transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6,3 20,12 6,21" />
            </svg>
            {isHealthcare ? "Healthcare Keynote" : "CEO Keynote"}
          </button>
        </div>
      )}

      {keynoteOpen && (
        isHealthcare ? (
          <HealthcareKeynoteSplash onClose={() => setKeynoteOpen(false)} />
        ) : (
          <KeynoteSplash onClose={() => setKeynoteOpen(false)} />
        )
      )}
    </header>
  )
}
