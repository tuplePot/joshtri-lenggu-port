"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bars, Xmark } from "@gravity-ui/icons";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/site";
import { BrandMark } from "@/components/ui/brand-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { GithubIcon } from "@/components/ui/github-icon";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled || open
          ? "border-b-2 border-foreground bg-background"
          : "border-b-2 border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          {/* <BrandMark /> */}
          <span className="text-sm font-extrabold uppercase tracking-[-0.02em]">
            {site.brand}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="group/nav flex items-center gap-1.5 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              <span className="text-[10px] text-muted-foreground/60 group-hover/nav:text-accent">
                {/* {String(i + 1).padStart(2, "0")} */}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center gap-2 border-2 border-foreground px-4 font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-150 hover:bg-foreground hover:text-background sm:inline-flex"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="hidden md:inline">GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border-2 border-foreground transition-colors hover:bg-foreground hover:text-background lg:hidden"
          >
            {open ? <Xmark className="h-5 w-5" /> : <Bars className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t-2 border-foreground bg-background lg:hidden"
          >
            <div className="mx-auto w-full max-w-6xl px-5 pb-4 pt-2 sm:px-8 lg:px-10">
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[var(--hairline)] py-3.5 font-mono text-sm font-bold uppercase tracking-[0.08em] transition-colors last:border-b-0 hover:text-accent"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
