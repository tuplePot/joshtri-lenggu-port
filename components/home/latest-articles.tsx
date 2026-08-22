import { ArrowUpRight, Clock } from "@gravity-ui/icons";
import type { Article } from "@/lib/data/articles";
import { site } from "@/lib/site";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
      <span className="font-medium text-foreground/80">{article.category}</span>
      <span aria-hidden className="text-muted-foreground/50">·</span>
      <time dateTime={article.date}>
        {article.date ? formatDate(article.date) : "Recent"}
      </time>
      <span aria-hidden className="text-muted-foreground/50">·</span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-3 w-3" />
        {article.readingTime}
      </span>
    </div>
  );
}

export function LatestArticles({ articles }: { articles: Article[] }) {
  const [featured, ...rest] = articles;

  return (
    <Section
      id="articles"
      eyebrow="Latest articles"
      title={
        <>
          Writing, <span className="text-gradient">in public</span>.
        </>
      }
      description="Essays and deep dives on programming, architecture, and the craft of software — published on the blog and mirrored here."
    >
      <Stagger className="grid gap-6" stagger={0.12}>
        {featured ? (
          <StaggerItem>
            <a
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ring/30 hover:shadow-lift sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-purple-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient">
                  Featured article
                </span>
                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                  {featured.description}
                </p>
                <div className="mt-6">
                  <ArticleMeta article={featured} />
                </div>
                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read article
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </span>
              </div>
            </a>
          </StaggerItem>
        ) : null}

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          {rest.map((article, index) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group flex items-center gap-5 px-6 py-6 transition-colors duration-200 hover:bg-muted/60 sm:gap-8 sm:px-8",
                index !== rest.length - 1 && "border-b border-border",
              )}
            >
              <span className="hidden font-mono text-sm text-muted-foreground/50 sm:block">
                {String(index + 2).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <ArticleMeta article={article} />
                </div>
                <h3 className="mt-2 truncate text-lg font-semibold tracking-tight transition-colors duration-200 group-hover:text-gradient sm:text-xl">
                  {article.title}
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </div>

        <StaggerItem>
          <div className="flex justify-center pt-2">
            <Reveal delay={0.1}>
              <Button href={site.blogUrl} external variant="outline">
                Visit the blog
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
