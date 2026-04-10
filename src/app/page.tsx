import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundry Familiars — A family of tools for the AI-native enterprise",
  description:
    "Foundry Familiars is a product family from Spooky Software Syndicate. Tools for enterprise AI readiness, certification, and integration.",
};

export default function FoundryFamiliarsHome() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200">
      {/* Nav */}
      <nav className="border-b border-slate-800/60 bg-[#0a0e17]">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
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
            <div className="h-[400px] w-[700px] rounded-full bg-blue-600/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
              Foundry Familiars
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              A family of tools for the AI-native enterprise.
            </p>
          </div>
        </section>

        {/* ─── Product Cards ─── */}
        <section className="py-20 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* The Assay */}
              <a
                href="https://spookysoftwaresyndicate.com/the-assay"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 hover:bg-slate-900/60 transition-all"
              >
                <div className="mb-4">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    The Assay
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                  Diagnose your AI readiness.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  Free, instant, no account.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                  Run a free scan
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
                </span>
              </a>

              {/* The Crucible */}
              <a
                href="https://spookysoftwaresyndicate.com/the-crucible"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 hover:bg-slate-900/60 transition-all"
              >
                <div className="mb-4">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    The Crucible
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                  The open standard for AI agent certification.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  &nbsp;
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                  Learn more
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
                </span>
              </a>

              {/* Transmute */}
              <Link
                href="/transmute"
                className="group rounded-xl border border-blue-500/30 bg-slate-900/40 p-8 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all shadow-[0_0_30px_rgba(59,130,246,0.05)]"
              >
                <div className="mb-4">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                    Transmute
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                  Add AI to your .NET codebase. No rewrite.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  &nbsp;
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                  See how it works →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-slate-800/50 px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>
            Foundry Familiars is a product family of{" "}
            <a
              href="https://spookysoftwaresyndicate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors underline underline-offset-2"
            >
              Spooky Software Syndicate
            </a>
          </span>
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
