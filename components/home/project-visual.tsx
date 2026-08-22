import { cn } from "@/lib/utils";
import type { ProjectPattern } from "@/lib/data/projects";

function TerminalPattern() {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-foreground/[0.04] p-4">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
      </div>
      <div className="space-y-2 font-mono text-[10px] leading-none text-foreground/60">
        <p>
          <span className="text-emerald-500/80">$</span> bun run dev
        </p>
        <p className="w-3/4 rounded bg-foreground/10 px-2 py-1">Compiling...</p>
        <p className="w-2/3 rounded bg-foreground/10 px-2 py-1 text-foreground/70">
          ready in 42ms
        </p>
      </div>
    </div>
  );
}

function StackPattern() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-2xl bg-foreground/15 shadow-soft" />
        <div className="absolute left-6 h-12 w-12 rounded-xl bg-foreground/10 backdrop-blur" />
        <div className="absolute right-6 h-12 w-12 rounded-xl border border-border bg-card shadow-soft" />
      </div>
    </div>
  );
}

function GraphPattern() {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden>
      <g stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" fill="none">
        <path d="M25 75 L75 25 L125 60 L175 30" />
        <path d="M75 25 L100 80" />
        <path d="M125 60 L60 85" />
      </g>
      <circle cx="25" cy="75" r="5" className="fill-foreground/20" />
      <circle cx="100" cy="80" r="5" className="fill-foreground/20" />
      <circle cx="60" cy="85" r="5" className="fill-foreground/20" />
      <circle cx="75" cy="25" r="6" className="fill-foreground/80" />
      <circle cx="125" cy="60" r="6" className="fill-none stroke-foreground/50" strokeWidth="2" />
      <circle cx="175" cy="30" r="5" className="fill-foreground/80" />
    </svg>
  );
}

function ChatPattern() {
  return (
    <div className="flex h-full flex-col justify-end gap-2 p-4">
      <div className="self-end rounded-2xl rounded-br-sm bg-foreground/15 px-3 py-2 font-mono text-[10px] shadow-soft">
        How does the router work?
      </div>
      <div className="self-start max-w-[70%] rounded-2xl rounded-bl-sm border border-border bg-card px-3 py-2 font-mono text-[10px] text-foreground/70">
        Tracer finds grounded answers, fast.
      </div>
    </div>
  );
}

function CliPattern() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5 p-5 font-mono text-[11px]">
      <p className="text-foreground/40">forge init web-app</p>
      <p className="text-foreground/50">→ Created 24 files in 86ms</p>
      <p className="text-foreground/50">→ Dependencies installed</p>
      <p className="text-emerald-500/80">✓ Ready — start building</p>
    </div>
  );
}

function VaultPattern() {
  return (
    <div className="flex h-full items-center justify-center gap-3">
      <div className="flex h-24 w-40 flex-col justify-between rounded-xl border border-border bg-card p-3 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="h-2 w-8 rounded-full bg-foreground/10" />
        </div>
        <div className="space-y-1.5">
          <span className="block h-2 w-full rounded-full bg-foreground/15" />
          <span className="block h-2 w-3/4 rounded-full bg-foreground/10" />
          <span className="block h-2 w-1/2 rounded-full bg-foreground/10" />
        </div>
      </div>
      <div className="flex h-24 w-40 flex-col justify-between rounded-xl border border-border bg-card p-3 opacity-80 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          <span className="h-2 w-8 rounded-full bg-foreground/10" />
        </div>
        <div className="space-y-1.5">
          <span className="block h-2 w-full rounded-full bg-foreground/15" />
          <span className="block h-2 w-3/4 rounded-full bg-foreground/10" />
          <span className="block h-2 w-2/3 rounded-full bg-foreground/10" />
        </div>
      </div>
    </div>
  );
}

function OrbitPattern() {  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-20 w-20 rounded-full border border-border" />
      <div className="absolute h-32 w-32 rounded-full border border-border/60" />
      <div className="absolute h-44 w-44 rounded-full border border-border/30" />
      <div className="h-5 w-5 rounded-full bg-foreground/80 shadow-soft" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-y-16 translate-x-16 rounded-full bg-foreground/40" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 translate-x-6 translate-y-20 rounded-full bg-foreground/30" />
    </div>
  );
}

export function ProjectVisual({
  pattern,
  gradient,
  className,
}: {
  pattern: ProjectPattern;
  gradient: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex aspect-[16/10] items-stretch overflow-hidden rounded-t-2xl border-b border-border bg-gradient-to-br from-foreground/[0.03] to-transparent p-3 text-foreground",
        className,
      )}
    >
      {pattern === "terminal" ? <TerminalPattern /> : null}
      {pattern === "stack" ? <StackPattern /> : null}
      {pattern === "graph" ? <GraphPattern /> : null}
      {pattern === "chat" ? <ChatPattern /> : null}
      {pattern === "cli" ? <CliPattern /> : null}
      {pattern === "orbit" ? <OrbitPattern /> : null}
      {pattern === "vault" ? <VaultPattern /> : null}

      <div
        className={cn(
          "pointer-events-none absolute right-4 top-4 h-10 w-10 rounded-full bg-gradient-to-br opacity-70 blur-[1px]",
          gradient,
        )}
      />
    </div>
  );
}
