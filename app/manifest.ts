import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: "joshtri",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f2efe6",
    theme_color: "#f2efe6",
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
    ],
  };
}
