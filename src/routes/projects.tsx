import { createFileRoute } from "@tanstack/react-router";
import { Github } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro } from "@/components/site/PageIntro";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Button } from "@/components/ui/button";
import { profile, projects } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: pageMeta(
      "Projects — Reeve Philip, Test Automation Architect",
      "Quality engineering projects: Playwright + TypeScript framework, API testing, CI/CD integration, AI-assisted test generation and performance testing.",
    ),
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageIntro index="04" eyebrow="projects" title="Engineering work, in the open.">
        <p>
          Practical quality engineering projects, each with the challenges and architecture
          decisions behind it. Projects are marked planned or in progress until the repository is
          public.
        </p>
      </PageIntro>

      <div className="mb-8">
        <Button asChild variant="subtle">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github /> GitHub profile
          </a>
        </Button>
      </div>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <CtaBand />
    </>
  );
}
