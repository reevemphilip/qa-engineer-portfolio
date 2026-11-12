import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageIntro, SectionTitle } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: pageMeta(
      "AI in Quality Engineering — Reeve Philip",
      "A proof of concept using Claude and Playwright MCP to generate Playwright tests from Jira requirements, with human review built in.",
    ),
  }),
  component: AiPage,
});

const pipeline = [
  { step: "jira", title: "Start from the requirement", body: "A Jira ticket's description and acceptance criteria are the input." },
  { step: "claude", title: "Claude + Playwright MCP", body: "The model explores the running app through Playwright MCP to understand real page structure." },
  { step: "generate", title: "Generate against the framework", body: "Tests are written using existing page object models and reusable fixtures — not one-off selectors." },
  { step: "review", title: "Human review", body: "Every generated test is reviewed before it's trusted. This step is not optional." },
  { step: "merge", title: "Merge into the suite", body: "Accepted tests join the regular suite and run in CI like everything else." },
];

const reviewChecks = [
  ["Correctness", "Does the test actually verify the requirement, or just click through it?"],
  ["Duplicate locators", "Did the model create a new locator for something a page object already exposes?"],
  ["Invalid scenarios", "Is this a flow real users can reach, or a plausible-sounding invention?"],
  ["Convention fit", "Does it use our fixtures, naming and structure — or will it rot the framework?"],
];

const next = [
  "AI agents that triage failing tests and suggest likely causes",
  "LLM-assisted test data generation for edge cases",
  "Requirement-to-coverage gap analysis",
];

function AiPage() {
  return (
    <>
      <PageIntro index="05" eyebrow="ai & innovation" title="AI writes the draft. Engineers own the result.">
        <p>
          I've been experimenting with AI-assisted quality engineering in a practical way: can an
          LLM turn a Jira requirement into a Playwright test that actually belongs in our
          framework? My proof of concept uses Claude and Playwright MCP to find out.
        </p>
      </PageIntro>

      <section>
        <SectionTitle>The proof of concept</SectionTitle>
        <ol className="panel divide-y divide-border/60 overflow-hidden">
          {pipeline.map((p, i) => (
            <li key={p.step} className="flex gap-5 p-5 sm:p-6">
              <div className="flex flex-col items-center">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
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
        <ul className="space-y-3">
          {next.map((n) => (
            <li
              key={n}
              className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-border p-5"
            >
              <span className="text-foreground/90">{n}</span>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                exploring
              </span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
