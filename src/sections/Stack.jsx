import { motion } from "framer-motion";
import { stackCategories } from "../data/skills";
import SectionHeading from "../components/SectionHeading";

const tierStyles = {
  primary: {
    card: "border-accent/30 bg-accentSoft p-8",
    label: "text-accent",
    chip: "border-accent/25 bg-bg/40 text-ink text-sm px-3.5 py-1.5",
  },
  secondary: {
    card: "border-border bg-surface p-6 hover:border-borderStrong",
    label: "text-muted",
    chip: "border-border bg-surface2 text-ink text-sm px-3 py-1.5",
  },
  supporting: {
    card: "border-border bg-surface/60 p-6 hover:border-borderStrong",
    label: "text-faint",
    chip: "border-border bg-surface2 text-muted text-xs px-2.5 py-1",
  },
};

export default function Stack() {
  const primary = stackCategories.find((c) => c.tier === "primary");
  const rest = stackCategories.filter((c) => c.tier !== "primary");

  return (
    <section id="stack" className="border-t border-border py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Stack"
          title="Tools I build with"
          description="A practical stack across mobile and full-stack web development, from application architecture and APIs to databases, integrations, and production delivery."
        />

        <div className="mt-12 space-y-5">
          {primary && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`rounded-xl2 border transition-colors duration-200 ${tierStyles.primary.card}`}
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <p className={`font-mono text-xs uppercase tracking-[0.14em] ${tierStyles.primary.label}`}>
                  {primary.label} — primary
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {primary.items.map((item) => (
                  <span key={item} className={`rounded-full border ${tierStyles.primary.chip}`}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((cat, i) => {
              const style = tierStyles[cat.tier] ?? tierStyles.supporting;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`rounded-xl2 border transition-colors duration-200 ${style.card} ${
                    cat.tier === "secondary" ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <p className={`mb-4 font-mono text-[11px] uppercase tracking-[0.14em] ${style.label}`}>
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className={`rounded-full border ${style.chip}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
