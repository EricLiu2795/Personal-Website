import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ericliu2795.github.io"),
  title: "刘峻锟 — 软件工程师",
  description: "刘峻锟是一名软件工程师，专注于 AI 赋能的软件、系统设计与研究。",
  alternates: {
    canonical: "/Personal-Website/zh/",
    languages: { en: "/Personal-Website/", "zh-CN": "/Personal-Website/zh/" },
  },
  openGraph: {
    title: "刘峻锟 — 软件工程师",
    description: "AI 赋能的软件、系统设计与研究。",
    url: "/Personal-Website/zh/",
    type: "website",
    locale: "zh_CN",
  },
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
