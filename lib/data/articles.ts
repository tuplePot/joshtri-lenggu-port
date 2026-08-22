import { site } from "@/lib/site";

export type Article = {
  title: string;
  description: string;
  href: string;
  date: string;
  category: string;
  readingTime: string;
};

export const fallbackArticles: Article[] = [
  {
    title: "Designing systems that outlive their founders",
    description:
      "Software outlives the hands that shape it. A practical framework for building architecture that survives team changes, rewrites, and time itself.",
    href: `${site.blogUrl}/posts/designing-systems-that-outlive-their-founders`,
    date: "2025-11-18",
    category: "Architecture",
    readingTime: "12 min read",
  },
  {
    title: "Why I write the slow kind of code",
    description:
      "Fast code gets shipped; deliberate code gets remembered. Notes on trade-offs, readability, and engineering for the long run.",
    href: `${site.blogUrl}/posts/why-i-write-the-slow-kind-of-code`,
    date: "2025-10-02",
    category: "Engineering",
    readingTime: "8 min read",
  },
  {
    title: "Local-first apps, local-first mindset",
    description:
      "What building a desktop productivity tool taught me about latency, ownership of data, and why the browser is not always the answer.",
    href: `${site.blogUrl}/posts/local-first-apps-local-first-mindset`,
    date: "2025-08-21",
    category: "Backend",
    readingTime: "10 min read",
  },
  {
    title: "Rust, Tauri, and the joy of small binaries",
    description:
      "Shipping a native app with a tiny footprint and a huge amount of confidence — lessons from building Vault with the modern Rust stack.",
    href: `${site.blogUrl}/posts/rust-tauri-and-the-joy-of-small-binaries`,
    date: "2025-06-14",
    category: "Programming",
    readingTime: "9 min read",
  },
  {
    title: "The AI that actually ships",
    description:
      "Beyond the demo: what separates production-grade AI features from prototypes — evaluation, cost, and honest expectations.",
    href: `${site.blogUrl}/posts/the-ai-that-actually-ships`,
    date: "2025-04-30",
    category: "AI",
    readingTime: "11 min read",
  },
  {
    title: "Server components, seen from the other side",
    description:
      "A frontend-engineer's tour of the server-first mental model — why moving rendering up the stack changes how you architect everything.",
    href: `${site.blogUrl}/posts/server-components-seen-from-the-other-side`,
    date: "2025-03-09",
    category: "Frontend",
    readingTime: "7 min read",
  },
];
