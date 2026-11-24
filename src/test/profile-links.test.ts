import { describe, expect, it } from "vitest";

import { profile, projects } from "@/content/site";

describe("professional destinations remain independent of the terminal name", () => {
  it("preserves the contact email", () => {
    expect(profile.email).toBe("reevemphilip@gmail.com");
  });

  it("preserves the GitHub username", () => {
    expect(profile.github).toBe("https://github.com/reevemphilip");
  });

  it("preserves the LinkedIn destination", () => {
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/reeve-philip-78364611");
  });

  it("preserves the public Playwright repository", () => {
    expect(projects.find((project) => project.slug === "playwright-framework")?.repo).toBe(
      "https://github.com/reevemphilip/playwright-typescript-automation",
    );
  });
});