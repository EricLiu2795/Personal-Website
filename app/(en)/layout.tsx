import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ericliu2795.github.io"),
  title: "Junkun Liu — Software engineer",
  description: "Junkun Liu is a CS and Applied Math student at Johns Hopkins working on reliable software, AI systems, and security research.",
  alternates: {
    canonical: "/Personal-Website/",
    languages: { en: "/Personal-Website/", "zh-CN": "/Personal-Website/zh/" },
  },
  openGraph: {
    title: "Junkun Liu — Software engineer",
    description: "Reliable software, AI systems, and security research.",
    url: "/Personal-Website/",
    type: "website",
    locale: "en_US",
    images: [{ url: "/Personal-Website/og.png", width: 1200, height: 630, alt: "Junkun Liu" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
