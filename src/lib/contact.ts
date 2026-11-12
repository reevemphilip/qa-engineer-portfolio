import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Please use a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "A little more detail, please").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function buildMailto(to: string, data: ContactInput) {
  const subject = `Portfolio inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`;
  const body = `${data.message}\n\n— ${data.name}\n${data.email}${data.company ? `\n${data.company}` : ""}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
