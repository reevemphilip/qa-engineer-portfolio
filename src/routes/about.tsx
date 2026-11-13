import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro, SectionTitle } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "About — Reeve Philip, Staff QA Engineer",
      "Staff QA Engineer at Integral Ad Science. Hands-on automation work, regression testing, mentoring QA engineers and helping teams make informed release decisions.",
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
          I'm a Staff QA Engineer at Integral Ad Science (IAS), and before that I worked in quality
          engineering at Operative Media. Most days I'm still hands-on: designing automation
          frameworks, writing tests, and tracking down the failures that keep a suite from being
          trusted.
        </p>
        <p className="mt-4">
          A lot of my work is about making regression testing worth running — trimming what
          doesn't add value, speeding up what does, and making sure a failure points somewhere
          useful. When the feedback is fast and reliable, teams actually use it.
        </p>
        <p className="mt-4">
          I spend just as much time with product managers and developers as I do in code. Talking
          through risk early shapes what we test, and it means that when a release decision comes
          up, the team has real information to go on instead of a gut feeling.
        </p>
        <p className="mt-4">
          I also mentor QA engineers and help shape how teams approach testing — from framework
          conventions to where automation should and shouldn't go. I like being the person who
          can write the code and also help decide what the code should be doing.
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
