import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro, SectionTitle } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: pageMeta(
      "AI in Quality Engineering — Reeve Philip",
      "Two areas of AI experience: testing the AI-powered IAS Agent application, and contributing to a Claude and Playwright MCP proof of concept that generated candidate tests for human review.",
    ),
  }),
  component: AiPage,
});

const pipeline = [
  {
    step: "jira",
    title: "Start from the requirement",
    body: "A Jira ticket's description and acceptance criteria are the input.",
  },
  {
    step: "claude",
    title: "Claude + Playwright MCP",
    body: "Playwright MCP was used as part of the AI-assisted test generation workflow.",
  },
  {
    step: "generate",
    title: "Generate candidate tests",
    body: "Candidate tests are drafted using the existing page objects and fixtures.",
  },
  {
    step: "review",
    title: "Review correctness",
    body: "Each candidate test is reviewed by a person to confirm it actually verifies the requirement.",
  },
  {
    step: "validate",
    title: "Validate locators and scenarios",
    body: "Check for duplicate or invented locators and for scenarios that aren't valid for the product.",
  },
  {
    step: "conventions",
    title: "Evaluate framework conventions",
    body: "Assess whether the test follows the existing framework's structure, naming, and fixtures.",
  },
];

const reviewChecks = [
  ["Correctness", "Does the test actually verify the requirement, or just click through it?"],
  [
    "Duplicate locators",
    "Did the model create a new locator for something a page object already exposes?",
  ],
  ["Invalid scenarios", "Is this a flow real users can reach, or a plausible-sounding invention?"],
  ["Convention fit", "Does it follow the existing fixtures, naming, and structure?"],
];

const next = [
  "AI agents that triage failing tests and suggest likely causes",
  "LLM-assisted test data generation for edge cases",
  "Requirement-to-coverage gap analysis",
];

function AiPage() {
  return (
    <>
      <PageIntro
        index="05"
        eyebrow="ai & innovation"
        title="AI writes the draft. Engineers own the result."
      >
        <p>
          My AI experience falls into two areas: testing an AI-powered application, and using AI to
          help write automated tests.
        </p>
      </PageIntro>

      <section>
        <SectionTitle>AI Application Testing — IAS Agent</SectionTitle>
        <div className="panel p-6">
          <p className="leading-relaxed text-muted-foreground">
            Developed UI and API automation tests to validate nondeterministic AI responses,
            including extracting numerical values and verifying that they fell within acceptable
            thresholds.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle>AI-Assisted Test Automation — Claude and Playwright MCP</SectionTitle>
        <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">
          Contributed to a proof of concept using Claude and Playwright MCP to generate automated
          tests from Jira requirements, leveraging existing page objects and fixtures while
          maintaining human review.
        </p>
        <ol className="panel divide-y divide-border/60 overflow-hidden">
          {pipeline.map((p, i) => (
            <li key={p.step} className="flex gap-5 p-5 sm:p-6">
              <div className="flex flex-col items-center">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {p.step}
                </p>
                <h3 className="mt-1 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20">
        <SectionTitle>Why review matters</SectionTitle>
        <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">
          AI-generated tests can look convincing and still be wrong. A test that passes for the
          wrong reason is worse than no test at all, so I treat model output like a pull request
          from a fast but unfamiliar contributor.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {reviewChecks.map(([title, body]) => (
            <div key={title} className="panel p-5">
              <p className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                <span className="text-warning">?</span> {title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle>What's next</SectionTitle>
        <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">
          Future areas I'd like to explore. These are ideas, not completed work.
        </p>
        <ul className="space-y-3">
          {next.map((n) => (
            <li
              key={n}
              className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-border p-5"
            >
              <span className="text-foreground/90">{n}</span>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                future exploration
              </span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
