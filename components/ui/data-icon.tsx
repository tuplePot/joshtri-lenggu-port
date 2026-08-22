import type { SVGProps } from "react";
import {
  Fingerprint,
  PencilToLine,
  ShieldKeyhole,
  Sparkles,
  GraduationCap,
  Briefcase,
  Terminal,
  Rocket,
  Envelope,
  BroadcastSignal,
} from "@gravity-ui/icons";
import { GithubIcon } from "@/components/ui/github-icon";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.24 8h4.52V24H.24V8zM8.5 8h4.33v2.19h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.46 1.66-2.46 3.38V24H8.5V8z" />
    </svg>
  );
}

type GravityIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

const iconMap: Record<string, GravityIcon> = {
  fingerprint: Fingerprint,
  "pen-line": PencilToLine,
  "lock-keyhole": ShieldKeyhole,
  vault: ShieldKeyhole,
  sparkles: Sparkles,
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  terminal: Terminal,
  rocket: Rocket,
  email: Envelope,
  blog: BroadcastSignal,
};

export function DataIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  if (name === "github") {
    return <GithubIcon className={className} />;
  }

  if (name === "linkedin") {
    return <LinkedinIcon className={className} />;
  }

  const Icon = iconMap[name];
  if (!Icon) return null;

  return <Icon className={className} aria-hidden />;
}
