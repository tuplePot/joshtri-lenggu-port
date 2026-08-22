import { ArrowUpRight } from "@gravity-ui/icons";
import { cn } from "@/lib/utils";
import { products, type Product } from "@/lib/data/products";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { DataIcon } from "@/components/ui/data-icon";
import { Badge } from "@/components/ui/badge";

const statusTone = {
  live: "success",
  developing: "warning",
  soon: "neutral",
} as const;

function ProductCard({ product, n }: { product: Product; n: number }) {
  const external = product.href.startsWith("http");
  const isLink = product.href !== "#products" && product.href !== "#ecosystem";

  return (
    <a
      href={product.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group relative flex h-full flex-col border-2 border-foreground bg-card p-6 transition-all duration-150 sm:p-7",
        isLink
          ? "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-accent"
          : "cursor-default",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-2xl font-bold tabular-nums leading-none text-muted-foreground">
          {String(n).padStart(2, "0")}
        </span>
        <Badge tone={statusTone[product.status]} dot={product.status !== "soon"}>
          {product.statusLabel}
        </Badge>
      </div>

      <div className="mt-8 flex h-12 w-12 items-center justify-center border-2 border-foreground">
        <DataIcon name={product.icon} className="h-6 w-6" />
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-extrabold uppercase tracking-[-0.02em]">
          {product.name}
        </h3>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {product.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
          {product.description}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-2 pt-4 font-mono text-xs font-bold uppercase tracking-[0.14em]">
        <span className="border-t-2 border-foreground pt-1">
          {isLink ? "Open" : "Coming soon"}
        </span>
        {isLink ? (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        ) : null}
      </div>
    </a>
  );
}

export function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      eyebrow="Ecosystem"
      // index="N° 03"
      title={
        <>
          One roof, <span className="text-accent">three doors</span>.
        </>
      }
      description="Everything I build and write, indexed in one place. Each door leads off this page to where the real work lives."
    >
      <Stagger
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.07}
      >
        {products.map((product, i) => (
          <StaggerItem key={product.id} className="h-full">
            <ProductCard product={product} n={i + 1} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
