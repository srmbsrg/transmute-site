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
  grade?: string;
  certification?: string;
  domains?: {
    agentAccessibility?: DomainScore;
    agentSecurity?: DomainScore;
    agentSafety?: DomainScore;
    [key: string]: DomainScore | undefined;
  };
  remediationItems?: RemediationItem[];
  error?: string;
};

function letterGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function certLevel(score: number): string {
  if (score >= 90) return "Gold";
  if (score >= 75) return "Silver";
  if (score >= 60) return "Bronze";
  return "Not Certified";
}

function certBadgeClasses(cert: string): string {
  if (cert === "Gold")
    return "bg-yellow-900/30 text-yellow-400 border-yellow-500/30";
  if (cert === "Silver")
    return "bg-slate-700/50 text-slate-300 border-slate-500/30";
  if (cert === "Bronze")
    return "bg-amber-900/30 text-amber-400 border-amber-700/30";
  return "bg-red-900/20 text-red-400 border-red-500/20";
}

function ScoreBar({ score, color }: { score: number; color: string }) {
  const clampedScore = Math.max(0, Math.min(100, score));
  const colorClass =
    color === "amber"
      ? "bg-amber-500"
      : color === "red"
      ? "bg-red-500"
      : "bg-blue-500";
  return (
    <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${colorClass}`}
        style={{ width: `${clampedScore}%` }}
      />
    </div>
  );
}

function domainColor(score: number): string {
  if (score >= 75) return "blue";
  if (score >= 50) return "amber";
  return "red";
}

export default function TheAssayPage() {
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
      const res = await fetch("/api/foundry-standard/scan", {
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

  const overallScore = result?.score ?? 0;
  const grade = result?.grade ?? letterGrade(overallScore);
  const cert = result?.certification ?? certLevel(overallScore);

  const domains = [
    {
      key: "agentAccessibility",
      label: "Agent Accessibility",
      weight: "30%",
      score: result?.domains?.agentAccessibility?.score ?? null,
    },
    {
      key: "agentSecurity",
      label: "Agent Security",
      weight: "30%",
      score: result?.domains?.agentSecurity?.score ?? null,
    },
    {
      key: "agentSafety",
      label: "Agent Safety",
      weight: "40%",
      score: result?.domains?.agentSafety?.score ?? null,
    },
  ];

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
            <div className="h-[400px] w-[700px] rounded-full bg-blue-600/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-block">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                The Assay
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
              Is your site ready for AI agents?
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Run a free, instant scan against The Foundry Standard. No account
              required.
            </p>
          </div>
        </section>

        {/* ─── Scanner Form ─── */}
        <section className="py-16 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yoursite.com"
                required
                disabled={loading}
                className="flex-1 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 disabled:opacity-60 transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !url.trim()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 text-sm transition-colors whitespace-nowrap"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
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
                  "Run Assay"
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
                {/* Overall score header */}
                <div className="px-7 py-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                      Overall Score
                    </p>
                    <div className="flex items-end gap-3">
                      <span className="text-6xl font-bold text-white leading-none">
                        {overallScore}
                      </span>
                      <span className="text-2xl font-bold text-slate-400 mb-1">
                        / 100
                      </span>
                      <span className="text-3xl font-bold text-blue-400 mb-0.5 ml-1">
                        {grade}
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
                      className={`inline-block rounded-full border px-4 py-1.5 text-sm font-semibold ${certBadgeClasses(
                        cert
                      )}`}
                    >
                      {cert}
                    </span>
                  </div>
                </div>

                {/* Domain scores */}
                <div className="px-7 py-6 border-b border-slate-800">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">
                    Domain Scores
                  </p>
                  <div className="space-y-5">
                    {domains.map((d) => (
                      <div key={d.key}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-300 font-medium">
                              {d.label}
                            </span>
                            <span className="text-xs font-mono text-slate-600">
                              {d.weight}
                            </span>
                          </div>
                          <span className="text-sm font-mono font-bold text-slate-200">
                            {d.score !== null ? d.score : "—"}
                          </span>
                        </div>
                        {d.score !== null ? (
                          <ScoreBar
                            score={d.score}
                            color={domainColor(d.score)}
                          />
                        ) : (
                          <div className="h-2 w-full rounded-full bg-slate-800" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remediation items */}
                {result.remediationItems && result.remediationItems.length > 0 && (
                  <div className="px-7 py-6">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
                      Top Remediation Items
                    </p>
                    <ul className="space-y-3">
                      {result.remediationItems.slice(0, 8).map((item, i) => {
                        const priority =
                          item.priority ?? item.severity ?? "medium";
                        const isHigh =
                          priority === "high" || priority === "critical";
                        return (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm"
                          >
                            <span
                              className={`mt-0.5 flex-shrink-0 text-xs font-mono font-bold px-1.5 py-0.5 rounded uppercase ${
                                isHigh
                                  ? "bg-red-900/30 text-red-400"
                                  : "bg-amber-900/20 text-amber-500"
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
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-slate-800/50 px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-semibold text-slate-400 hover:text-slate-300 transition-colors"
            >
              Foundry Familiars
            </Link>
            <span>·</span>
            <span className="font-semibold text-slate-400">The Assay</span>
            <span>·</span>
            <span>
              A product of{" "}
              <a
                href="https://spookysoftwaresyndicate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors underline underline-offset-2"
              >
                Spooky Software Syndicate
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Want full certification?</span>
            <Link
              href="/the-crucible"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              → The Crucible
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
