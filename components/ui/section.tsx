import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function Kicker({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-foreground",
        className,
      )}
    >
      <span aria-hidden className="h-2.5 w-2.5 shrink-0 bg-accent" />
      {children}
    </span>
  );
}

export function Section({
  id,
  className,
  contentClassName,
  eyebrow,
  index,
  title,
  description,
  align = "left",
  children,
}: {
  id?: string;
  className?: string;
  contentClassName?: string;
  eyebrow?: React.ReactNode;
  index?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  children: React.ReactNode;
}) {
  const heading =
    title || description || eyebrow ? (
      <div
        className={cn(
          "mb-14 border-t-2 border-foreground pt-6 sm:mb-20",
          align === "center" && "text-center",
        )}
      >
        {eyebrow ? (
          <Reveal>
            <div
              className={cn(
                "flex items-center gap-4",
                align === "center" && "justify-center",
              )}
            >
              <Kicker>{eyebrow}</Kicker>
              {index ? (
                <span className="font-mono text-xs font-bold tabular-nums text-muted-foreground">
                  {index}
                </span>
              ) : null}
            </div>
          </Reveal>
        ) : null}
        {title ? (
          <Reveal delay={0.05}>
            <h2
              className={cn(
                "mt-6 font-display text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-balance sm:text-6xl",
                align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl",
              )}
            >
              {title}
            </h2>
          </Reveal>
        ) : null}
        {description ? (
          <Reveal delay={0.1}>
            <p
              className={cn(
                "mt-6 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg",
                align === "center" ? "mx-auto max-w-xl" : "max-w-xl",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    ) : null;

  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10",
          contentClassName,
        )}
      >
        {heading}
        {children}
      </div>
    </section>
  );
}
