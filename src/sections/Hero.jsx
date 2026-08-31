import { motion } from "framer-motion";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";
import PersonalProfilePhone from "../components/PersonalProfilePhone";

const proof = [
  "50+ Screens",
  "Flutter",
  "Android + iOS",
  "Production Deployment",
];

// Small helper so the proof strip can render twice (once for the mobile/
// tablet flow, once for the desktop column) without duplicating markup.
function ProofStrip({ className = "" }) {
  return (
    <div
      className={`flex flex-wrap gap-2 border-t border-border pt-6 ${className}`}
    >
      {proof.map((label) => (
        <span
          key={label}
          className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* ambient grid, kept subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#F1F0EC 1px, transparent 1px), linear-gradient(90deg, #F1F0EC 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)",
        }}
      />

      {/*
        Two-column desktop layout only kicks in at `xl` (1280px). Below that
        (including 1024px tablet widths) the hero stays single-column so the
        1024px range doesn't feel cramped.
      */}
      <div className="container-x relative grid grid-cols-1 items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
        {/* text column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <StatusBadge>
              Open to Software Engineering opportunities
            </StatusBadge>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.04 }}
            className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-faint"
          >
            Sri Deepak Bolisetti <span className="text-borderStrong">·</span>{" "}
            Associate Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.06] tracking-tight text-ink"
          >
            I build applications that make it to production.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
          >
            Flutter-first developer with hands-on experience building mobile and
            web applications, integrating APIs and Firebase, and taking products
            through production deployment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-faint"
          >
            Flutter <span className="text-borderStrong">•</span> Firebase{" "}
            <span className="text-borderStrong">•</span> React{" "}
            <span className="text-borderStrong">•</span> Node.js{" "}
            <span className="text-borderStrong">•</span> REST APIs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#work" variant="primary">
              View my work
            </Button>
            <Button
              href="/resume.pdf"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </Button>
          </motion.div>

          {/* proof strip — desktop position, inside the text column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-11 hidden xl:block"
          >
            <ProofStrip />
          </motion.div>
        </div>

        {/* phone column — on mobile/tablet this appears after the buttons
            above (source order), on desktop it sits in the right column */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[100px]"
          />
          <PersonalProfilePhone />
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
            Personal Profile
          </p>

          {/* proof strip — mobile/tablet position, right after the phone */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-9 xl:hidden"
          >
            <ProofStrip />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
