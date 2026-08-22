import { languages, tools } from "@/lib/data/tech-stack";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function Tile({
  glyph,
  name,
  color,
  large = false,
  index,
}: {
  glyph: string;
  name: string;
  color: string;
  large?: boolean;
  index: number;
}) {
  const duration = 5 + (index % 4) * 0.7;
  const delay = (index % 5) * -0.6;

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300",
        "hover:-translate-y-1 hover:border-ring/30 hover:shadow-lift",
        large ? "h-32" : "h-28",
      )}
      style={{ ["--tile-color" as string]: color }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120px circle at 50% 0%, color-mix(in srgb, var(--tile-color) 18%, transparent), transparent 70%)",
        }}
      />
      <span
        className={cn(
          "relative font-semibold tracking-tight transition-transform duration-300 group-hover:scale-110",
          large ? "text-4xl" : "text-3xl",
          "animate-float-soft",
        )}
        style={{ color, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
      >
        {glyph}
      </span>
      <span className="relative text-sm font-medium">{name}</span>
    </div>
  );
}

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Technology stack"
      title={
        <>
          Tools that <span className="text-gradient">shape the work</span>.
        </>
      }
      description="A pragmatic, ever-evolving toolbox — chosen for reliability, performance, and long-term maintainability."
    >
      <div className="space-y-12">
        <div>
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.07}>
            {languages.map((language, index) => (
              <StaggerItem key={language.name}>
                <Tile
                  glyph={language.glyph}
                  name={language.name}
                  color={language.color}
                  large
                  index={index}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <Stagger
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
            stagger={0.05}
          >
            {tools.map((tool, index) => (
              <StaggerItem key={tool.name}>
                <Tile
                  glyph={tool.glyph}
                  name={tool.name}
                  color={tool.color}
                  index={index}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
