import * as React from "react";
import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hoverable?: boolean;
};

export function Card({ className, hoverable, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "border-2 border-foreground bg-card",
        hoverable &&
          "transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
