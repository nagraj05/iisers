type ThemeShowcaseProps = {
  compact?: boolean;
};

const swatches = [
  { label: "Primary", className: "bg-primary", value: "--primary" },
  { label: "Accent", className: "bg-accent", value: "--accent" },
  { label: "Success", className: "bg-success", value: "--success" },
  { label: "Warning", className: "bg-warning", value: "--warning" },
  { label: "Danger", className: "bg-danger", value: "--danger" },
];

function GlobeMark() {
  return (
    <div className="relative grid size-11 place-items-center rounded-xl border border-border-strong bg-surface-raised shadow-card">
      <div className="absolute size-6 rounded-full border border-map-atmosphere/70" />
      <div className="absolute h-px w-7 rotate-[-24deg] bg-map-atmosphere/80" />
      <div className="size-2 rounded-full bg-map-marker shadow-[0_0_18px_var(--map-atmosphere)]" />
    </div>
  );
}

function Swatch({ label, className, value }: (typeof swatches)[number]) {
  return (
    <div className="min-w-0 rounded-lg border border-border bg-surface p-2.5">
      <div className={`h-12 rounded-md ${className}`} />
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <span className="truncate text-sm font-medium text-foreground">{label}</span>
        <span className="font-mono text-[0.6875rem] text-muted-foreground">{value}</span>
      </div>
    </div>
  );
}

export function ThemeShowcase({ compact = false }: ThemeShowcaseProps) {
  return (
    <main data-testid="theme-showcase" className="min-h-full overflow-hidden bg-background text-foreground">
      <div className={`mx-auto w-full ${compact ? "max-w-3xl p-5" : "max-w-6xl p-6 sm:p-10"}`}>
        <header className="flex items-center justify-between gap-5 border-b border-border pb-6">
          <div className="flex items-center gap-3.5">
            <GlobeMark />
            <div>
              <p className="text-sm font-semibold tracking-wide text-foreground">Friends Globe</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Orbital atlas theme system</p>
            </div>
          </div>
          <span className="rounded-full border border-border-strong bg-surface/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-card backdrop-blur-xl">
            Theme foundations
          </span>
        </header>

        <section className={`grid gap-6 pt-8 ${compact ? "" : "lg:grid-cols-[1.1fr_0.9fr]"}`}>
          <div className="rounded-xl border border-border bg-surface/88 p-6 shadow-float backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-2 text-sm font-medium text-accent-foreground">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
              12 friends across 8 places
            </div>
            <h1 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl">
              Every friendship has a place in the world.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
              A calm, cinematic interface designed to let the globe lead while profiles and stories
              stay crisp, warm, and easy to read.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-colors hover:bg-primary-hover">
                Explore the globe
              </button>
              <button className="rounded-lg border border-border-strong bg-surface-raised px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-subtle">
                Browse friends
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {swatches.map((swatch) => (
                <Swatch key={swatch.label} {...swatch} />
              ))}
            </div>
          </div>

          {!compact && (
            <div className="grid gap-6">
              <div className="rounded-xl border border-border bg-surface p-5 shadow-card">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid size-12 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground ring-4 ring-accent-soft">
                      AM
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Amara</p>
                      <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    City
                  </span>
                </div>
                <p className="mt-5 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                  We met during a rainy design workshop and have traded playlists ever since.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface-raised p-5 shadow-card">
                <label htmlFor="friend-search" className="text-sm font-medium text-foreground">
                  Find someone
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-lg border border-border-strong bg-background px-3.5 py-3 focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-muted-foreground" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 4 4" />
                  </svg>
                  <input
                    id="friend-search"
                    className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                    placeholder="Name, city, or country"
                  />
                  <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted-foreground">
                    ⌘K
                  </kbd>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Surface", "bg-surface"],
                  ["Raised", "bg-surface-raised"],
                  ["Subtle", "bg-surface-subtle"],
                ].map(([label, className]) => (
                  <div key={label} className={`${className} rounded-lg border border-border p-4 text-center shadow-card`}>
                    <span className="text-xs font-medium text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
          <span>Geist Sans · 16px base · WCAG-aware semantic color roles</span>
          <span className="font-mono">radius-lg / shadow-card / border</span>
        </footer>
      </div>
    </main>
  );
}
