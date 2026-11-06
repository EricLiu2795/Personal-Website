import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ericliu2795.github.io"),
  title: "刘峻锟 — 软件工程师",
  description: "刘峻锟是约翰斯·霍普金斯大学计算机与应用数学本科生，关注可靠软件、AI 系统与安全研究。",
  alternates: {
    canonical: "/Personal-Website/zh/",
    languages: { en: "/Personal-Website/", "zh-CN": "/Personal-Website/zh/" },
  },
  openGraph: {
    title: "刘峻锟 — 软件工程师",
    description: "可靠软件、AI 系统与安全研究。",
    url: "/Personal-Website/zh/",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/Personal-Website/og.png", width: 1200, height: 630, alt: "刘峻锟" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
