// Single source of truth for portfolio content. Update links, projects and
// experience here; pages render from this file.

import resumeAsset from "@/assets/reeve-philip-resume.pdf.asset.json";

export const profile = {
  name: "Reeve Philip",
  role: "Staff Quality Engineer",
  tagline: "Staff Quality Engineer · Test Automation Architect",
  email: "reevemphilip@gmail.com",
  linkedin: "https://www.linkedin.com/in/reeve-philip-78364611",
  github: "https://github.com/reevemphilip",
  resumePdf: resumeAsset.url,
  intro:
    "I build automation frameworks that help engineering teams catch issues earlier and release with confidence. My background spans UI, API, backend, and performance testing, but my focus has always been on solving the testing challenges that matter most. I enjoy working across engineering and product teams to improve how quality is built into software.",
};

export const nav = [
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/ai", label: "AI" },
  { to: "/contact", label: "Contact" },
] as const;

export type SkillGroup = { id: string; title: string; blurb: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "automation",
    title: "Test Automation",
    blurb: "Writing and architecting the code that tests the code.",
    items: ["Playwright", "Cypress", "TypeScript", "JavaScript", "Python", "Selenium"],
  },
  {
    id: "api",
    title: "API & Backend Testing",
    blurb: "Checking what the UI can't see — contracts, integrations and the data itself.",
    items: ["API validation", "Backend testing", "Integration testing", "Data validation"],
  },
  {
    id: "cicd",
    title: "CI/CD & Engineering",
    blurb: "Getting trustworthy results in front of engineers on every change.",
    items: ["Continuous integration", "Git", "GitHub", "Parallel execution", "Test sharding"],
  },
  {
    id: "qe",
    title: "Quality Engineering",
    blurb: "Deciding what to test, how deep, and when a release is ready.",
    items: [
      "Test strategy",
      "Automation framework design",
      "Regression optimization",
      "Performance testing",
      "Release readiness",
      "TestRail",
    ],
  },
  {
    id: "ai",
    title: "AI in Quality Engineering",
    blurb: "Using LLMs to speed up test authoring — with a human firmly in the loop.",
    items: ["Claude", "Playwright MCP", "AI-assisted test generation", "Human-in-the-loop validation"],
  },
];

export type Role = {
  company: string;
  title: string;
  dates: string;
  summary: string;
  focus: string[];
};

// Titles and dates verified against the owner's resume.
// Two Operative Media bullets (automation coverage, engineering/product partnership) are
// held back until verified against the resume.
export const experience: Role[] = [
  {
    company: "Integral Ad Science (IAS)",
    title: "Staff QA Engineer",
    dates: "02/2021 - 08/2026",
    summary:
      "Hands-on automation work across UI, API, backend, and performance testing, along with helping teams decide where testing mattered most before each release.",
    focus: [
      "Built and maintained UI and API automation frameworks using Playwright, TypeScript, and Cypress, organized so other engineers could understand and extend them.",
      "Validated backend services and APIs beyond what the UI could show, including integrations and data correctness.",
      "Performed performance testing to evaluate system behavior under load and identify potential performance bottlenecks.",
      "Integrated automated testing into CI/CD workflows and optimized regression execution through risk-based test selection, parallel execution, and sharding to improve feedback speed and efficiency.",
      "Worked with developers, product managers, and engineering teams to identify release risks early and give a clear picture of what had and hadn't been tested.",
      "Developed a proof of concept using Claude and Playwright MCP to generate automated tests from Jira requirements, leveraging existing page objects and fixtures. Evaluated generated tests for correctness, duplicate locators, and invalid scenarios, with human review as part of the workflow.",
      "Mentored engineers on automation design, debugging, and test strategy.",
    ],
  },
  {
    company: "Operative Media",
    title: "QA Lead / Senior QA Engineer",
    dates: "09/2009 - 09/2015",
    summary:
      "Coordinated testing across a distributed QA team and helped the team document and run tests more consistently. This was technical coordination and mentoring, not direct people management.",
    focus: [
      "Coordinated testing activities across a distributed team of more than ten onshore and offshore QA engineers.",
      "Introduced TestRail to standardize test documentation and execution tracking, so the team had one shared view of what had been tested.",
      "Mentored and coached engineers on testing practices and automation.",
    ],
  },
];

