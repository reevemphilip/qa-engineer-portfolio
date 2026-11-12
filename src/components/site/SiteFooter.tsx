import { Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">✓</span> {profile.name} · {profile.role}
        </p>
        <div className="flex items-center gap-2">
          <FooterIcon href={profile.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href={profile.github} label="GitHub">
            <Github className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href={`mailto:${profile.email}`} label="Email">
            <Mail className="h-4 w-4" />
          </FooterIcon>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
    >
      {children}
    </a>
  );
}
