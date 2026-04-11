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
      <nav className="sticky top-0 z-50 border-b border-slate-800/40 bg-[#0a0e17]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/ghost-icon.svg" alt="Foundry Familiars ghost" width={32} height={32} className="rounded-md" />
            <div>
              <span className="text-xl font-bold tracking-tight text-white">
                Foundry Familiars
              </span>
              <p className="text-xs text-slate-500 mt-0.5">By Spooky Software Syndicate</p>
            </div>
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
        <section
          id="hero"
          className="relative pt-28 pb-24 px-6 overflow-hidden"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(99,179,237,0.03) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(99,179,237,0.03) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "40px 40px",
          }}
        >
          {/* Layered ambient glow blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full opacity-25"
              style={{
                background: "radial-gradient(ellipse, #1d4ed8 0%, transparent 70%)",
                animation: "pulse 6s ease-in-out infinite",
              }}
            />
            <div
              className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[500px] rounded-full opacity-15"
              style={{
                background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)",
                animation: "pulse 9s ease-in-out infinite 2s",
              }}
            />
            <div
              className="absolute right-1/4 top-1/3 translate-x-1/2 -translate-y-1/2 h-[300px] w-[400px] rounded-full opacity-10"
              style={{
                background: "radial-gradient(ellipse, #d97706 0%, transparent 70%)",
                animation: "pulse 11s ease-in-out infinite 4s",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Ghost icon hero */}
            <div className="flex justify-center mb-8">
              <img
                src="/ghost-icon.svg"
                alt="Foundry Familiars"
                width={80}
                height={80}
                className="rounded-xl"
                style={{ filter: "drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))" }}
              />
            </div>

            <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-white leading-[1.05] mb-5">
              The Foundry is open.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed mb-10">
              Four tools. One standard. The agentic web, done right.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30"
              >
                Explore the suite ↓
              </a>
              <Link
                href="/the-crucible"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition-colors px-6 py-3 text-sm font-semibold text-slate-300"
              >
                Read the Standard →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── By the Numbers Strip ─── */}
        <section className="border-y border-slate-800/60 bg-slate-900/40 py-10 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-white mb-1">4</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Products</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">1</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Open Standard</div>
              </div>
              <div>
                <div className="text-3xl font-black text-cyan-400 mb-1 leading-tight text-2xl">v1.0</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Foundry Standard</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-400 mb-1">TX</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Texas-built</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Product Cards ─── */}
        <section id="products" className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* The Assay */}
              <Link
                href="/the-assay"
                className="group relative rounded-xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 hover:bg-slate-900/60 transition-all overflow-hidden"
              >
                {/* amber top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-gradient-to-r from-amber-500 to-amber-300" />
                <div className="mb-4 mt-1">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    The Assay
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-amber-300 transition-colors">
                  Diagnose your AI readiness.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">
                  Surface every gap in your AI posture — robots.txt, agent headers, data exposure — in one pass.
                </p>
                <p className="text-xs font-mono text-amber-400/80 mb-6">Free. Instant. No account.</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 group-hover:text-amber-300 transition-colors font-medium">
                  Run a free scan →
                </span>
              </Link>

              {/* The Ward */}
              <Link
                href="/the-ward"
                className="group relative rounded-xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 hover:bg-slate-900/60 transition-all overflow-hidden"
              >
                {/* red top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-gradient-to-r from-red-600 to-red-400" />
                <div className="mb-4 mt-1">
                  <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
                    The Ward
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-red-300 transition-colors">
                  Keep agents out.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">
                  Detect, classify, and block AI scrapers before they strip your content. Free exposure scan included.
                </p>
                <p className="text-xs font-mono text-red-400/80 mb-6">Know who's scraping you in 60 seconds.</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-red-400 group-hover:text-red-300 transition-colors font-medium">
                  Run exposure scan →
                </span>
              </Link>

              {/* The Crucible */}
              <Link
                href="/the-crucible"
                className="group relative rounded-xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 hover:bg-slate-900/60 transition-all overflow-hidden"
              >
                {/* blue top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-gradient-to-r from-blue-600 to-cyan-400" />
                <div className="mb-4 mt-1">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                    The Crucible
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                  The open standard for AI agent certification.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">
                  A verifiable trust layer for the agentic web — so enterprises know exactly what they're letting in.
                </p>
                <p className="text-xs font-mono text-blue-400/80 mb-6">The SSL cert for the agentic web.</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                  Learn more →
                </span>
              </Link>

              {/* Transmute */}
              <Link
                href="/transmute"
                className="group relative rounded-xl border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 hover:bg-slate-900/60 transition-all overflow-hidden"
              >
                {/* purple top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-gradient-to-r from-violet-600 to-purple-400" />
                <div className="mb-4 mt-1">
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
                    Transmute
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-violet-300 transition-colors">
                  Add AI to your .NET codebase. No rewrite.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">
                  Drop-in AI capabilities for existing .NET applications — no greenfield project required.
                </p>
                <p className="text-xs font-mono text-violet-400/80 mb-6">AI in your .NET stack. No rewrite.</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-violet-400 group-hover:text-violet-300 transition-colors font-medium">
                  See how it works →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-slate-800/50 px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col items-center gap-2 text-sm text-slate-500 text-center">
          <p>
            A Foundry Familiars product ·{" "}
            <a
              href="https://spookysoftwaresyndicate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors underline underline-offset-2"
            >
              Spooky Software Syndicate
            </a>
          </p>
          <p>
            Built by{" "}
            <a
              href="https://scottroymurphy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors underline underline-offset-2"
            >
              Scott Murphy
            </a>{" "}
            · scottroymurphy.com
          </p>
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
