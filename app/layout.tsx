import type { Metadata, Viewport } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { Cursor } from "@/components/ui/cursor";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Joshtri Lenggu",
    "web developer",
    "backend developer",
    "frontend developer",
    "full-stack developer",
    "freelance developer",
    "desktop apps",
    "open source",
    "technical writing",
    "Rust",
    "TypeScript",
    "Next.js",
    "Tauri",
  ],
  creator: site.name,
  publisher: site.name,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: site.url },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  category: "technology",
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    creator: site.handle,
    site: site.handle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#100f0c" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`}
        </Script>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                name: site.name,
                url: site.url,
                description: site.description,
                inLanguage: "en-US",
                author: { "@id": `${site.url}/#person` },
              },
              {
                "@type": "Person",
                "@id": `${site.url}/#person`,
                name: site.name,
                url: site.url,
                email: site.email,
                jobTitle: "Full-Stack Web Developer",
                address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
                sameAs: [site.githubUrl, site.linkedinUrl, site.blogUrl, site.portfolioUrl],
              },
            ],
          }}
        />

        <Cursor />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
