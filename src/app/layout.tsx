import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevStudio - Full-Stack Developer | AI-Powered",
  description: "Web apps, AI automation, Figma plugins. Ship faster with AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}