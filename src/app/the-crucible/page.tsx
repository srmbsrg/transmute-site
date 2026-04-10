import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Crucible — The Foundry Standard for the Agentic Web",
  description:
    "The Crucible defines The Foundry Standard — the open certification framework for AI agent-ready websites. Learn about Agent Accessibility, Agent Security, and Agent Safety domains.",
};

export default function TheCruciblePage() {
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
        <section className="relative pt-24 pb-20 px-6 grid-bg overflow-hidden">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[400px] w-[700px] rounded-full bg-amber-600/4 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-block">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                The Crucible
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
              The open standard for the agentic web.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              The Foundry Standard defines what it means for a website to be AI
              agent-ready. Run The Assay to get your score. Earn your
              certification.
            </p>
          </div>
        </section>

        {/* ─── Three Domains ─── */}
        <section className="py-24 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">
                Three domains. One standard.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                The Foundry Standard evaluates every site across three
                weighted domains. Each reflects a distinct aspect of
                AI agent compatibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Agent Accessibility",
                  weight: "30%",
                  color: "blue",
                  description:
                    "Can AI agents actually navigate and extract meaning from your site? This domain covers structured data, semantic markup, machine-readable metadata, and the presence of agent-friendly artifacts like agents.json and llms.txt.",
                  checks: [
                    "Structured data (JSON-LD, schema.org)",
                    "Semantic HTML and ARIA roles",
                    "agents.json publication",
                    "llms.txt presence and format",
                    "Crawlability and robots.txt hygiene",
                  ],
                },
                {
                  label: "Agent Security",
                  weight: "30%",
                  color: "blue",
                  description:
                    "Does your site handle AI agent interactions safely, without introducing risk to users or operators? This domain covers authentication patterns, rate limiting, input validation, and resistance to prompt injection vectors.",
                  checks: [
                    "Authentication and authorization controls",
                    "Rate limiting and abuse prevention",
                    "Input sanitization and output encoding",
                    "Prompt injection surface area",
                    "HTTPS and transport security",
                  ],
                },
                {
                  label: "Agent Safety",
                  weight: "40%",
                  color: "amber",
                  description:
                    "Does your site behave responsibly when AI agents act on its behalf? The highest-weighted domain covers consent surfaces, reversibility of agent-initiated actions, transparency disclosures, and human-in-the-loop checkpoints.",
                  checks: [
                    "Consent and disclosure patterns",
                    "Reversibility of agent-triggered actions",
                    "Human-in-the-loop checkpoints",
                    "Transparency about AI involvement",
                    "Data minimization for agent interactions",
                  ],
                },
              ].map((domain) => (
                <div
                  key={domain.label}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-7 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`text-xs font-mono uppercase tracking-widest ${
                        domain.color === "amber"
                          ? "text-amber-400"
                          : "text-blue-400"
                      }`}
                    >
                      {domain.label}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${
                        domain.color === "amber"
                          ? "text-amber-400 border-amber-400/30 bg-amber-400/10"
                          : "text-blue-400 border-blue-400/30 bg-blue-400/10"
                      }`}
                    >
                      {domain.weight}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                    {domain.description}
                  </p>
                  <ul className="space-y-1.5">
                    {domain.checks.map((check) => (
                      <li
                        key={check}
                        className="flex items-start gap-2 text-xs text-slate-500"
                      >
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Certification Tiers ─── */}
        <section className="py-24 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">
                Certification tiers
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Earn certification by meeting the scoring thresholds across all
                three domains. Higher tiers require stronger fundamentals and
                active participation in the standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                {
                  tier: "Bronze",
                  score: "≥ 60",
                  color: "amber",
                  ring: "border-amber-700/40",
                  badge: "bg-amber-900/30 text-amber-400",
                  requirements: [
                    "Overall score of 60 or above",
                    "No critical failures in any domain",
                    "Passing marks in Agent Safety",
                  ],
                  description:
                    "Your site meets the baseline threshold for safe AI agent interaction.",
                },
                {
                  tier: "Silver",
                  score: "≥ 75",
                  color: "slate",
                  ring: "border-slate-500/40",
                  badge: "bg-slate-700/50 text-slate-300",
                  requirements: [
                    "Overall score of 75 or above",
                    "agents.json published and valid",
                    "No critical failures in any domain",
                    "Bronze requirements met",
                  ],
                  description:
                    "Your site is actively signaling AI agent compatibility and meets strong standards.",
                },
                {
                  tier: "Gold",
                  score: "≥ 90",
                  color: "yellow",
                  ring: "border-yellow-500/40",
                  badge: "bg-yellow-900/30 text-yellow-400",
                  requirements: [
                    "Overall score of 90 or above",
                    "Annual certification audit",
                    "Silver requirements met",
                    "All three domains passing",
                  ],
                  description:
                    "Your site exemplifies best-in-class AI agent readiness. The highest Foundry Standard certification.",
                },
              ].map((tier) => (
                <div
                  key={tier.tier}
                  className={`rounded-xl border ${tier.ring} bg-slate-900/40 p-7 flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${tier.badge}`}
                    >
                      {tier.tier}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      score {tier.score}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                    {tier.description}
                  </p>
                  <ul className="space-y-1.5">
                    {tier.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-xs text-slate-500"
                      >
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Find out where you stand.
            </h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
              The Assay runs your site against The Foundry Standard in seconds.
              Free, no account required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/the-assay"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 text-sm transition-colors"
              >
                Start with The Assay
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="https://spookysoftwaresyndicate.com/the-crucible"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium px-8 py-3.5 text-sm transition-colors"
              >
                Read the Standard
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
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
            <span className="font-semibold text-slate-400">The Crucible</span>
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
