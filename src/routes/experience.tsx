import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro } from "@/components/site/PageIntro";
import { experience } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: pageMeta(
      "Experience — Reeve Philip, Staff QA Engineer",
      "Staff QA Engineer, QA Lead, and Senior QA Engineer at Integral Ad Science, and earlier QA engineering and QA lead roles at Operative Media — automation, API, and performance testing throughout.",
    ),
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageIntro index="03" eyebrow="experience" title="Where I've done the work.">
        <p>
          Seven roles across two companies, one through-line: building automation that teams rely
          on, and helping those teams ship with less risk.
        </p>
      </PageIntro>

      <ol className="relative space-y-10 border-l border-border pl-8">
        {experience.map((role, i) => (
          <li
            key={`${role.company}-${role.title}`}
            className="relative animate-rise"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <p className="eyebrow">{role.title}</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">{role.company}</h2>
            <p className="mt-1 font-mono text-xs tracking-wider text-muted-foreground">
              {role.dates}
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{role.summary}</p>
            <ul className="panel mt-5 space-y-3 p-6">
              {role.focus.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                  <span className="font-mono text-primary">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <CtaBand />
    </>
  );
}
