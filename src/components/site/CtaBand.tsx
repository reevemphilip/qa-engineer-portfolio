import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Hiring for Staff-level quality engineering?",
  body = "I'm interested in Staff, Senior Staff, Lead QA, SDET and Test Automation Architect roles.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="panel relative mt-20 overflow-hidden p-8 sm:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3 max-w-xl text-muted-foreground">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">
            Get in touch <ArrowRight />
          </Link>
        </Button>
        <Button asChild variant="subtle" size="lg">
          <Link to="/projects">See projects</Link>
        </Button>
      </div>
    </section>
  );
}
