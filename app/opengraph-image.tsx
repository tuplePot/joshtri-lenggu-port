import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a0a0f 0%, #111827 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              fontSize: 26,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            JT
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.5 }}>
            {site.brand}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>
            Building software,
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>
            sharing knowledge,
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#a5b4fc",
            }}
          >
            creating products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#9ca3af",
          }}
        >
          <span>{site.domain}</span>
          <span>Full-Stack Developer · Jakarta</span>
        </div>
      </div>
    ),
    size,
  );
}
