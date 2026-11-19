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
    title: "Automation & Programming",
    blurb: "Frameworks and languages for web, API, and mobile test automation.",
    items: ["Playwright", "Cypress", "Selenium", "TypeScript", "JavaScript", "Python", "PyTest", "Appium"],
  },
  {
    id: "api",
    title: "API, Backend & Data",
    blurb: "Validation below the UI: services, integrations, and the data itself.",
    items: [
      "REST APIs",
      "Postman",
      "API validation",
      "Backend testing",
      "Integration testing",
      "Data validation",
      "SQL",
      "Snowflake",
      "Databricks",
    ],
  },
  {
    id: "cicd",
    title: "CI/CD & Engineering",
    blurb: "Running automated tests in pipelines and keeping feedback fast.",
    items: ["Jenkins", "GitHub Actions", "Git", "Docker", "Parallel execution", "Test sharding"],
  },
  {
    id: "performance",
    title: "Performance Testing",
    blurb: "Checking how systems behave under load.",
    items: ["JMeter", "k6", "Load testing"],
  },
  {
    id: "devices",
    title: "Cross-Browser & Mobile",
    blurb: "Testing across browsers, devices, and platforms.",
    items: ["BrowserStack", "Sauce Labs", "Appium"],
  },
  {
    id: "qe",
    title: "Quality Engineering & Leadership",
    blurb: "Deciding what to test, how deep, and when a release is ready, and helping teams do the same.",
    items: [
      "Automation framework architecture",
      "Test strategy",
      "Risk-based testing",
      "Exploratory testing",
      "Regression optimization",
      "Release readiness",
      "TestRail",
      "Jira",
      "Agile/Scrum",
      "Mentoring",
      "Code review",
    ],
  },
  {
    id: "ai",
    title: "AI & LLM Testing",
    blurb: "Testing AI-powered features and using AI to assist test creation, with human review.",
    items: [
      "Claude",
      "Claude Code",
      "ChatGPT",
      "Playwright MCP",
      "AI-assisted test generation",
      "Nondeterministic response validation",
      "Human-in-the-loop validation",
    ],
  },
];

export type Role = {
  company: string;
  title: string;
  dates: string;
  summary: string;
  focus: string[];
};

// Titles, dates and bullets come from the owner's own LinkedIn profile and resume.
// Roles are listed newest first, one entry per title.
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
      "Developed UI and API automated tests for IAS Agent, validating AI-powered functionality and non-deterministic responses by checking that expected numerical values were present and within acceptable thresholds.",
      "Contributed to a proof of concept using Claude and Playwright MCP to generate automated tests from Jira requirements, leveraging existing page objects and fixtures. Evaluated generated tests for correctness, duplicate locators, and invalid scenarios, with human review as part of the workflow.",
      "Mentored engineers on automation design, debugging, and test strategy.",
    ],
  },
  {
    company: "Integral Ad Science (IAS)",
    title: "Quality Assurance Lead",
    dates: "03/2017 - 02/2021",
    summary:
      "Led quality assurance efforts for advertising measurement products, focusing on automation, data accuracy, regulatory compliance, and release readiness.",
    focus: [
      "Led testing efforts for Media Rating Council (MRC) audits, achieving 100% audit-compliance accuracy.",
      "Expanded UI automation and regression test coverage by 35%.",
      "Performed performance and load testing using Apache JMeter to identify potential scalability and reliability issues.",
      "Improved test data management and validation processes to support more reliable testing.",
      "Coordinated user acceptance testing (UAT) and worked closely with product and engineering teams to identify risks before release.",
      "Promoted risk-based testing, early defect identification, and continuous improvement of QA practices.",
    ],
  },
  {
    company: "Integral Ad Science (IAS)",
    title: "Senior QA Engineer",
    dates: "09/2015 - 03/2017",
    summary:
      "Owned QA testing and release readiness for advertising measurement products across web and video platforms, with a focus on automation, application reliability, and compliance testing.",
    focus: [
      "Maintained a 99%+ zero-defect release record while overseeing QA release management and deployment readiness.",
      "Achieved 100% on-time deployment readiness through structured release validation and quality checks.",
      "Developed and maintained automated UI regression tests, expanding coverage of critical business workflows.",
      "Performed performance testing to identify application bottlenecks and establish performance baselines.",
      "Designed risk-based test strategies covering functional, integration, regression, and exploratory testing.",
      "Investigated production issues, identified defects, and worked with developers to validate fixes.",
      "Collaborated with product and engineering teams to clarify requirements, assess release risks, and improve software quality.",
    ],
  },
  {
    company: "Operative Media",
    title: "QA Analyst",
    dates: "03/2013 - 09/2015",
    summary:
      "Worked closely with product and engineering teams to ensure the quality and reliability of advertising management applications.",
    focus: [
      "Reviewed business requirements and acceptance criteria to identify testing gaps and potential risks early in development.",
      "Designed and executed functional, integration, regression, and end-to-end test scenarios.",
      "Used SQL to validate backend data and verify consistency between application behavior and database records.",
      "Investigated complex application and production issues, working with developers to identify root causes and validate fixes.",
      "Participated in Agile ceremonies, feature demonstrations, release validation, and Tier 3 production support.",
    ],
  },
  {
    company: "Operative Media",
    title: "QA Lead",
    dates: "03/2011 - 03/2013",
    summary:
      "Provided technical leadership and coordinated testing activities across a distributed team of QA engineers.",
    focus: [
      "Coordinated and mentored a team of 10+ onshore and offshore QA engineers, establishing consistent testing practices and quality standards.",
      "Introduced TestRail and standardized test documentation and execution processes, improving test traceability and team execution efficiency by 30%.",
      "Developed risk-based test strategies and coordinated functional, integration, regression, and release testing.",
      "Guided team members in adopting automation and improving their technical testing skills.",
      "Worked with product managers, developers, and distributed QA teams to clarify requirements, prioritize testing, and communicate release risks.",
      "Promoted quality as a shared responsibility across engineering and product teams.",
    ],
  },
  {
    company: "Operative Media",
    title: "Senior QA Engineer",
    dates: "02/2010 - 03/2011",
    summary:
      "Focused on expanding automated testing, improving regression coverage, and validating complex application workflows.",
    focus: [
      "Developed and maintained automated functional and regression tests for web applications.",
      "Executed automated tests through Jenkins to support continuous integration and release validation.",
      "Performed SQL-based backend testing and data reconciliation to verify application accuracy.",
      "Conducted integration, cross-browser, configuration, and performance testing.",
      "Investigated application defects and collaborated with developers to troubleshoot issues and verify fixes.",
      "Supported software releases through test planning, execution, and defect analysis.",
    ],
  },
  {
    company: "Operative Media",
    title: "QA Engineer",
    dates: "09/2009 - 02/2010",
    summary:
      "Performed hands-on software testing for advertising management applications, focusing on functionality, reliability, and data accuracy.",
    focus: [
      "Created and executed test cases based on product requirements and business workflows.",
      "Performed functional, regression, integration, and cross-browser testing.",
      "Documented software defects, reproduced reported issues, and verified fixes.",
      "Used SQL queries to validate application data against backend database records.",
      "Collaborated with developers and product teams to ensure new features met business requirements.",
      "Supported release testing and maintained QA documentation.",
    ],
  },
];

