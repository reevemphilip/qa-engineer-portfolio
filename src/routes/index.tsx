import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Linkedin } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/PageIntro";
import { StatusBadge } from "@/components/site/StatusBadge";
import { TerminalCard } from "@/components/site/TerminalCard";
import { Button } from "@/components/ui/button";
import { profile, projects } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Reeve Philip — Staff Quality Engineer & Test Automation Architect",
      "I build automation frameworks that help engineering teams catch issues earlier and release with confidence — across UI, API, backend and performance testing.",
    ),
  }),
  component: Home,
});

const pillars = [
  {
    k: "01",
    title: "Hands-on engineer",
    body: "I write framework code, review automation PRs and dig into the flaky test myself.",
  },
  {
    k: "02",
    title: "Quality strategist",
    body: "Risk-based testing and release readiness — deciding what matters before deciding what to automate.",
  },
  {
    k: "03",
    title: "Multiplier",
    body: "Mentoring engineers and shaping testing practices so quality doesn't depend on one person.",
  },
];

const explore = [
  { to: "/about", label: "About", hint: "How I think about quality" },
  { to: "/skills", label: "Skills", hint: "Tools and disciplines" },
  { to: "/experience", label: "Experience", hint: "IAS · Operative Media" },
  { to: "/ai", label: "AI & Innovation", hint: "LLMs + Playwright MCP" },
] as const;

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="pt-16 sm:pt-24">
        <p className="eyebrow animate-rise">{profile.tagline}</p>
        <h1
          className="mt-5 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-6xl animate-rise"
          style={{ animationDelay: "80ms" }}
        >
          Building quality <span className="text-signal">into</span> software, not just testing it.
        </h1>
        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-rise"
          style={{ animationDelay: "160ms" }}
        >
          {profile.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-rise" style={{ animationDelay: "240ms" }}>
          <Button asChild variant="hero" size="lg">
            <Link to="/projects">
              View my projects <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="terminal" size="lg">
            <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
              <FileText /> View Resume
            </a>
          </Button>
          <Button asChild variant="subtle" size="lg">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> Connect on LinkedIn
            </a>
          </Button>
        </div>

        <div className="mt-14 animate-rise" style={{ animationDelay: "320ms" }}>
          <TerminalCard />
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            <span className="text-primary">#</span> Illustrative test output, not actual project
            results.
          </p>
        </div>
      </section>

      <section className="mt-24">
        <SectionTitle>What I bring</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.k} className="panel p-5">
              <span className="font-mono text-xs text-primary">{p.k}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionTitle>Projects</SectionTitle>
          <Link to="/projects" className="mb-6 font-mono text-xs text-primary hover:underline">
            all projects →
          </Link>
        </div>
        <div className="space-y-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/projects"
              hash={p.slug}
              className="panel panel-interactive flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{p.tech.join(" · ")}</p>
              </div>
              <StatusBadge status={p.status} />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionTitle>Explore</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          {explore.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="panel panel-interactive group flex items-center justify-between p-5"
            >
              <div>
                <p className="font-mono text-sm font-semibold text-foreground">{e.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.hint}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
