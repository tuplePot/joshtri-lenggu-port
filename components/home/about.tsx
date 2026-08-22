import { site } from "@/lib/site";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  { label: "Day job", value: "Web developer · BE + FE" },
  { label: "Freelance", value: "Web · Mobile · Desktop" },
  { label: "Focus", value: "TypeScript · Rust · Web" },
  { label: "Based in", value: "Jakarta" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      // index="N° 02"
      title={
        <>
          Software, <span className="text-accent">written down</span>.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90 text-pretty">
            <p>
              I&apos;m Joshtri — a web developer working across backend and
              frontend, and a writer. I like building things that are simple on
              the outside and honest on the inside, then writing about what I
              learned along the way.
            </p>
            <p className="text-muted-foreground">
              My day job is web development, but freelance I&apos;ll build just
              about anything — desktop apps included. The rest lives across open
              source repositories and a blog where I think out loud about
              architecture and craft. This page is just the front door — the
              detailed work sits on the{" "}
              <a
                href={site.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-accent-foreground hover:no-underline"
              >
                portfolio
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="border-t-2 border-foreground">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--hairline)] py-4"
              >
                <dt className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-right font-semibold tracking-tight">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
