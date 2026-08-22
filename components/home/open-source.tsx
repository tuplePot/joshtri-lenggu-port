import { ArrowUpRight, CodeFork, Star } from "@gravity-ui/icons";
import { site } from "@/lib/site";
import { pinnedRepos } from "@/lib/data/open-source";
import type { GitHubStats } from "@/lib/github";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/github-icon";
import { ContributionGraph } from "@/components/home/contribution-graph";
import { cn } from "@/lib/utils";

const statCards: {
  key: keyof Pick<
    GitHubStats,
    "publicRepos" | "followers" | "totalStars" | "contributionsThisYear"
  >;
  label: string;
}[] = [
  { key: "contributionsThisYear", label: "Contributions / year" },
  { key: "totalStars", label: "Stars earned" },
  { key: "publicRepos", label: "Public repositories" },
  { key: "followers", label: "Followers" },
];

export function OpenSource({ stats }: { stats: GitHubStats }) {
  return (
    <Section
      id="open-source"
      eyebrow="Open source"
      title={
        <>
          Code, <span className="text-gradient">in the open</span>.
        </>
      }
      description="Repositories maintained with care — libraries, tools, and experiments released for anyone to use, learn from, and improve."
    >
      <Stagger stagger={0.1}>
        <StaggerItem>
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.25fr_1fr]">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">GitHub activity</h3>
                    <p className="text-xs text-muted-foreground">
                      @{site.githubUser}
                    </p>
                  </div>
                </div>
                <Badge tone={stats.lastUpdated === "Live" ? "success" : "neutral"}>
                  {stats.lastUpdated === "Live" ? "Live data" : "Cached"}
                </Badge>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {statCards.map((stat) => (
                  <div
                    key={stat.key}
                    className="rounded-xl border border-border bg-muted/50 p-4"
                  >
                    <p className="text-2xl font-semibold tracking-tight">
                      {stats[stat.key].toLocaleString()}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex-1 rounded-xl border border-border bg-background p-4">
                <ContributionGraph className="h-auto w-full" />
              </div>
            </div>

            <div className="flex h-full flex-col rounded-2xl border border-border bg-card shadow-soft">
              <div className="border-b border-border px-6 py-5 sm:px-7">
                <h3 className="text-sm font-semibold">Pinned repositories</h3>
              </div>
              <div className="flex-1 divide-y divide-border">
                {pinnedRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block px-6 py-5 transition-colors duration-200 hover:bg-muted/60 sm:px-7"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <GithubIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-sm font-medium">
                          {repo.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3.5 w-3.5" />
                          {repo.stars}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <CodeFork className="h-3.5 w-3.5" />
                          {repo.forks}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {repo.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {repo.language}
                      </span>
                      <span
                        className={cn(
                          "ml-auto inline-flex items-center gap-0.5 text-xs font-medium transition-colors",
                          "group-hover:text-foreground",
                        )}
                      >
                        View
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="mt-8 flex justify-center">
            <Button href={site.githubUrl} external variant="outline">
              <GithubIcon className="h-4 w-4" />
              View GitHub profile
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
