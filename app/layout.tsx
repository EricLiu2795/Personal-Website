import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junkun Liu — Reliable AI systems engineer",
  description:
    "Junkun Liu is a Johns Hopkins undergraduate building reliable AI agents, agent harnesses, and evaluation systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
