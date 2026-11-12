import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro, SectionTitle } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "About — Reeve Philip, Staff QA Engineer",
      "Staff QA Engineer at Integral Ad Science. Hands-on automation architect focused on risk-based testing, release readiness and mentoring.",
    ),
  }),
  component: About,
});

const principles = [
  {
    title: "Automation has to earn its place",
    body: "A suite nobody trusts is just noise. I build automation that's fast, stable and tells you something useful when it fails — then I keep it that way.",
  },
  {
    title: "Test where the risk is",
    body: "Not every feature deserves the same depth. I map coverage to what would actually hurt users or the business, and use that to make release-readiness calls with confidence.",
  },
  {
    title: "Quality is a team sport",
    body: "The best bugs to find are the ones that never get written. I work closely with developers, product managers and DevOps so testing shapes decisions early, not just at the end.",
  },
  {
    title: "Make other engineers better",
    body: "Mentoring is part of the job. I'd rather leave a team that writes good tests without me than be the only person who understands the framework.",
  },
  {
    title: "Build for the next person",
    body: "Frameworks outlive their authors. I favour clear structure, sensible conventions and boring, readable code over clever abstractions.",
  },
];

function About() {
  return (
    <>
      <PageIntro index="01" eyebrow="about" title="Hands-on engineer. Quality strategist.">
        <p>
          I'm a Staff QA Engineer at Integral Ad Science (IAS), and before that I led quality
          engineering work at Operative Media. I still spend a lot of my time in the code —
          designing frameworks, writing tests, and debugging the failures nobody else wants to
          touch.
        </p>
        <p className="mt-4">
          But a growing part of my work happens before a single test is written: figuring out
          where the real risk lives, what's worth automating, and how a team knows a release is
          actually ready.
        </p>
      </PageIntro>

      <section className="mt-6">
        <SectionTitle>How I work</SectionTitle>
        <ol className="space-y-4">
          {principles.map((p, i) => (
            <li key={p.title} className="panel flex gap-5 p-6">
              <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20">
        <SectionTitle>Who I work with</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Developers", "Testability, code review, shared ownership of the suite."],
            ["Product managers", "Acceptance criteria, risk trade-offs, release decisions."],
            ["DevOps", "Pipelines, environments, and fast feedback on every change."],
          ].map(([who, what]) => (
            <div key={who} className="panel p-5">
              <p className="font-mono text-sm font-semibold text-primary">{who}</p>
              <p className="mt-2 text-sm text-muted-foreground">{what}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
