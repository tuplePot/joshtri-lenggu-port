import type { Metadata } from "next";
import { site } from "@/lib/site";
import { RedirectSplash } from "@/components/redirect/redirect-splash";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Joshtri Lenggu's portfolio — full-stack web apps, freelance builds, desktop apps with Tauri, and open-source projects.",
  alternates: { canonical: `${site.url}/portfolio` },
  openGraph: {
    type: "website",
    url: `${site.url}/portfolio`,
    siteName: site.name,
    title: `Portfolio · ${site.name}`,
    description:
      "Browse Joshtri Lenggu's portfolio — full-stack web apps, freelance builds, desktop apps with Tauri, and open-source projects.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Portfolio · ${site.name}`,
    description:
      "Browse Joshtri Lenggu's portfolio — full-stack web apps, freelance builds, desktop apps with Tauri, and open-source projects.",
    creator: site.handle,
    site: site.handle,
  },
};

export default function PortfolioPage() {
  return <RedirectSplash destination={site.portfolioUrl} />;
}
