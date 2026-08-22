import { ArrowUpRight, Envelope } from "@gravity-ui/icons";
import { site, socials } from "@/lib/site";
import { Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { DataIcon } from "@/components/ui/data-icon";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <Section id="contact" className="scroll-mt-20" contentClassName="!max-w-5xl">
      <Reveal>
        <div className="border-2 border-foreground bg-card">
          <div className="flex items-center justify-between border-b-2 border-foreground px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] sm:px-10">
            <span className="flex items-center gap-2.5">
              <span aria-hidden className="h-2.5 w-2.5 bg-accent" />
              Contact
            </span>
            {/* <span className="text-muted-foreground">N&deg; 04</span> */}
          </div>

          <div className="px-6 py-14 sm:px-10 sm:py-20">
            <h2 className="max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-balance sm:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-accent">worth keeping</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              Have an idea, a collaboration, or a question about the ecosystem?
              The inbox is open.
            </p>

            <div className="mt-9">
              <Button href={`mailto:${site.email}`} size="lg">
                <Envelope className="h-4 w-4" />
                {site.email}
              </Button>
            </div>
          </div>

          <Stagger
            className="grid border-t-2 border-foreground sm:grid-cols-2"
            stagger={0.07}
          >
            {socials.map((social, i) => (
              <StaggerItem key={social.label}>
                <a
                  href={social.href}
                  {...(social.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className={cnRow(i)}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-foreground transition-colors duration-150 group-hover:bg-foreground group-hover:text-background">
                    <DataIcon
                      name={social.label.toLowerCase()}
                      className="h-5 w-5"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold uppercase tracking-[0.06em]">
                      {social.label}
                    </span>
                    <span className="block truncate font-mono text-xs text-muted-foreground">
                      {social.handle}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>
    </Section>
  );
}

function cnRow(i: number): string {
  const base =
    "group flex items-center gap-4 px-6 py-5 transition-colors duration-150 hover:bg-muted sm:px-10";
  // Left column (0, 2) gets a vertical divider on 2-col layouts.
  const rightBorder = i % 2 === 0 ? "sm:border-r-2 sm:border-foreground" : "";
  // Horizontal dividers: every item after the first on mobile; only the
  // second row (2, 3) on 2-col layouts.
  const topBorder =
    i === 0
      ? ""
      : i === 1
        ? "border-t-2 border-foreground sm:border-t-0"
        : "border-t-2 border-foreground";
  return [base, rightBorder, topBorder].filter(Boolean).join(" ");
}