export type ProjectStatus = "planned" | "in-progress" | "complete";

// Personal portfolio projects, separate from professional work. Objectives and design
// considerations describe what each project is meant to do, not completed work.
// Keep a project "planned" until the owner says development has started.
export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  overview: string;
  tech: string[];
  objectives: string[];
  considerations: string[];
  /** Public repository URL; only set for repositories the owner has shared. */
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "playwright-framework",
    title: "Playwright + TypeScript Automation Framework",
    status: "in-progress",
    overview:
      "Development is underway on a reference framework for UI automation, structured around page objects, typed fixtures, environment configuration, and reporting that helps explain failed CI runs. The objectives and design considerations below describe the intended direction.",
    repo: "https://github.com/reevemphilip/playwright-typescript-automation",
    tech: ["Playwright", "TypeScript", "GitHub Actions"],
    objectives: [
      "Keep tests independent so they can run safely in parallel",
      "Reduce flakiness caused by timing and shared state",
      "Make failures debuggable from CI artifacts alone",
    ],
    considerations: [
      "Fixtures rather than base-class inheritance for setup and teardown",
      "Page objects that describe user actions, not raw selectors",
      "Role-based locators first, with test IDs as a fallback",
      "Sharding planned from the start rather than added later",
    ],
  },
  {
    slug: "api-framework",
    title: "API Testing Framework",
    status: "planned",
    overview:
      "A planned API testing layer focused on validating behavior and data, not just status codes.",
    tech: ["TypeScript", "Playwright API testing", "Schema validation"],
    objectives: [
      "Reliable test data setup and cleanup",
      "Detect contract changes between services",
      "Assert on data correctness, not only status codes",
    ],
    considerations: [
      "Typed clients per service so tests read clearly",
      "Schema validation on every response",
      "Data builders instead of shared fixture files",
    ],
  },
  {
    slug: "cicd-integration",
    title: "CI/CD Test Automation Integration",
    status: "planned",
    overview:
      "A planned pipeline design that balances fast pull-request feedback with full regression coverage.",
    tech: ["GitHub Actions", "Playwright sharding", "Git"],
    objectives: [
      "Fast feedback on pull requests without losing regression depth",
      "Handle flaky tests without hiding real failures",
      "Combine and report results from parallel shards",
    ],
    considerations: [
      "Tiered runs: a focused suite on pull requests, full regression on a schedule",
      "Shard across runners, then merge results into a single report",
      "Track and report retries rather than silently absorbing them",
    ],
  },
  {
    slug: "ai-agent-llm-testing",
    title: "AI Agent Development & LLM Testing",
    status: "planned",
    overview:
      "A planned personal project to build a small AI agent and explore how to test LLM-powered features whose responses aren't always identical.",
    tech: ["LLMs", "AI agents", "Playwright", "TypeScript"],
    objectives: [
      "Validate nondeterministic responses with checks that tolerate variation",
      "Define what counts as a correct or acceptable response",
      "Explore repeatable ways to evaluate agent behavior",
    ],
    considerations: [
      "Threshold and content-based assertions instead of exact-match comparisons",
      "A fixed set of test prompts to compare behavior over time",
      "Human review of results the automated checks can't judge",
    ],
  },
  {
    slug: "performance-testing",
    title: "Performance Testing Framework — JMeter & k6",
    status: "planned",
    overview:
      "A planned performance testing project using JMeter and k6 to evaluate how a service behaves under load.",
    tech: ["JMeter", "k6", "Load testing"],
    objectives: [
      "Design load profiles that resemble realistic usage",
      "Separate test-harness noise from real performance changes",
      "Present results in a way a team can act on",
    ],
    considerations: [
      "Define performance goals before writing scripts",
      "Version load scripts alongside the code they test",
      "Compare trends over time rather than single runs",
    ],
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  complete: "Complete",
};
