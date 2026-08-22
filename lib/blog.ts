import { fallbackArticles, type Article } from "@/lib/data/articles";

const FEED_CANDIDATES = [
  "https://blog.joshtrilenggu.com/rss.xml",
  "https://blog.joshtrilenggu.com/feed.xml",
  "https://blog.joshtrilenggu.com/index.xml",
  "https://blog.joshtrilenggu.com/feed",
];

function stripTags(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function parseRss(xml: string): Article[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];

  return items
    .map((match) => {
      const block = match[1];
      const grab = (tag: string) =>
        block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1]?.trim() ?? "";
      const title = grab("title");
      const link = grab("link");
      const description = stripTags(grab("description") || grab("summary") || grab("content:encoded"));
      const date = grab("pubDate") || grab("date");
      const category = grab("category");

      if (!title || !link) return null;

      return {
        title,
        description: description.slice(0, 220) || "Read more on the blog.",
        href: link,
        date,
        category: category || "Programming",
        readingTime: "5 min read",
      };
    })
    .filter((article): article is Article => article !== null);
}

export async function getLatestArticles(limit = 6): Promise<Article[]> {
  for (const feed of FEED_CANDIDATES) {
    try {
      const response = await fetch(feed, {
        headers: { "User-Agent": "joshtri-ecosystem/1.0" },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(4000),
      });

      if (!response.ok) continue;

      const xml = await response.text();
      const parsed = parseRss(xml);

      if (parsed.length > 0) {
        return parsed.slice(0, limit);
      }
    } catch {
      // Try the next candidate feed.
    }
  }

  return fallbackArticles.slice(0, limit);
}
