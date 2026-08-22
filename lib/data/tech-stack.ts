export type TechLanguage = {
  name: string;
  glyph: string;
  color: string;
};

export type TechTool = {
  name: string;
  glyph: string;
  icon?: string;
  color: string;
};

export const languages: TechLanguage[] = [
  { name: "Rust", glyph: "Rs", color: "#e57373" },
  { name: "TypeScript", glyph: "TS", color: "#60a5fa" },
  { name: "C#", glyph: "C#", color: "#a78bfa" },
  { name: "Go", glyph: "Go", color: "#22d3ee" },
];

export const tools: TechTool[] = [
  { name: "Next.js", glyph: "N", color: "#111827", icon: "next" },
  { name: "React", glyph: "R", color: "#38bdf8", icon: "react" },
  { name: "Bun", glyph: "B", color: "#fbbf24", icon: "bun" },
  { name: "Docker", glyph: "D", color: "#60a5fa", icon: "docker" },
  { name: "PostgreSQL", glyph: "Pg", color: "#38bdf8", icon: "database" },
  { name: "MongoDB", glyph: "M", color: "#4ade80", icon: "leaf" },
  { name: "Drizzle", glyph: "Dz", color: "#fb923c", icon: "droplets" },
  { name: "Prisma", glyph: "Pr", color: "#a5b4fc", icon: "database" },
  { name: "Tauri", glyph: "T", color: "#f87171", icon: "box" },
  { name: "Elysia", glyph: "El", color: "#facc15", icon: "zap" },
  { name: "ASP.NET", glyph: "A", color: "#818cf8", icon: "cloud" },
];
