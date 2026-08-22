"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "@gravity-ui/icons";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const ticker = [
  "BACKEND DEVELOPER",
  "FRONTEND DEVELOPER",
  "DESKTOP APPS",
  "FREELANCE BUILDER",
  "OPEN SOURCE",
  "TECHNICAL WRITER",
  "BASED IN JAKARTA",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-foreground pt-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-stretch gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center py-14 lg:py-20 lg:pr-12"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-foreground"
            >
              <span aria-hidden className="h-2.5 w-2.5 bg-accent" />
              Full-stack web developer
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-7 font-display text-6xl font-extrabold uppercase leading-[0.86] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            >
              Joshtri
              <br />
              Lenggu
              <span aria-hidden className="ml-2 inline-block h-4 w-4 bg-accent align-baseline sm:h-5 sm:w-5" />
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground text-pretty"
            >
              By day I build web apps — backend and frontend. On the side I
              freelance and build just about anything, desktop apps included,
              then write about the craft. This is the front door to it all.
            </motion.p>

            <motion.div variants={item} className="mt-9">
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-3 border-b-2 border-foreground pb-1 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                Explore the ecosystem
                <ArrowDown className="h-4 w-4 transition-transform duration-150 group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="relative flex items-center justify-center py-10 lg:py-16 lg:pl-12"
          >
            <figure className="relative w-full max-w-sm">
              <div className="border-2 border-b-0 border-foreground bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/my-image.jpeg"
                  alt="Joshtri Lenggu"
                  className="aspect-[4/5] w-full object-cover grayscale transition-[filter] duration-300 hover:grayscale-0"
                />
              </div>
              <figcaption className="flex items-center justify-between border-2 border-foreground bg-foreground px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-background">
                <span></span>
                <span className="text-background/60">01 / 01</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>

      <div className="border-t-2 border-foreground bg-foreground text-background">
        <div className="mask-fade-x overflow-hidden py-2.5">
          <div
            className="flex w-max animate-marquee"
            style={{ animationDuration: "28s" }}
          >
            {[0, 1].map((rep) => (
              <div
                key={rep}
                aria-hidden={rep === 1}
                className="flex shrink-0 items-center pr-6"
              >
                {ticker.map((word) => (
                  <span
                    key={`${rep}-${word}`}
                    className="flex items-center gap-6 pr-6 font-mono text-xs font-bold uppercase tracking-[0.2em]"
                  >
                    {word}
                    <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
