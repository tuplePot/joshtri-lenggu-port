import { site } from "@/lib/site";

export type ProductStatus = "live" | "developing" | "soon";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  href: string;
  icon: string;
  glyph: string;
  gradient: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "portfolio",
    name: "Portfolio",
    tagline: "portfolio.joshtrilenggu.com",
    description:
      "Projects, tech stack, open source, and the full story behind the work — the complete case-study archive.",
    status: "live",
    statusLabel: "Live",
    href: site.portfolioUrl,
    icon: "fingerprint",
    glyph: "JT",
    gradient: "from-indigo-500/20 via-blue-500/15 to-purple-500/20",
  },
  {
    id: "blog",
    name: "Blog",
    tagline: "blog.joshtrilenggu.com",
    description:
      "Technical articles on programming, artificial intelligence, backend systems, frontend craft, and software architecture.",
    status: "live",
    statusLabel: "Live",
    href: site.blogUrl,
    icon: "pen-line",
    glyph: "B",
    gradient: "from-sky-500/20 via-blue-500/15 to-indigo-500/20",
  },
  {
    id: "open-source",
    name: "Open Source",
    tagline: "github.com/joshtrilenggu",
    description:
      "Repositories, libraries, and experiments released into the open — built in public, maintained with care.",
    status: "live",
    statusLabel: "Live",
    href: site.githubUrl,
    icon: "github",
    glyph: "OS",
    gradient: "from-slate-500/20 via-zinc-500/15 to-neutral-500/20",
  },
];
