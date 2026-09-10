export const site = {
  name: "Joshtri Lenggu",
  brand: "joshtri Lenggu",
  handle: "@joshtri",
  domain: "joshtrilenggu.com",
  url: "https://joshtrilenggu.com",
  portfolioUrl: "https://portfolio.joshtrilenggu.com",
  blogUrl: "https://blog.joshtrilenggu.com",
  githubUrl: "https://github.com/Joshtri",
  githubUser: "Joshtri",
  linkedinUrl: "https://id.linkedin.com/in/arpakhsad-joshtri-sugiatma-lenggu-771242201",
  email: "joshtrilenggu@proton.me",
  tagline: "Building software, sharing knowledge, creating products.",
  description:
    "The personal technology ecosystem of Joshtri Lenggu — full-stack web development, freelance builds (desktop included), technical writing, and open source.",
} as const;

export const navLinks = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials = [
  {
    label: "GitHub",
    href: site.githubUrl,
    handle: "@Joshtri",
    description: "Repositories, libraries, and experiments.",
  },
  {
    label: "LinkedIn",
    href: site.linkedinUrl,
    handle: "/in/joshtrilenggu",
    description: "Experience and professional profile.",
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    handle: site.email,
    description: "Ideas, collaborations, and conversations.",
  },
  {
    label: "Blog",
    href: site.blogUrl,
    handle: "blog.joshtrilenggu.com",
    description: "Essays on programming and architecture.",
  },
] as const;
