import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevStudio - 全栈开发者 | AI 驱动开发",
  description: "Web 应用开发、AI 自动化、Figma 插件定制。用 AI 提效，更快交付。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}