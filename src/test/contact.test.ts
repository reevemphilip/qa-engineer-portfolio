import { describe, expect, it } from "vitest";

import { buildMailto, contactSchema } from "@/lib/contact";

describe("contact form", () => {
  it("rejects an invalid email", () => {
    const r = contactSchema.safeParse({ name: "A", email: "nope", message: "hello there friend" });
    expect(r.success).toBe(false);
  });

  it("puts the sender's details into the mail body", () => {
    const url = buildMailto("reevemphilip@gmail.com", {
      name: "Jane",
      email: "jane@co.com",
      company: "Co",
      message: "Let's talk about a role",
    });
    expect(url.startsWith("mailto:reevemphilip@gmail.com?")).toBe(true);
    expect(decodeURIComponent(url)).toContain("jane@co.com");
  });
});
