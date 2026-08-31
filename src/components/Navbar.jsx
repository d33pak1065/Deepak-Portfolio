import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Build", href: "#build" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = LINKS.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Subtle scroll-based active-link indicator — a section is considered
  // "active" once it crosses the middle band of the viewport.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x grid h-16 grid-cols-[1fr_auto_1fr] items-center md:h-20">
        <a
          href="#top"
          className="focus-ring group flex min-w-0 items-center gap-2 justify-self-start rounded"
        >
          <img
            src="/assets/profile/deepak-avatar.jpg"
            alt="Sri Deepak Bolisetti"
            className="h-7 w-7 shrink-0 rounded-full border border-border object-cover md:h-9 md:w-9"
          />
          <span className="truncate font-display text-xs font-semibold tracking-tight text-ink sm:text-sm">
            Sri Deepak Bolisetti
          </span>
        </a>

        {/* nav links — centered on desktop via the symmetric 1fr side tracks */}
        <ul className="col-start-2 hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`focus-ring group relative inline-block rounded py-1 text-sm transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring relative col-start-3 flex h-9 w-9 shrink-0 items-center justify-self-end rounded-full border border-border md:hidden"
        >
          <span className="relative mx-auto block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="focus-ring block rounded py-2.5 text-base text-ink"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
