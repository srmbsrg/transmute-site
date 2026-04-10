import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foundry Familiars — A family of tools for the AI-native enterprise",
  description:
    "Foundry Familiars is a product family from Spooky Software Syndicate. Tools for enterprise AI readiness, certification, and .NET integration.",
  keywords: [
    "AI tools",
    "enterprise AI",
    "AI readiness",
    "AI certification",
    ".NET AI integration",
    "Foundry Familiars",
    "Spooky Software Syndicate",
  ],
  openGraph: {
    title: "Foundry Familiars — A family of tools for the AI-native enterprise",
    description:
      "Foundry Familiars is a product family from Spooky Software Syndicate.",
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
