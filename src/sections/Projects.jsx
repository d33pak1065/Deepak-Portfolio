import { otherProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  return (
    <section className="border-t border-border py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Other Projects"
          title="More Production Work"
          description="Production applications built across mobile and web, spanning Flutter, React, Node.js, APIs, databases, and payment integrations as part of my work at ITqHUB."
        />

        <div className="mt-12 border-b border-border">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
