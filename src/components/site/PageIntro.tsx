import type { ReactNode } from "react";

export function PageIntro({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="pt-16 pb-10 sm:pt-24">
      <p className="eyebrow animate-rise">
        <span className="text-muted-foreground">// {index}</span> — {eyebrow}
      </p>
      <h1
        className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-5xl animate-rise"
        style={{ animationDelay: "80ms" }}
      >
        {title}
      </h1>
      {children && (
        <div
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-rise"
          style={{ animationDelay: "160ms" }}
        >
          {children}
        </div>
      )}
    </header>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
      <span className="h-px w-6 bg-primary" />
      {children}
    </h2>
  );
}
