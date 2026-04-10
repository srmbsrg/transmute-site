"use client";

import Link from "next/link";
import { useState } from "react";

type DomainScore = {
  score: number;
  weight?: number;
};

type RemediationItem = {
  priority?: string;
  severity?: string;
  description: string;
  domain?: string;
};

type ScanResult = {
  url?: string;
  score: number;
  domains?: {
    agentAccessibility?: DomainScore;
    agentSecurity?: DomainScore;
    agentSafety?: DomainScore;
    [key: string]: DomainScore | undefined;
  };
  remediationItems?: RemediationItem[];
  error?: string;
};

type ExposureLevel = "Critical" | "High" | "Moderate" | "Low";

function exposureLevel(score: number): ExposureLevel {
  if (score >= 80) return "Critical";
  if (score >= 60) return "High";
  if (score >= 30) return "Moderate";
  return "Low";
}

function exposureBadgeClasses(level: ExposureLevel): string {
  if (level === "Critical") return "bg-red-900/40 text-red-400 border-red-500/40";
  if (level === "High") return "bg-orange-900/30 text-orange-400 border-orange-500/30";
  if (level === "Moderate") return "bg-amber-900/30 text-amber-400 border-amber-700/30";
  return "bg-slate-800/60 text-slate-400 border-slate-600/30";
}

function exposureBarColor(score: number): string {
  if (score >= 80) return "bg-red-500";
  if (score >= 60) return "bg-orange-500";
  if (score >= 30) return "bg-amber-500";
  return "bg-slate-500";
}

