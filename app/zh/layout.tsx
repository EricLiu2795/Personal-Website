import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "刘峻锟 — 可靠 AI Agent 与系统工程",
  description: "刘峻锟，约翰斯·霍普金斯大学本科生，专注于可靠 AI Agent、Agent Harness、RAG 与评估系统。",
};

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
