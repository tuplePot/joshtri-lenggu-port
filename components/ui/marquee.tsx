"use client";

import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  reverse = false,
  speed = 40,
}: {
  items: ReactNode[];
  className?: string;
  reverse?: boolean;
  speed?: number;
}) {
  const row = (key: string) => (
    <div key={key} aria-hidden={key === "clone"} className="flex shrink-0 items-center gap-3 pr-3">
      {items.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </div>
  );

  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row("a")}
        {row("clone")}
      </div>
    </div>
  );
}
