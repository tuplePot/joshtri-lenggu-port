import { principles } from "@/lib/data/philosophy";
import { Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function Philosophy() {
  return (
    <Section
      eyebrow="Philosophy"
      title={
        <>
          How I think about{" "}
          <span className="text-gradient">software</span>.
        </>
      }
      description="Principles that guide every repository, every article, and every product decision."
    >
      <Stagger className="grid gap-5 sm:gap-6 md:grid-cols-3" stagger={0.12}>
        {principles.map((principle) => (
          <StaggerItem key={principle.index}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ring/30 hover:shadow-lift">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-purple-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="font-mono text-sm text-muted-foreground/60">
                {principle.index}
              </span>
              <h3 className="mt-8 font-display text-2xl italic tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                {principle.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.15} className="mt-14 text-center sm:mt-20">
        <p className="mx-auto max-w-2xl font-display text-2xl italic leading-snug text-balance text-foreground/90 sm:text-3xl">
          “Quality is not an act. It is a habit — built one deliberate commit at
          a time.”
        </p>
      </Reveal>
    </Section>
  );
}
