import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ericliu2795.github.io"),
  title: "Junkun Liu — Software engineer",
  description: "Junkun Liu is a software engineer working on AI-enabled software, systems design, and research.",
  alternates: {
    canonical: "/Personal-Website/",
    languages: { en: "/Personal-Website/", "zh-CN": "/Personal-Website/zh/" },
  },
  openGraph: {
    title: "Junkun Liu — Software engineer",
    description: "AI-enabled software, systems design, and research.",
    url: "/Personal-Website/",
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
