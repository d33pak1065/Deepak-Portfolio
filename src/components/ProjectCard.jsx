import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors duration-200 hover:border-borderStrong lg:grid-cols-[64px_minmax(0,1fr)_240px] lg:items-start lg:gap-8"
    >
      {/* number */}
      <span
        className={`font-mono text-sm ${
          project.emphasis ? "text-accent" : "text-faint"
        }`}
      >
        {project.rank}
      </span>

      {/* identity + description */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3
            className={`font-display font-semibold text-ink ${
              project.emphasis ? "text-2xl" : "text-xl"
            }`}
          >
            {project.name}
          </h3>

          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            {project.tagline}
          </span>
        </div>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          {project.role}
        </p>
      </div>

      {/* tech + platform + optional project link */}
      <div className="min-w-0 flex flex-col gap-3 lg:items-end lg:text-right">
        <p className="w-full max-w-[240px] whitespace-normal break-words font-mono text-[11px] uppercase tracking-wide text-muted">
          {project.tech.join(" · ")}
        </p>

        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          {project.platforms.join(" / ")}
        </span>

        {project.storeUrl && (
          <a
            href={project.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.storeLabel || "View project"} (opens in a new tab)`}
            className="focus-ring inline-flex items-center gap-1.5 self-start rounded-full border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink transition-colors duration-200 hover:border-borderStrong hover:bg-surface2 hover:text-accent lg:self-end"
          >
            {project.storeLabel || "View project"}

            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.article>
  );
}