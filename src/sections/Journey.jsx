import { motion } from "framer-motion";
import { journey } from "../data/journey";
import SectionHeading from "../components/SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="border-t border-border py-24 sm:py-28">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Journey" title="How I got here" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-8 max-w-md space-y-4 text-sm leading-relaxed text-muted"
          >
            <p>
              I started my software career after completing my B.Tech in
              Mechanical Engineering, moving into software development with a
              focus on building practical web and mobile applications.
            </p>

            <p>
              I began with full-stack web development and gradually moved
              deeper into Flutter and mobile application development. Along
              the way, I took on API integration, Firebase services,
              databases, testing, deployment, client coordination, and
              post-release development — giving me experience across the path
              from requirements to production.
            </p>
          </motion.div>
        </div>

        <div>
          <ol className="relative space-y-8 border-l border-border pl-8">
            {journey.map((item, i) => (
              <motion.li
                key={item.date}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[2.3rem] top-1 h-2.5 w-2.5 rounded-full ${
                    i === journey.length - 1
                      ? "bg-accent"
                      : "bg-borderStrong"
                  }`}
                />

                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {item.date}
                </p>

                <p className="mt-1 font-display text-lg font-semibold text-ink">
                  {item.role}
                </p>

                <p className="text-sm text-muted">{item.org}</p>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                  {i === 0
                    ? "Started my software development career working across React, Node.js, Express.js and databases, contributing to internal web applications and learning the full development lifecycle from requirements to deployment."
                    : "Expanded into mobile development with Flutter while continuing full-stack web work. Built and maintained production applications, integrated APIs and Firebase services, handled testing and deployment, and collaborated with clients and development teams on requirements and delivery."}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}