import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevStudio - Full-Stack Developer & AI Engineer",
  description: "Building modern web apps, AI tools, and Figma plugins that help businesses grow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
