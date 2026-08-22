import { ArrowUpRight } from "@gravity-ui/icons";
import { projects, type Project } from "@/lib/data/projects";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { ProjectVisual } from "@/components/home/project-visual";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  "open-source": "text-emerald-600 dark:text-emerald-400",
  "in-development": "text-amber-600 dark:text-amber-400",
  prototype: "text-indigo-500 dark:text-indigo-300",
  shipped: "text-sky-600 dark:text-sky-400",
};

function ProjectCard({ project }: { project: Project }) {
  const external = project.href.startsWith("http");

  return (
    <a
      href={project.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ring/30 hover:shadow-lift"
    >
      <ProjectVisual pattern={project.pattern} gradient={project.gradient} />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
          <span
            className={cn(
              "rounded-full border border-border bg-muted/70 px-2.5 py-1 text-[11px] font-medium",
              statusStyles[project.status],
            )}
          >
            {project.statusLabel}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-muted/60 px-2 py-1 font-mono text-[11px] text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            View details
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
      </div>
    </a>
  );
}

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title={
        <>
          Selected projects, <span className="text-gradient">built in public</span>.
        </>
      }
      description="A curated look at the products, libraries, and experiments behind the ecosystem — each one solving a real problem."
    >
      <Stagger className="grid gap-5 sm:gap-6 lg:grid-cols-2" stagger={0.1}>
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