export type ProjectStatus = "planned" | "in-progress" | "complete";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  overview: string;
  tech: string[];
  challenges: string[];
  decisions: string[];
  /** Set once the repository is public. */
  repo: string | null;
};

export const projects: Project[] = [
  {
    slug: "playwright-framework",
    title: "Playwright + TypeScript Automation Framework",
    status: "planned",
    overview:
      "A reference framework showing how I structure UI automation for a real team: page objects, typed fixtures, environment config and reporting that's actually useful when a CI run goes red.",
    tech: ["Playwright", "TypeScript", "GitHub Actions"],
    challenges: [
      "Keeping tests independent so they stay safe to run in parallel",
      "Removing flakiness caused by timing and shared state",
      "Making a failure debuggable from CI artifacts alone",
    ],
    decisions: [
      "Fixtures over base-class inheritance for setup and teardown",
      "Page objects that expose user intent, not raw selectors",
      "Role-based locators first, test IDs as the fallback",
      "Sharding configured from day one rather than retrofitted",
    ],
    repo: null,
  },
  {
    slug: "api-framework",
    title: "API Testing Framework",
    status: "planned",
    overview:
      "A typed API testing layer focused on validating behavior and data — not just that an endpoint returned 200.",
    tech: ["TypeScript", "Playwright API testing", "Schema validation"],
    challenges: [
      "Reliable test data setup and cleanup",
      "Catching contract drift between services",
      "Asserting on data correctness, not only status codes",
    ],
    decisions: [
      "Typed clients per service so tests read like the domain",
      "Schema validation on every response",
      "Data builders instead of shared fixtures files",
    ],
    repo: null,
  },
  {
    slug: "cicd-integration",
    title: "CI/CD Test Automation Integration",
    status: "planned",
    overview:
      "A pipeline design that balances fast pull-request feedback against full regression coverage, with results engineers will actually read.",
    tech: ["GitHub Actions", "Playwright sharding", "Git"],
    challenges: [
      "Fast feedback on PRs without losing regression depth",
      "Handling flaky tests without hiding real failures",
      "Merging and surfacing results from parallel shards",
    ],
    decisions: [
      "Tiered runs: a focused suite on PRs, full regression on a schedule",
      "Shard across runners, then merge into a single report",
      "Retries are tracked and reported, never silently absorbed",
    ],
    repo: null,
  },
  {
    slug: "ai-test-generation",
    title: "AI-Assisted Test Generation with LLMs + Playwright MCP",
    status: "in-progress",
    overview:
      "A proof of concept using Claude and Playwright MCP to turn Jira requirements into Playwright tests that follow existing page object models and reusable fixtures.",
    tech: ["Claude", "Playwright MCP", "Playwright", "TypeScript", "Jira"],
    challenges: [
      "Generated tests inventing or duplicating locators",
      "Scenarios that look plausible but aren't valid for the product",
      "Keeping output consistent with framework conventions",
    ],
    decisions: [
      "Give the model the framework's conventions and page objects as context",
      "Reuse existing page objects and fixtures rather than raw selectors",
      "Every generated test goes through human review before it merges",
    ],
    repo: null,
  },
  {
    slug: "performance-testing",
    title: "Performance Testing Projects",
    status: "planned",
    overview:
      "Load and performance testing experiments that answer a practical question: how does this service behave when real traffic shows up?",
    tech: ["Performance testing", "Tooling under evaluation"],
    challenges: [
      "Designing load profiles that resemble real usage",
      "Separating test-harness noise from real regressions",
      "Turning results into decisions a team can act on",
    ],
    decisions: [
      "Start from clear performance goals before writing scripts",
      "Version load scripts alongside the code they exercise",
      "Track trends over time rather than single-run numbers",
    ],
    repo: null,
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  complete: "Complete",
};
