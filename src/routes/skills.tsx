import { createFileRoute } from "@tanstack/react-router";
import { Bot, Code2, Database, GitBranch, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro } from "@/components/site/PageIntro";
import { skillGroups } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: pageMeta(
      "Technical Skills — Reeve Philip",
      "Playwright, Cypress, TypeScript, Python, API and backend testing, CI/CD, test strategy, performance testing and AI-assisted test generation.",
    ),
  }),
  component: Skills,
});

const icons: Record<string, typeof Code2> = {
  automation: Code2,
  api: Database,
  cicd: GitBranch,
  qe: ShieldCheck,
  ai: Bot,
};

function Skills() {
  return (
    <>
      <PageIntro index="02" eyebrow="skills" title="The toolkit.">
        <p>
          Tools change. The underlying skill — knowing what to test, how deep to go, and how to
          get trustworthy answers quickly — doesn't. Here's what I work with today.
        </p>
      </PageIntro>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.id] ?? Code2;
          return (
            <section
              key={g.id}
              className={`panel panel-interactive p-6 animate-rise ${
                i === skillGroups.length - 1 ? "sm:col-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <h2 className="text-base font-semibold text-foreground">{g.title}</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{g.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-muted/60 px-2.5 py-1 font-mono text-xs text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <CtaBand />
    </>
  );
}
