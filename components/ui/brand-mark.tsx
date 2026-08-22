import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  textClassName,
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground text-[13px] font-extrabold text-background",
        className,
      )}
    >
      <span className={cn("tracking-[-0.04em]", textClassName)}>JT</span>
    </span>
  );
}
