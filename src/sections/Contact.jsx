import { motion } from "framer-motion";
import Button from "../components/Button";

const links = [
  {
    label: "Email",
    value: "srideepakbolisetti945@gmail.com",
    href: "mailto:srideepakbolisetti945@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "View LinkedIn Profile",
    href: "https://www.linkedin.com/in/sri-deepak-bolisetti-096006344/",
  },
  {
    label: "GitHub",
    value: "d33pak1065",
    href: "https://github.com/d33pak1065",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Contact
          </p>

          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight text-ink">
            Let's build something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            I'm open to Software Engineer and Full Stack Developer
            opportunities, with a focus on building mobile and full-stack
            applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="mailto:srideepakbolisetti945@gmail.com"
              variant="primary"
            >
              Email me
            </Button>

            <Button
              href="/resume.pdf"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume ↗
            </Button>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={
                link.href.startsWith("http")
                  ? `${link.label} (opens in a new tab)`
                  : link.label
              }
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="focus-ring rounded-xl2 border border-border bg-surface px-4 py-4 text-center transition-colors duration-200 hover:border-borderStrong hover:bg-surface2"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                {link.label}
              </p>

              <p className="mt-1 truncate text-sm text-ink">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>

        <p className="mt-20 text-center font-mono text-[11px] text-faint">
          Deepak.dev — designed &amp; built by Sri Deepak Bolisetti
        </p>
      </div>
    </section>
  );
}