import { generateContributions, type ContributionLevel } from "@/lib/data/open-source";

const LEVEL_COLORS: Record<ContributionLevel, string> = {
  0: "color-mix(in srgb, var(--foreground) 7%, transparent)",
  1: "rgb(99 102 241 / 0.35)",
  2: "rgb(99 102 241 / 0.55)",
  3: "rgb(99 102 241 / 0.75)",
  4: "#6366f1",
};

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_COLUMNS = [0, 4, 9, 13, 17, 22, 26, 30, 35, 39, 44, 48];
const DAY_LABELS = ["Mon", "Wed", "Fri"];
const DAY_ROWS = [1, 3, 5];

const CELL = 11;
const GAP = 3;
const PAD_X = 36;
const PAD_TOP = 18;

export function ContributionGraph({
  seed = 2025,
  className,
}: {
  seed?: number;
  className?: string;
}) {
  const grid = generateContributions(seed);
  const width = PAD_X + 52 * (CELL + GAP);
  const height = PAD_TOP + 7 * (CELL + GAP) + 8;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="GitHub contribution graph, most recent year"
    >
      {MONTH_LABELS.map((label, index) => (
        <text
          key={label}
          x={PAD_X + MONTH_COLUMNS[index] * (CELL + GAP)}
          y={12}
          fontSize="10"
          fill="var(--muted-foreground)"
          opacity="0.85"
        >
          {label}
        </text>
      ))}

      {DAY_LABELS.map((label, index) => (
        <text
          key={label}
          x={PAD_X - 8}
          y={PAD_TOP + DAY_ROWS[index] * (CELL + GAP) + 8}
          fontSize="10"
          textAnchor="end"
          fill="var(--muted-foreground)"
          opacity="0.85"
        >
          {label}
        </text>
      ))}

      {grid.map((week, weekIndex) =>
        week.map((level, dayIndex) => (
          <rect
            key={`${weekIndex}-${dayIndex}`}
            x={PAD_X + weekIndex * (CELL + GAP)}
            y={PAD_TOP + dayIndex * (CELL + GAP)}
            width={CELL}
            height={CELL}
            rx={3}
            fill={LEVEL_COLORS[level]}
          />
        )),
      )}
    </svg>
  );
}
