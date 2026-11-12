const lines: { kind: "cmd" | "pass" | "info" | "sum"; text: string }[] = [
  { kind: "cmd", text: "npx playwright test --shard=1/4" },
  { kind: "info", text: "Running suite: release-readiness" },
  { kind: "pass", text: "risk-based coverage mapped to critical flows" },
  { kind: "pass", text: "api contracts validated against schema" },
  { kind: "pass", text: "regression suite runs in parallel, no shared state" },
  { kind: "pass", text: "ci pipeline gives feedback on every change" },
  { kind: "pass", text: "ai-generated tests reviewed by a human" },
  { kind: "sum", text: "5 passed · 0 flaky · ready to ship" },
];

export function TerminalCard() {
  return (
    <div className="panel overflow-hidden bg-terminal/90 shadow-glow" aria-hidden="true">
      <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="ml-3 font-mono text-[11px] text-muted-foreground">quality.spec.ts</span>
      </div>
      <div className="space-y-1.5 px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
        {lines.map((line, i) => (
          <div
            key={line.text}
            className="flex gap-2 animate-line"
            style={{ animationDelay: `${400 + i * 260}ms` }}
          >
            {line.kind === "cmd" && (
              <>
                <span className="text-primary">$</span>
                <span className="text-foreground">{line.text}</span>
              </>
            )}
            {line.kind === "info" && <span className="text-muted-foreground">{line.text}</span>}
            {line.kind === "pass" && (
              <>
                <span className="text-primary">✓</span>
                <span className="text-foreground/85">{line.text}</span>
              </>
            )}
            {line.kind === "sum" && (
              <span className="mt-2 text-primary-glow">
                {line.text}
                <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 bg-primary animate-blink" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