function ScoreBar({ score, colorClass }: { score: number; colorClass: string }) {
  const clamped = Math.max(0, Math.min(100, score));
  return (
    <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${colorClass}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

const KNOWN_BOTS = [
  { name: "GPTBot", org: "OpenAI", risk: "Training" },
  { name: "ClaudeBot", org: "Anthropic", risk: "Training" },
  { name: "CCBot", org: "Common Crawl", risk: "Indexing" },
  { name: "PerplexityBot", org: "Perplexity AI", risk: "Retrieval" },
  { name: "GoogleBot", org: "Google", risk: "Indexing" },
  { name: "Applebot", org: "Apple", risk: "Training" },
];

export default function TheWardPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/the-ward/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? `Scan failed (${res.status})`);
      } else {
        setResult(data);
      }
    } catch {
      setError("Network error — check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const exposureScore = result?.score ?? 0;
  const level = exposureLevel(exposureScore);
  const barColor = exposureBarColor(exposureScore);

  const activeBots = result
    ? KNOWN_BOTS.filter((_, i) => {
        // Derive which bots are "likely active" based on score thresholds
        if (exposureScore >= 80) return true;
        if (exposureScore >= 60) return i < 4;
        if (exposureScore >= 30) return i < 2;
        return false;
      })
    : [];

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200">
      {/* Nav */}
      <nav className="border-b border-slate-800/60 bg-[#0a0e17]">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-400 transition-colors block mb-0.5"
            >
              ← Foundry Familiars
            </Link>
            <span className="text-xl font-bold tracking-tight text-white">
              Foundry Familiars
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              By Spooky Software Syndicate
            </p>
          </div>
          <a
            href="mailto:ghostfoundrysyndicate@outlook.com"
            className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            ghostfoundrysyndicate@outlook.com
          </a>
        </div>
      </nav>

      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-24 pb-16 px-6 grid-bg overflow-hidden">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[400px] w-[700px] rounded-full bg-red-600/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-block">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                The Ward
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
              Lock your site down.{" "}
              <span className="text-red-400">Keep the bots out.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Run a free exposure scan. Find out exactly which AI agents are
              reading your site — and get the kit to stop them.
            </p>
          </div>
        </section>

        {/* ─── Scanner Form ─── */}
        <section className="py-16 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 text-center">
              <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2">
                Free Exposure Scan
              </p>
              <p className="text-sm text-slate-500">
                No account required. Results in seconds.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yoursite.com"
                required
                disabled={loading}
                className="flex-1 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500/40 disabled:opacity-60 transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !url.trim()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-700 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 text-sm transition-colors whitespace-nowrap"
              >
                {loading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Scanning…
                  </>
                ) : (
                  "Scan for Exposure"
                )}
              </button>
            </form>

            {/* Error state */}
            {error && (
              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-900/10 px-5 py-4 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Results */}
            {result && (
              <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
                {/* Exposure score header */}
                <div className="px-7 py-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                      Agent Exposure Score
                    </p>
                    <div className="flex items-end gap-3">
                      <span className="text-6xl font-bold text-white leading-none">
                        {exposureScore}
                      </span>
                      <span className="text-2xl font-bold text-slate-400 mb-1">
                        / 100
                      </span>
                      <span className="text-sm text-slate-500 mb-2 ml-1">
                        Higher = more exposed
                      </span>
                    </div>
                    {result.url && (
                      <p className="mt-2 text-xs text-slate-500 font-mono truncate max-w-xs">
                        {result.url}
                      </p>
                    )}
                  </div>
                  <div>
                    <span
                      className={`inline-block rounded-full border px-4 py-1.5 text-sm font-semibold ${exposureBadgeClasses(level)}`}
                    >
                      {level} Exposure
                    </span>
                  </div>
                </div>

                {/* Exposure bar */}
                <div className="px-7 py-5 border-b border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      Exposure Level
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {exposureScore}/100
                    </span>
                  </div>
                  <ScoreBar score={exposureScore} colorClass={barColor} />
                  <div className="flex justify-between mt-1.5">
                    <span className="text-xs text-slate-600">Protected</span>
                    <span className="text-xs text-slate-600">Fully exposed</span>
                  </div>
                </div>

                {/* Active scrapers */}
                {activeBots.length > 0 && (
                  <div className="px-7 py-6 border-b border-slate-800">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
                      Agents Likely Reading Your Site
                    </p>
                    <div className="space-y-2">
                      {activeBots.map((bot) => (
                        <div
                          key={bot.name}
                          className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                            <span className="text-sm font-mono text-slate-300">
                              {bot.name}
                            </span>
                            <span className="text-xs text-slate-600">
                              {bot.org}
                            </span>
                          </div>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-900/30 text-orange-400 border border-orange-700/30">
                            {bot.risk}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What they're taking */}
                {result.remediationItems && result.remediationItems.length > 0 && (
                  <div className="px-7 py-6">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
                      Vulnerabilities Found
                    </p>
                    <ul className="space-y-3">
                      {result.remediationItems.slice(0, 8).map((item, i) => {
                        const priority = item.priority ?? item.severity ?? "medium";
                        const isHigh = priority === "high" || priority === "critical";
                        return (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <span
                              className={`mt-0.5 flex-shrink-0 text-xs font-mono font-bold px-1.5 py-0.5 rounded uppercase ${
                                isHigh
                                  ? "bg-red-900/30 text-red-400"
                                  : "bg-orange-900/20 text-orange-500"
                              }`}
                            >
                              {priority}
                            </span>
                            <span className="text-slate-400 leading-relaxed">
                              {item.description}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ─── Protection Pillars ─── */}
        <section className="py-20 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3">
                Protection
              </p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Three layers of defense
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto text-sm">
                The Ward deploys a layered approach — stopping bots before they
                scrape, detecting those that get through, and trapping those that
                won&apos;t quit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Crawler Blocking */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Crawler Blocking
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  robots.txt hardening and comprehensive deny lists for known AI
                  agents.
                </p>
                <ul className="space-y-1.5">
                  {["GPTBot", "ClaudeBot", "CCBot", "PerplexityBot", "Applebot", "OAI-SearchBot"].map((bot) => (
                    <li key={bot} className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <span className="text-red-500">✕</span> {bot}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Header Hardening */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Header Hardening
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Security headers that cut off fingerprinting, reduce referrer
                  leakage, and enforce rate limits.
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Content-Security-Policy",
                    "X-Robots-Tag",
                    "Referrer-Policy",
                    "Permissions-Policy",
                    "Rate limiting rules",
                  ].map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <span className="text-amber-500">+</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Honeypot & Detection */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8">
                <div className="text-3xl mb-4">🪤</div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Honeypot & Detection
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Hidden trap links catch bots that ignore robots.txt. Detection
                  logging and exposure alerts keep you informed.
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Invisible trap links",
                    "Bot access logging",
                    "Email exposure alerts",
                    "IP blocklist export",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <span className="text-orange-500">→</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section className="py-24 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3">
                Pricing
              </p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Know your exposure. Deploy your defense.
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto text-sm">
                Start with a free scan. Upgrade when you&apos;re ready to lock
                things down.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ward Audit */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col">
                <div className="mb-6 flex-1">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
                    Ward Audit
                  </p>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">$299</span>
                    <span className="text-slate-500 mb-1 text-sm">one-time</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Full exposure report. See every vulnerability.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Comprehensive exposure analysis",
                      "Bot inventory report",
                      "Data leakage assessment",
                      "Prioritized remediation plan",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="mailto:ghostfoundrysyndicate@outlook.com?subject=Ward Audit"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 text-sm transition-colors"
                >
                  Get started →
                </a>
              </div>

              {/* Ward Kit — featured */}
              <div className="relative rounded-xl border border-red-500/30 bg-slate-900/60 p-8 flex flex-col shadow-[0_0_40px_rgba(239,68,68,0.07)]">
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6 flex-1">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
                    Ward Kit
                  </p>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">$499</span>
                    <span className="text-slate-500 mb-1 text-sm">one-time</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Everything you need to deploy protection immediately.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Everything in Ward Audit",
                      "agents.json deny configuration",
                      "Hardened robots.txt",
                      "Security header config",
                      "Honeypot setup guide",
                      "AI-specific ToS language",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="WARD_KIT_STRIPE_LINK"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-lg bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 text-sm transition-colors"
                >
                  Get the Ward Kit →
                </a>
              </div>

              {/* Ward Monitor */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col">
                <div className="mb-6 flex-1">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
                    Ward Monitor
                  </p>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">$49</span>
                    <span className="text-slate-500 mb-1 text-sm">/month</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Ongoing detection. Alerts when known scrapers hit your site.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Continuous bot monitoring",
                      "Real-time exposure alerts",
                      "Monthly exposure reports",
                      "New bot detection updates",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="WARD_MONITOR_STRIPE_LINK"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 text-sm transition-colors"
                >
                  Start monitoring →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Cross-sell: The Crucible ─── */}
        <section className="py-16 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
              Already blocking agents?
            </p>
            <h2 className="text-2xl font-bold text-white mb-3">
              Get certified. Show the world you&apos;re protected.
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-lg mx-auto">
              Once your Ward is in place, The Crucible lets you certify your
              compliance posture — turning protection into a verifiable signal.
            </p>
            <Link
              href="/the-crucible"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 font-semibold px-6 py-3 text-sm transition-colors"
            >
              Learn about certification →
            </Link>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-slate-800/50 px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link
              href="/"
              className="font-semibold text-slate-400 hover:text-slate-300 transition-colors"
            >
              Foundry Familiars
            </Link>
            <span>·</span>
            <Link href="/the-assay" className="hover:text-slate-300 transition-colors">
              The Assay
            </Link>
            <span>·</span>
            <Link href="/the-crucible" className="hover:text-slate-300 transition-colors">
              The Crucible
            </Link>
            <span>·</span>
            <Link href="/transmute" className="hover:text-slate-300 transition-colors">
              Transmute
            </Link>
            <span>·</span>
            <span className="font-semibold text-slate-400">The Ward</span>
          </div>
          <a
            href="mailto:ghostfoundrysyndicate@outlook.com"
            className="hover:text-slate-300 transition-colors"
          >
            ghostfoundrysyndicate@outlook.com
          </a>
        </div>
      </footer>
    </div>
  );
}
