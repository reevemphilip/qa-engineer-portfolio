import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { nav, profile } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link
          to="/"
          className="font-mono text-sm text-foreground transition-colors hover:text-primary"
          onClick={() => setOpen(false)}
        >
          <span className="text-primary">~/</span>
          {profile.terminalName}
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary animate-blink" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary hover:text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-background/95 px-5 pb-5 pt-2 md:hidden animate-in fade-in slide-in-from-top-2"
          aria-label="Mobile"
        >
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b border-border/40 py-3 font-mono text-sm text-muted-foreground"
              activeProps={{ className: "text-primary" }}
            >
              <span className="text-xs text-primary/70">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
