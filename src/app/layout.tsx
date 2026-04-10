import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transmute — AI Integration for .NET Codebases",
  description:
    "Add AI capabilities to your existing .NET codebase. No rewrite. Transmute analyzes your repo, generates a blueprint for approval, then delivers compile-verified PRs that match your patterns.",
  keywords: [
    "AI integration",
    ".NET",
    "C#",
    "enterprise AI",
    "code generation",
    "managed service",
  ],
  openGraph: {
    title: "Transmute — AI Integration for .NET Codebases",
    description:
      "Add AI capabilities to your existing .NET codebase. No rewrite required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0e17] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
