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
              After completing my B.Tech in Mechanical Engineering, I began my
              software development career at ITqHUB, working on practical
              applications and learning how software is built and delivered.
            </p>

            <p>
              I started with full-stack web development and later expanded into
              Flutter mobile development. My experience includes building
              application features, integrating REST APIs and Firebase services,
              deploying applications, and maintaining production software in
              collaboration with clients and development teams.
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
                    i === journey.length - 1 ? "bg-accent" : "bg-borderStrong"
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
                    ? "Started my software development career as a Full Stack Developer Intern, contributing to web applications using React, Node.js, Express.js, and databases while learning the development lifecycle from requirements to deployment."
                    : "Expanded into Flutter and mobile application development while continuing full-stack web development. Built and maintained production applications, integrated REST APIs and Firebase services, managed Android and iOS releases, and worked with clients and development teams on requirements and delivery."}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
