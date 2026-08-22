"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { cn } from "@/lib/utils";
import { useDarkMode, setDarkMode } from "@/lib/theme";

export function ThemeToggle({ className }: { className?: string }) {
  const dark = useDarkMode();

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative inline-flex h-9 w-9 cursor-pointer items-center justify-center border-2 border-foreground text-foreground transition-colors duration-150 hover:bg-foreground hover:text-background",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </button>
  );
}
