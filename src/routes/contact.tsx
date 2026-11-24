import { createFileRoute } from "@tanstack/react-router";
import { FileText, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageIntro, SectionTitle } from "@/components/site/PageIntro";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/content/site";
import { buildMailto, contactSchema } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta(
      "Resume & Contact — Reeve Philip",
      "View Reeve Philip's two-page PDF resume or get in touch about Staff, Lead QA, SDET and Test Automation Architect roles.",
    ),
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = contactSchema.safeParse(Object.fromEntries(form));
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        next[key] ??= issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    window.location.href = buildMailto(profile.email, result.data);
  }

  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
    { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: profile.github, label: "GitHub", icon: Github },
  ];

  return (
    <>
      <PageIntro index="06" eyebrow="resume & contact" title="Let's talk quality.">
        <p>
          Open to conversations about Staff, Senior Staff, Lead QA, SDET and Test Automation
          Architect roles. The quickest way to reach me is below.
        </p>
      </PageIntro>

      <section className="panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="eyebrow">resume.pdf</p>
          <h2 className="mt-2 text-xl font-semibold text-foreground">View my resume</h2>
          <p className="mt-1 text-sm text-muted-foreground">Two-page resume, PDF.</p>
        </div>
        <Button
          asChild
          variant="hero"
          size="lg"
          className="h-auto min-h-11 shrink-0 whitespace-normal text-center"
        >
          <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
            <FileText /> View or Download Resume (PDF)
          </a>
        </Button>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-3">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="panel panel-interactive flex items-center gap-3 p-4 font-mono text-sm text-foreground"
          >
            <Icon className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">{label}</span>
          </a>
        ))}
      </section>

      <section className="mt-16">
        <SectionTitle>Send a message</SectionTitle>
        <form onSubmit={onSubmit} noValidate className="panel space-y-5 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <Input id="name" name="name" autoComplete="name" maxLength={100} />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <Input id="email" name="email" type="email" autoComplete="email" maxLength={255} />
            </Field>
          </div>
          <Field id="company" label="Company (optional)" error={errors.company}>
            <Input id="company" name="company" autoComplete="organization" maxLength={120} />
          </Field>
          <Field id="message" label="Message" error={errors.message}>
            <Textarea id="message" name="message" rows={6} maxLength={2000} />
          </Field>
          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" variant="hero" size="lg">
              <Send /> Send message
            </Button>
            {sent && (
              <p className="font-mono text-xs text-primary" role="status">
                ✓ Opening your email app with the message ready to send.
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="font-mono text-xs text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && (
        <p className="font-mono text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
