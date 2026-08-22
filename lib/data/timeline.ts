export type TimelinePeriod = {
  id: string;
  role: string;
  period: string;
  company: string;
  description: string;
  icon: string;
  tags: string[];
  current?: boolean;
};

export const timeline: TimelinePeriod[] = [
  {
    id: "student",
    role: "Student",
    period: "2019 — 2023",
    company: "Computer Science",
    description:
      "Wrote the first lines of code, fell in love with systems, and spent sleepless nights learning how computers actually work.",
    icon: "graduation-cap",
    tags: ["CS fundamentals", "Algorithms", "Self-taught"],
  },
  {
    id: "freelancer",
    role: "Freelancer",
    period: "2022 — 2024",
    company: "Independent",
    description:
      "Shipped products for clients end to end — from a blank repository to production deployments, support, and maintenance.",
    icon: "briefcase",
    tags: ["Client work", "Full stack", "Product thinking"],
  },
  {
    id: "engineer",
    role: "Software Engineer",
    period: "2024 — Present",
    company: "Professional",
    description:
      "Joined professional engineering teams, owning services and features that people use every single day.",
    icon: "terminal",
    tags: ["Backend", "Architecture", "Reliability"],
  },
  {
    id: "open-source",
    role: "Open Source",
    period: "2024 — Present",
    company: "Maintainer",
    description:
      "Started releasing libraries and tools, maintaining them in public, and contributing back to the community.",
    icon: "github",
    tags: ["Maintenance", "Docs", "Community"],
  },
  {
    id: "founder",
    role: "Current Projects",
    period: "Now",
    company: "The Ecosystem",
    description:
      "Building Vault, writing on the blog, and experimenting in the playground — one coherent ecosystem, not scattered side projects.",
    icon: "sparkles",
    tags: ["Vault", "Blog", "Playground"],
    current: true,
  },
];
