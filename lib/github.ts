import { site } from "@/lib/site";
import { fallbackGitHubStats } from "@/lib/data/open-source";

export type GitHubStats = {
  publicRepos: number;
  followers: number;
  totalStars: number;
  contributionsThisYear: number;
  lastUpdated: "Live" | "Cached";
};

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${site.githubUser}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "joshtri-ecosystem/1.0",
        },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(4000),
      },
    );

    if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);

    const data = (await response.json()) as {
      public_repos?: number;
      followers?: number;
    };

    return {
      publicRepos: data.public_repos ?? fallbackGitHubStats.publicRepos,
      followers: data.followers ?? fallbackGitHubStats.followers,
      totalStars: fallbackGitHubStats.totalStars,
      contributionsThisYear: fallbackGitHubStats.contributionsThisYear,
      lastUpdated: "Live",
    };
  } catch {
    return { ...fallbackGitHubStats, lastUpdated: "Cached" };
  }
}
