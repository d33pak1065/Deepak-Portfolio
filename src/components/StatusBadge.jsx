// Small OS-style status pill — the recurring "system status" motif used across
// the site (hero availability, project status, platform tags).
export default function StatusBadge({ children, dot = true, tone = "accent", className = "" }) {
  const tones = {
    accent: "text-accent border-accent/25 bg-accent/10",
    muted: "text-muted border-border bg-surface",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          {tone === "accent" && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          )}
          <span
            className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
              tone === "accent" ? "bg-accent" : "bg-muted"
            }`}
          />
        </span>
      )}
      {children}
    </span>
  );
}
