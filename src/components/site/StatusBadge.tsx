import { cva } from "class-variance-authority";

import { statusLabel, type ProjectStatus } from "@/content/site";

const badge = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider",
  {
    variants: {
      status: {
        planned: "border-border bg-muted text-muted-foreground",
        "in-progress": "border-warning/40 bg-warning/10 text-warning",
        complete: "border-primary/40 bg-primary/10 text-primary",
      },
    },
  },
);

const dot = cva("h-1.5 w-1.5 rounded-full", {
  variants: {
    status: {
      planned: "bg-muted-foreground",
      "in-progress": "bg-warning animate-pulse",
      complete: "bg-primary",
    },
  },
});

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={badge({ status })}>
      <span className={dot({ status })} />
      {statusLabel[status]}
    </span>
  );
}
