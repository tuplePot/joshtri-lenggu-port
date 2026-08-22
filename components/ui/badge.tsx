import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "success" | "warning" | "accent";

const tones: Record<Tone, string> = {
  neutral: "border-foreground/40 text-muted-foreground",
  success: "border-foreground/40 text-foreground",
  warning: "border-accent text-accent",
  accent: "border-accent bg-accent text-accent-foreground",
};

const dotTones: Record<Tone, string> = {
  neutral: "bg-muted-foreground",
  success: "bg-[#1f9d55] dark:bg-[#38c172]",
  warning: "bg-accent",
  accent: "bg-accent-foreground",
};

export type BadgeProps = {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  dot?: boolean;
  dotClass?: string;
};

export function Badge({
  tone = "neutral",
  className,
  children,
  dot = false,
  dotClass,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em]",
        tones[tone],
        className,
      )}
    >
      {dot ? (
        <span
          aria-hidden
          className={cn("h-1.5 w-1.5", dotTones[tone], dotClass)}
        />
      ) : null}
      {children}
    </span>
  );
}
