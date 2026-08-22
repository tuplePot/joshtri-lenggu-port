import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "border-2 border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-accent-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard",
  outline:
    "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard",
  ghost:
    "border-2 border-transparent text-foreground hover:border-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-sm",
};

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  href: string;
  external?: boolean;
} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "children"
>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external = false,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group/button inline-flex select-none cursor-pointer items-center justify-center gap-2 font-semibold uppercase tracking-[0.08em] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
