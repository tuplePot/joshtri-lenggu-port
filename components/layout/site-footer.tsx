import { ArrowUpRight } from "@gravity-ui/icons";
import { navLinks, site } from "@/lib/site";
import { products } from "@/lib/data/products";
import { socials } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/brand-mark";
import { GithubIcon } from "@/components/ui/github-icon";

type FooterLink = { label: string; href: string; external?: boolean };

type FooterColumn = { title: string; links: FooterLink[] };

const footerColumns: FooterColumn[] = [
  {
    title: "Index",
    links: navLinks.map((link) => ({ label: link.label, href: link.href })),
  },
  {
    title: "Products",
    links: products.map((product) => ({
      label: product.name,
      href: product.href,
      external: product.href.startsWith("http"),
    })),
  },
  {
    title: "Connect",
    links: socials.map((social) => ({
      label: social.label,
      href: social.href,
      external: true,
    })),
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t-2 border-foreground bg-background">
      <Container className="py-9 sm:py-11">
        <div className="grid gap-x-8 gap-y-10 border-b border-[var(--hairline)] pb-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="flex max-w-xs flex-col items-start gap-4">
            {/* <a href="#top" className="flex items-center gap-2.5">
              <BrandMark />
              <span className="text-sm font-extrabold uppercase tracking-[-0.02em]">
                {site.brand}
              </span>
            </a> */}
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-fit items-center gap-2 border-2 border-foreground px-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-150 hover:bg-foreground hover:text-background"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              {site.githubUser}
            </a>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-foreground">
                <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                {column.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors duration-150 hover:text-foreground"
                    >
                      {link.label}
                      {link.external ? (
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            Set in Archivo &amp; Space Mono
          </p>
        </div>
      </Container>
    </footer>
  );
}
