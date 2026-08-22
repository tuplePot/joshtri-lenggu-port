"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/lib/data/timeline";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { DataIcon } from "@/components/ui/data-icon";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (reducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 75%",
            scrub: 0.5,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-timeline-item]").forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 88%" },
          },
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <Section
      id="timeline"
      className="scroll-mt-20"
      eyebrow="Timeline"
      title={
        <>
          The journey <span className="text-gradient">so far</span>.
        </>
      }
      description="From a student learning to code to building a full ecosystem — every phase left something behind."
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute bottom-2 left-5 top-2 w-px bg-border"
        />
        <div
          ref={lineRef}
          aria-hidden
          className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-indigo-500 via-blue-500 to-purple-500"
          style={reducedMotion ? { transform: "scaleY(1)" } : { transform: "scaleY(0)" }}
        />

        <ol className="space-y-8 sm:space-y-10">
          {timeline.map((period) => {
            const isCurrent = period.current;
            return (
              <li
                key={period.id}
                data-timeline-item
                className="relative pl-16 sm:pl-24"
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border shadow-soft",
                    isCurrent
                      ? "border-transparent bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 text-white"
                      : "border-border bg-card text-foreground",
                  )}
                >
                  {isCurrent ? (
                    <span
                      aria-hidden
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-30"
                    />
                  ) : null}
                  <DataIcon name={period.icon} className="relative h-4.5 w-4.5" />
                </span>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    <span className="font-mono text-xs text-muted-foreground">
                      {period.period}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {period.company}
                    </span>
                    {isCurrent ? (
                      <Badge tone="accent" dot>
                        Current
                      </Badge>
                    ) : null}
                  </div>

                  <h3
                    className={cn(
                      "mt-2.5 text-xl font-semibold tracking-tight",
                      isCurrent && "text-gradient",
                    )}
                  >
                    {period.role}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {period.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {period.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-muted/60 px-2 py-1 font-mono text-[11px] text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
