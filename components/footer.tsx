export function Footer() {
  return (
    <footer className="pb-20">
      <div className="max-w-5xl mx-auto px-6 text-center mb-24">
        <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] mb-10 text-balance leading-[1.05]">
          See it in action.
        </h2>
        <a
          href="https://viatecintelligencedashboard.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-13 px-10 items-center justify-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity cursor-pointer"
        >
          Try the demo
        </a>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="pt-10 border-t border-foreground/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
            <span className="text-sm text-muted-foreground tracking-[0.06em] uppercase text-[11px]">Graffs<span className="lowercase tracking-normal">.io</span></span>
          </div>
          <p className="text-xs text-muted-foreground tracking-[0.05em]">
            Agentic Industry Intelligence
          </p>
        </div>
      </div>
    </footer>
  )
}
