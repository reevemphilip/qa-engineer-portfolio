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
      "Engineering Portfolio — Reeve Philip",
      "Personal engineering projects: a Playwright + TypeScript framework in progress, plus planned API testing, CI/CD integration, LLM testing, and performance testing with JMeter and k6.",
    ),
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageIntro index="04" eyebrow="projects" title="Engineering Portfolio">
        <p>
          A growing collection of personal engineering projects focused on test automation,
          quality engineering, and AI. These projects are designed to demonstrate practical
          solutions to real software testing challenges.
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
