import Link from "next/link";
import type { Metadata } from "next";

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

export default function TransmutePage() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-[#0a0e17]/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-400 transition-colors leading-tight mb-0.5"
            >
              ← Foundry Familiars
            </Link>
            <span className="text-lg font-semibold tracking-tight text-white leading-tight">
              Transmute
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/docs"
              className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
            >
              Docs
            </Link>
            <a
              href="mailto:ghostfoundrysyndicate@outlook.com"
              className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              Book a Sprint
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-32 pb-24 px-6 grid-bg overflow-hidden">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[800px] rounded-full bg-blue-600/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-medium text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Managed Service — limited availability
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Your .NET codebase.
              <br />
              <span className="text-blue-400">AI capabilities.</span>
              <br />
              No rewrite.
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
              Transmute integrates AI into your existing .NET stack without touching
              your architecture. We analyze your repo, produce a blueprint for
              your team to review, then deliver compile-verified pull requests
              that match your patterns — not ours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://buy.stripe.com/cNi9ATcQ92f74UY5HdaMU01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 text-sm transition-colors"
              >
                Book Discovery Sprint
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
              </a>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium px-8 py-3.5 text-sm transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Problem ─── */}
        <section className="py-24 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">
                The pressure is real. The usual options aren&apos;t.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                .NET teams face a familiar trap. Stakeholders want AI yesterday.
                The codebase won&apos;t survive a rewrite. And the consultants
                who showed up last quarter are still writing their SOW.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg
                      className="h-5 w-5 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  ),
                  title: "Ship AI features. Now.",
                  body: "The board approved a roadmap with AI in it. Your team has six months of backlog already. Every quarter this slips is a question at the all-hands.",
                },
                {
                  icon: (
                    <svg
                      className="h-5 w-5 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ),
                  title: "Rewriting isn&apos;t an option.",
                  body: "The codebase is 300k lines of C#. It's been running payroll for a decade. A ground-up rewrite is a 2-year project with a 60% failure rate. Not happening.",
                },
                {
                  icon: (
                    <svg
                      className="h-5 w-5 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: "Consultants are slow and expensive.",
                  body: "The last firm took four weeks to scope a proof of concept that didn't fit your architecture. You need delivery, not another discovery engagement that goes nowhere.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/10">
                    {card.icon}
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section
          id="how-it-works"
          className="py-24 px-6 border-t border-slate-800/50"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">
                How it works
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                Four steps. You stay in control at every one.
              </p>
            </div>

            <div className="relative">
              {/* Connector line */}
              <div className="absolute left-[1.9rem] top-10 bottom-10 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent hidden md:block" />

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    label: "Repo Analysis",
                    title: "We read your codebase. You don&apos;t change a line.",
                    body: "Transmute ingests your repository — service layer, data access patterns, existing abstractions. It maps the architecture and identifies where AI capabilities can be added without structural surgery.",
                    tag: "read-only",
                  },
                  {
                    step: "02",
                    label: "Blueprint",
                    title: "A detailed integration plan, in plain English.",
                    body: "We produce a Blueprint document: what we're building, where it fits in your architecture, what the generated code will look like, and what it explicitly won't touch. This is not a sales pitch. It's a technical spec.",
                    tag: "human-readable",
                  },
                  {
                    step: "03",
                    label: "Review & Approve",
                    title: "Your team approves before a single line is written.",
                    body: "Engineering reviews the Blueprint. You redline it, ask questions, adjust scope. Nothing proceeds until your team signs off. This is where integration mismatches get caught — not in production.",
                    tag: "your team's call",
                  },
                  {
                    step: "04",
                    label: "Compile-Verified PR",
                    title: "Code that builds, fits your patterns, and arrives via PR.",
                    body: "The generated code compiles against your project. It follows the naming conventions, layering, and dependency patterns already in your repo. It arrives as a pull request. Your team reviews it like any other PR.",
                    tag: "standard workflow",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 md:gap-8 items-start">
                    {/* Step circle */}
                    <div className="relative flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-bold text-blue-400">
                        {item.step}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pb-2">
                      <div className="mb-1 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                          {item.label}
                        </span>
                        <span className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-0.5 text-xs text-slate-500 font-mono">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/docs"
                className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
              >
                Read the full technical documentation →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Foundry Familiars Suite ─── */}
        <section className="py-20 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
                Foundry Familiars
              </p>
              <h2 className="text-2xl font-bold text-white mb-3">
                Part of the Foundry Familiars Suite
              </h2>
              <p className="text-slate-400 text-sm max-w-lg mx-auto">
                Transmute is one tool in a family built for the AI-native
                enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* The Assay */}
              <Link
                href="/the-assay"
                className="group rounded-xl border border-slate-800 bg-slate-900/30 p-6 hover:border-slate-700 hover:bg-slate-900/50 transition-all"
              >
                <div className="mb-3">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    The Assay
                  </span>
                </div>
                <p className="text-sm text-slate-300 font-medium mb-1">
                  Not sure if your stack is AI-ready? Run a free scan.
                </p>
                <p className="text-xs text-slate-500">
                  Free, instant, no account required.
                </p>
              </Link>

              {/* The Crucible */}
              <Link
                href="/the-crucible"
                className="group rounded-xl border border-slate-800 bg-slate-900/30 p-6 hover:border-slate-700 hover:bg-slate-900/50 transition-all"
              >
                <div className="mb-3">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    The Crucible
                  </span>
                </div>
                <p className="text-sm text-slate-300 font-medium mb-1">
                  See the Foundry Standard your integration will meet.
                </p>
                <p className="text-xs text-slate-500">
                  The open standard for AI agent certification.
                </p>
              </Link>

              {/* The Ward */}
              <Link
                href="/the-ward"
                className="group rounded-xl border border-red-500/20 bg-slate-900/30 p-6 hover:border-red-500/30 hover:bg-slate-900/50 transition-all"
              >
                <div className="mb-3">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    The Ward
                  </span>
                </div>
                <p className="text-sm text-slate-300 font-medium mb-1">
                  Need to lock out AI scrapers? Run a free exposure scan.
                </p>
                <p className="text-xs text-slate-500">
                  Protection for sensitive sites and proprietary data.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section
          id="pricing"
          className="py-24 px-6 border-t border-slate-800/50"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Pricing</h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                One offering is live. One is coming. Both built for .NET teams
                who need results, not roadmaps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Managed Service — featured */}
              <div className="relative rounded-xl border border-blue-500/30 bg-slate-900/60 p-8 shadow-[0_0_40px_rgba(59,130,246,0.07)]">
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Available Now
                  </span>
                </div>

                <div className="mb-6 mt-2">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Managed Service
                  </h3>
                  <p className="text-sm text-slate-400">
                    We do the work. You approve the output.
                  </p>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      $4,500
                    </span>
                    <span className="text-sm text-slate-400">
                      discovery sprint
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      $18,500
                    </span>
                    <span className="text-sm text-slate-400">
                      per integration
                    </span>
                  </div>
                </div>

                <ul className="mb-8 space-y-2.5 text-sm">
                  {[
                    "Repo analysis + Architecture mapping",
                    "Blueprint document (your team approves)",
                    "Compile-verified PR delivery",
                    "Pattern-matching code generation",
                    "No surprise dependencies introduced",
                    "Integration with your existing test suite",
                    "Direct access to senior engineer",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://buy.stripe.com/cNi9ATcQ92f74UY5HdaMU01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm text-center py-3 transition-colors"
                >
                  Book Discovery Sprint
                </a>
              </div>

              {/* SaaS Tool — coming soon */}
              <div className="relative rounded-xl border border-slate-700/60 bg-slate-900/30 p-8 opacity-80">
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                    Coming Soon
                  </span>
                </div>

                <div className="mb-6 mt-2">
                  <h3 className="text-xl font-bold text-white mb-1">
                    SaaS Tool
                  </h3>
                  <p className="text-sm text-slate-400">
                    Self-serve. Your team runs it directly.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">$349</span>
                    <span className="text-sm text-slate-400">— $1,799/mo</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Tiered by codebase size
                  </p>
                </div>

                <ul className="mb-8 space-y-2.5 text-sm">
                  {[
                    "Self-hosted or cloud-connected",
                    "Blueprint generation in minutes",
                    "Approval workflow built in",
                    "PR generation via GitHub/Azure DevOps",
                    "Multiple integrations per cycle",
                    "Team seat management",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-slate-500">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:ghostfoundrysyndicate@outlook.com?subject=Transmute SaaS — Early Access"
                  className="block w-full rounded-md border border-slate-700 bg-slate-800/50 text-slate-400 font-semibold text-sm text-center py-3 hover:text-slate-300 transition-colors"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── About / Credibility ─── */}
        <section className="py-24 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500/20 to-slate-700/40 border border-slate-700 flex items-center justify-center text-lg font-bold text-blue-400">
                  S
                </div>
                <div>
                  <p className="font-semibold text-white">Scott Murphy</p>
                  <p className="text-sm text-slate-400">
                    Founder, Ghost Foundry Syndicate
                  </p>
                </div>
              </div>

              <blockquote className="text-slate-300 leading-relaxed mb-6 text-[0.975rem]">
                I&apos;ve spent 20 years in .NET. I&apos;ve seen the consulting
                pattern from both sides — the SOW that takes longer than the
                work, the proof-of-concept that can&apos;t survive contact with
                production, the &quot;AI transformation&quot; that amounts to a
                wrapper around a public API. Transmute is what I wish had existed
                when I was the engineering manager being sold to. Opinionated
                about quality. Conservative about risk. Clear about what it
                does and doesn&apos;t do.
              </blockquote>

              <a
                href="https://scottroymurphy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
              >
                scottroymurphy.com
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

        {/* ─── Final CTA ─── */}
        <section className="py-20 px-6 border-t border-slate-800/50">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to add AI to your stack?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              The discovery sprint is $4,500. It ends with a Blueprint your
              team reviews and approves. If it&apos;s not right for you, you
              have a detailed map of your own codebase. Either way, you win.
            </p>
            <a
              href="https://buy.stripe.com/cNi9ATcQ92f74UY5HdaMU01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 text-sm transition-colors"
            >
              Book Discovery Sprint
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
            </a>
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
            <span className="font-semibold text-slate-400">Transmute</span>
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
          <div className="flex items-center gap-6">
            <Link href="/docs" className="hover:text-slate-300 transition-colors">
              Documentation
            </Link>
            <Link
              href="/transmute/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/transmute/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy
            </Link>
            <a
              href="mailto:ghostfoundrysyndicate@outlook.com"
              className="hover:text-slate-300 transition-colors"
            >
              ghostfoundrysyndicate@outlook.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
