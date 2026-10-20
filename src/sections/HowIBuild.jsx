import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildSteps } from "../data/skills";
import SectionHeading from "../components/SectionHeading";

export default function HowIBuild() {
  const [active, setActive] = useState(null);

  return (
    <section id="build" className="border-t border-border py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Process"
          title="How I build"
          description="My workflow covers the full mobile development lifecycle—from understanding requirements and building Flutter features to integrating APIs and Firebase, preparing Android and iOS releases, and improving applications after launch."
        />

        <p className="mt-3 max-w-3xl font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
          Hover or tap a step to see the tools and practices behind my workflow.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {buildSteps.map((step, i) => {
            const isActive = active === step.index;

            return (
              <motion.button
                key={step.index}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onMouseEnter={() => setActive(step.index)}
                onMouseLeave={() =>
                  setActive((cur) =>
                    cur === step.index ? null : cur
                  )
                }
                onFocus={() => setActive(step.index)}
                onBlur={() =>
                  setActive((cur) =>
                    cur === step.index ? null : cur
                  )
                }
                onClick={() =>
                  setActive((cur) =>
                    cur === step.index ? null : step.index
                  )
                }
                aria-expanded={isActive}
                className="focus-ring group relative flex flex-col items-start bg-surface p-7 text-left transition-colors duration-200 hover:bg-surface2"
              >
                <span className="font-mono text-xs text-faint">
                  {step.index}
                </span>

                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 flex flex-wrap gap-1.5 overflow-hidden"
                    >
                      {step.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-accent/25 bg-accentSoft px-2.5 py-1 font-mono text-[10px] text-ink"
                        >
                          {chip}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <span
                  className={`absolute left-0 top-0 h-full w-px bg-accent transition-transform duration-300 ${
                    isActive ? "scale-y-100" : "scale-y-0"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}