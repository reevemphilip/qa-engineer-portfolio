import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro, SectionTitle } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "About — Reeve Philip, Staff QA Engineer",
      "Most recently a Staff QA Engineer at Integral Ad Science. Hands-on automation, API and backend testing, performance testing, and helping teams make informed release decisions.",
    ),
  }),
  component: About,
});

const principles = [
  {
    title: "Build automation that delivers value",
    body: "Automation should make testing more reliable and efficient, not just increase the number of automated tests. I focus on critical workflows, maintainable frameworks, and useful feedback.",
  },
  {
    title: "Focus on risk, not just coverage",
    body: "Not every feature needs the same level of testing. I prioritize business-critical workflows and areas where failures would have the greatest impact on customers or the business.",
  },
  {
    title: "Quality is a shared responsibility",
    body: "Quality shouldn't be something QA checks only at the end. I believe developers, QA, product, and DevOps all have a role in identifying issues early and delivering reliable software.",
  },
  {
    title: "Help other engineers grow",
    body: "I enjoy mentoring engineers, sharing automation practices, and making frameworks easier for others to contribute to. A good framework should help the entire team become more effective.",
  },
  {
    title: "Keep solutions practical and maintainable",
    body: "I prefer clear, reusable code and straightforward framework designs over unnecessary complexity. The goal is to build something the team can understand, maintain, and improve over time.",
  },
];

function About() {
  return (
    <>
      <PageIntro index="01" eyebrow="about" title="Hands-on engineer. Quality strategist.">
        <p>
          Most recently, I worked as a Staff QA Engineer at Integral Ad Science (IAS), where I
          focused on automation, backend and API validation, performance testing, and improving
          software quality throughout the development process.
        </p>
        <p className="mt-4">
          I enjoy the hands-on side of engineering, especially building automation frameworks,
          troubleshooting test failures, and finding ways to make regression testing faster and
          more reliable. For me, automation isn't just about increasing test coverage. It's about
          giving engineering teams feedback they can actually trust.
        </p>
        <p className="mt-4">
          I also work closely with developers and product managers to understand requirements,
          identify risks early, and decide where testing will have the greatest impact. When it's
          time to release, I believe QA should provide a clear picture of what's been tested, what
          hasn't, and any remaining risks so the team can make an informed decision.
        </p>
        <p className="mt-4">
          Earlier in my career at Operative Media, I helped coordinate a distributed QA team of
          more than ten engineers across onshore and offshore locations. I introduced TestRail to
          help standardize test documentation and execution tracking, and coached engineers on
          testing approaches and automation practices. This was a technical coordination and
          mentoring role, not direct people management.
        </p>
        <p className="mt-4">
          What I enjoy most is combining hands-on engineering with helping teams improve how they
          approach quality. I like building practical solutions, sharing knowledge, and making
          testing a shared responsibility across engineering and product.
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
            ["Developers", "Testability, automation, troubleshooting, and shared ownership of software quality."],
            ["Product managers", "Clarifying requirements, acceptance criteria, risk assessment, and informed release decisions."],
            ["DevOps", "CI/CD integration, test execution efficiency, environments, and reliable feedback."],
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
