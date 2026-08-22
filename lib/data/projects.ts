import { site } from "@/lib/site";

export type ProjectStatus =
  | "open-source"
  | "in-development"
  | "prototype"
  | "shipped";

export type ProjectPattern =
  | "terminal"
  | "stack"
  | "graph"
  | "chat"
  | "cli"
  | "orbit"
  | "vault";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  statusLabel: string;
  href: string;
  gradient: string;
  pattern: ProjectPattern;
  year: string;
};

export const projects: Project[] = [
  {
    id: "vault",
    name: "Vault",
    tagline: "Tasks and knowledge, unified",
    description:
      "A desktop productivity platform that merges task management with a networked knowledge base, engineered in Rust with a Tauri shell and a React frontend.",
    tags: ["Rust", "Tauri", "React", "SQLite"],
    status: "in-development",
    statusLabel: "In development",
    href: "#projects",
    gradient: "from-violet-500 to-indigo-600",
    pattern: "vault",
    year: "2025",
  },
  {
    id: "lenggu-ui",
    name: "lenggu-ui",
    tagline: "Accessible React components",
    description:
      "An open-source React component library focused on accessibility, predictable APIs, and a small runtime footprint.",
    tags: ["React", "TypeScript", "Radix", "CSS"],
    status: "open-source",
    statusLabel: "Open source",
    href: site.githubUrl,
    gradient: "from-indigo-500 to-blue-600",
    pattern: "stack",
    year: "2024",
  },
  {
    id: "elysia-stack",
    name: "elysia-stack",
    tagline: "Modern backend toolkit",
    description:
      "An opinionated, type-safe backend starter built on Elysia and Bun with Drizzle migrations and end-to-end typed contracts.",
    tags: ["Elysia", "Bun", "TypeScript", "Drizzle"],
    status: "open-source",
    statusLabel: "Open source",
    href: site.githubUrl,
    gradient: "from-blue-500 to-cyan-600",
    pattern: "terminal",
    year: "2024",
  },
  {
    id: "tracer",
    name: "Tracer",
    tagline: "Talk to your knowledge",
    description:
      "A RAG-powered chat interface that answers questions from a personal knowledge base, with grounded citations and vector search.",
    tags: ["AI", "TypeScript", "PostgreSQL", "pgvector"],
    status: "prototype",
    statusLabel: "Prototype",
    href: "#projects",
    gradient: "from-purple-500 to-fuchsia-600",
    pattern: "chat",
    year: "2025",
  },
  {
    id: "forge",
    name: "forge",
    tagline: "Project scaffolding, zero friction",
    description:
      "A blazing-fast CLI that scaffolds new projects from templates with sensible defaults — written in Go with zero runtime dependencies.",
    tags: ["Go", "CLI", "Templates"],
    status: "open-source",
    statusLabel: "Open source",
    href: site.githubUrl,
    gradient: "from-cyan-500 to-sky-600",
    pattern: "cli",
    year: "2023",
  },
  {
    id: "ecosystem",
    name: "Ecosystem Home",
    tagline: "This very website",
    description:
      "The central hub for every product in the ecosystem — a server-first, deeply animated homepage engineered for a perfect Lighthouse score.",
    tags: ["Next.js 16", "TypeScript", "Tailwind v4", "Motion"],
    status: "shipped",
    statusLabel: "Shipped",
    href: "/",
    gradient: "from-slate-500 to-zinc-700",
    pattern: "orbit",
    year: "2025",
  },
];
