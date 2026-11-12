// Single source of truth for portfolio content. Update links, projects and
// experience here; pages render from this file.

export const profile = {
  name: "Reeve Philip",
  role: "Staff Quality Engineer",
  tagline: "Staff Quality Engineer · Test Automation Architect",
  // TODO(owner): replace with real contact details.
  email: "reeve.philip@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  resumePdf: "/resume.pdf",
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
  summary: string;
  focus: string[];
};

// Dates and metrics intentionally omitted until provided by the owner.
export const experience: Role[] = [
  {
    company: "Integral Ad Science (IAS)",
    title: "Staff QA Engineer",
    summary:
      "Hands-on automation engineering and framework architecture, paired with the quality strategy work that decides where that automation should point.",
    focus: [
      "Build and maintain test automation frameworks that other engineers can understand and extend.",
      "Improve regression efficiency so the suite gives faster, more meaningful feedback.",
      "Integrate automated testing into CI/CD workflows so results arrive with every change.",
      "Work with engineering and product teams to identify release risks early and reduce them.",
      "Establish testing standards and help raise testing practices across teams.",
      "Mentor engineers on automation design, debugging and test strategy.",
    ],
  },
  {
    company: "Operative Media",
    title: "Quality Engineering Leadership",
    summary:
      "Led quality engineering efforts — setting direction for how the team tested, and coordinating the people doing it.",
    focus: [
      "Established testing standards and processes for the QA team.",
      "Mentored and coordinated QA engineers across workstreams.",
      "Built and maintained automated test coverage.",
      "Partnered with engineering and product to surface and reduce release risk.",
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
      "A typed API testing layer focused on validating behaviour and data — not just that an endpoint returned 200.",
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
