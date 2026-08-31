import { motion } from "framer-motion";
import { sendra } from "../data/projects";
import StatusBadge from "../components/StatusBadge";
import PhoneMockup from "../components/PhoneMockup";
import VideoWithFallback from "../components/VideoWithFallback";
import ImageWithFallback from "../components/ImageWithFallback";
import SendraGallery from "../components/SendraGallery";

export default function FeaturedProject() {
  return (
    <section id="work" className="border-t border-border py-24 sm:py-28">
      <div className="container-x">
        <div className="mb-14 flex items-end justify-between gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Featured project
          </p>
          <span className="hidden font-mono text-[11px] text-faint sm:block">
            01 / 04
          </span>
        </div>

        {/*
          Two-column case-study layout only kicks in at `xl` (1280px), same
          threshold as the hero, so tablet widths (768–1279) get a single,
          comfortably wide column instead of a cramped split.
        */}
        <div className="grid grid-cols-1 gap-14 rounded-xl2 border border-border bg-surface p-6 sm:p-10 xl:grid-cols-[0.85fr_1fr] xl:gap-10 xl:p-14">
          {/* LEFT — real demo video, the primary visual of the case study */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center justify-center"
          >
            <div
              aria-hidden
              className="absolute h-[300px] w-[300px] rounded-full bg-accent/[0.08] blur-[90px]"
            />
            <PhoneMockup floaty={false}>
              <VideoWithFallback
                src={sendra.video}
                poster={sendra.gallery[0]?.src}
                alt="Sendra application demo — ride booking and parcel delivery flows"
              />
            </PhoneMockup>
          </motion.div>

          {/* RIGHT — project info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <ImageWithFallback
                src={sendra.icon}
                alt="Sendra app icon"
                aspect="aspect-square"
                rounded="rounded-xl"
                className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
              />
              <h3 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                {sendra.name}
              </h3>
              <StatusBadge dot tone="accent">
                {sendra.status}
              </StatusBadge>
            </div>

            <p className="mb-1 text-sm font-medium text-accent">
              {sendra.tagline}
            </p>
            <p className="mb-6 font-mono text-xs text-faint">
              {sendra.screens}
            </p>

            <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-muted">
              {sendra.description}
            </p>

            <div className="mb-8 max-w-lg rounded-lg border border-border bg-bg/40 px-4 py-3.5">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                My role
              </p>
              <p className="text-sm leading-relaxed text-ink">{sendra.role}</p>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {sendra.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface2 px-3 py-1.5 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* code → production pipeline */}
            <div className="mb-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Code to production
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {sendra.pipeline.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-center gap-1.5"
                  >
                    <span className="flex items-center gap-1.5 rounded-full border border-accent/25 bg-accentSoft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {step.label}
                    </span>
                    {i < sendra.pipeline.length - 1 && (
                      <span className="text-faint" aria-hidden>
                        →
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-8 flex flex-wrap items-center gap-4 sm:gap-6">
              {sendra.platforms.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-2 text-sm text-ink"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0 text-accent"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {p}
                </span>
              ))}
            </div>

            <details className="group mb-8 rounded-lg border border-border bg-bg/40 px-4 py-3 open:pb-4">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between text-sm font-medium text-ink">
                <span>What I worked on</span>

                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-faint transition-colors duration-200 group-hover:text-ink group-open:hidden">
                  View details ↓
                </span>

                <span className="hidden text-faint transition-colors duration-200 group-hover:text-ink group-open:inline">
                  ×
                </span>
              </summary>

              <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {sendra.responsibilities.map((r) => (
                  <li key={r} className="text-xs leading-relaxed text-muted">
                    · {r}
                  </li>
                ))}
              </ul>
            </details>

            <p className="mb-8 max-w-lg text-xs leading-relaxed text-faint">
              {sendra.context}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={sendra.stores.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sendra on Google Play (opens in a new tab)"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-borderStrong hover:bg-surface2"
              >
                Google Play
                <svg
                  width="12"
                  height="12"
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
              <a
                href={sendra.stores.appStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sendra on the Apple App Store (opens in a new tab)"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-borderStrong hover:bg-surface2"
              >
                App Store
                <svg
                  width="12"
                  height="12"
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
            </div>
          </motion.div>
        </div>

        {/* curated real screenshot gallery */}
        <div className="mt-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            Product screens
          </p>
          <SendraGallery items={sendra.gallery} />
        </div>
      </div>
    </section>
  );
}
