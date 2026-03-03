export function Footer() {
  return (
    <footer className="pb-20">
      <div className="max-w-5xl mx-auto px-6 text-center mb-24">
        <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.04em] mb-10 text-balance leading-[1.05]">
          See it in action.
        </h2>
        <a
          href="https://demo.graffs.io/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-13 px-10 items-center justify-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity cursor-pointer"
        >
          Try the demo
        </a>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="pt-10 border-t border-foreground/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
              <path d="M12 1.5 L22.5 12 L12 22.5 L1.5 12 Z" stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round" />
              <path d="M14.9 8.5 A 4.5 4.5 0 1 0 16.5 12 H 12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-muted-foreground tracking-[0.06em] uppercase text-[11px]">Graffs<span className="lowercase tracking-normal">.io</span></span>
          </div>
          <p className="text-xs text-muted-foreground tracking-[0.05em]">
            Agentic Industry Intelligence
          </p>
        </div>
      </div>
    </footer>
  )
}
