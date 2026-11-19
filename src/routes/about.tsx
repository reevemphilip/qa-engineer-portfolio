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
          I'm a quality engineering professional who enjoys solving complex testing challenges,
          building reliable automation, and helping teams release software with confidence.
        </p>
        <p className="mt-4">
          My background includes designing and scaling test automation frameworks, API and backend
          validation, performance testing, and integrating automated testing into CI/CD pipelines.
          I've worked extensively with Playwright, TypeScript, Cypress, and Python, focusing on the
          business-critical workflows where automation delivers the most value.
        </p>
        <p className="mt-4">
          At Integral Ad Science, I worked closely with engineering, product, and DevOps teams to
          improve test coverage, identify risks early, and strengthen release quality. I believe
          quality is a shared responsibility, and I enjoy bringing teams together to make testing
          more effective without slowing down development.
        </p>
        <p className="mt-4">
          Earlier in my career at Operative Media, I helped coordinate a distributed QA team of
          more than ten engineers across onshore and offshore locations. I introduced TestRail to
          help standardize test documentation and execution tracking, and mentored engineers on
          testing approaches and automation practices. This was a technical coordination and
          mentoring role, not direct people management.
        </p>
        <p className="mt-4">
          I'm also exploring how AI can improve quality engineering. I've worked on a proof of
          concept using Claude and Playwright MCP to generate automated tests from Jira
          requirements and support test triage, while keeping human review central to ensuring
          accuracy and reliability.
        </p>
        <p className="mt-4">
          Beyond hands-on automation, I enjoy mentoring engineers, improving testing practices, and
          finding practical ways to reduce repetitive manual work.
        </p>
        <p className="mt-4">
          I'm interested in Staff, Senior Staff, Lead Quality Engineering, SDET, and Test
          Automation Architect opportunities where I can combine hands-on engineering with
          automation strategy, AI-assisted testing, and continuous improvement.
        </p>
        <p className="mt-4">
          Core skills: Playwright | TypeScript | Cypress | Python | API Testing | Test Automation
          Architecture | CI/CD | Backend &amp; Data Validation | Performance Testing | AI-Assisted
          Testing | Quality Engineering Strategy
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

      <section className="mt-20">
        <SectionTitle>Education</SectionTitle>
        <div className="panel p-5">
          <p className="font-mono text-sm font-semibold text-primary">Queens College</p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Master of Arts in Computer Science</li>
            <li>Bachelor of Science in Computer Science</li>
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
