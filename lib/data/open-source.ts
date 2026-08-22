import { site } from "@/lib/site";

export type PinnedRepo = {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  href: string;
};

export const fallbackGitHubStats = {
  publicRepos: 24,
  followers: 412,
  totalStars: 1830,
  contributionsThisYear: 986,
  lastUpdated: "Recently",
};

export const pinnedRepos: PinnedRepo[] = [
  {
    name: "lenggu-ui",
    description:
      "Accessible, dependency-light React components with a predictable API.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 486,
    forks: 32,
    href: site.githubUrl,
  },
  {
    name: "vault",
    description:
      "Desktop productivity platform — tasks and knowledge, unified. Built with Tauri.",
    language: "Rust",
    languageColor: "#dea584",
    stars: 312,
    forks: 18,
    href: site.githubUrl,
  },
  {
    name: "elysia-stack",
    description:
      "Type-safe backend starter for Elysia, Bun, and Drizzle with contract-first APIs.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 205,
    forks: 14,
    href: site.githubUrl,
  },
  {
    name: "forge",
    description:
      "Zero-dependency project scaffolding CLI written in Go.",
    language: "Go",
    languageColor: "#00add8",
    stars: 147,
    forks: 9,
    href: site.githubUrl,
  },
];

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export function generateContributions(seed = 2025): ContributionLevel[][] {
  const weeks = 52;
  const days = 7;
  const grid: ContributionLevel[][] = [];

  for (let w = 0; w < weeks; w++) {
    const column: ContributionLevel[] = [];
    for (let d = 0; d < days; d++) {
      const value = Math.abs(
        Math.sin(seed * 12.9898 + w * 78.233 + d * 37.719) * 43758.5453,
      );
      const r = value - Math.floor(value);
      const level: ContributionLevel =
        r < 0.42 ? 0 : r < 0.62 ? 1 : r < 0.78 ? 2 : r < 0.9 ? 3 : 4;
      column.push(level);
    }
    grid.push(column);
  }

  return grid;
}
