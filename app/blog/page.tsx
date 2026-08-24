import type { Metadata } from "next";
import { site } from "@/lib/site";
import { RedirectSplash } from "@/components/redirect/redirect-splash";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read Joshtri Lenggu's technical writing — essays on full-stack development, software architecture, Rust, TypeScript, and the craft of building things.",
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    type: "website",
    url: `${site.url}/blog`,
    siteName: site.name,
    title: `Blog · ${site.name}`,
    description:
      "Read Joshtri Lenggu's technical writing — essays on full-stack development, software architecture, Rust, TypeScript, and the craft of building things.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog · ${site.name}`,
    description:
      "Read Joshtri Lenggu's technical writing — essays on full-stack development, software architecture, Rust, TypeScript, and the craft of building things.",
    creator: site.handle,
    site: site.handle,
  },
};

export default function BlogPage() {
  return <RedirectSplash destination={site.blogUrl} />;
}
