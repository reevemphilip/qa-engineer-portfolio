import { Github } from "lucide-react";

import type { Project } from "@/content/site";

import { StatusBadge } from "./StatusBadge";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article id={project.slug} className="panel panel-interactive scroll-mt-24 p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          project_{String(index + 1).padStart(2, "0")}
        </span>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">{project.title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{project.overview}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-primary/25 bg-primary/5 px-2 py-1 font-mono text-[11px] text-primary"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="eyebrow mb-3">Engineering challenges</h4>
          <ul className="space-y-2 text-sm text-foreground/85">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-warning">!</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-3">Architecture decisions</h4>
          <ul className="space-y-2 text-sm text-foreground/85">
            {project.decisions.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-primary">→</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-border/60 pt-5">
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
          >
            <Github className="h-4 w-4" /> View repository
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <Github className="h-4 w-4" /> Repository coming soon
          </span>
        )}
      </div>
    </article>
  );
}
