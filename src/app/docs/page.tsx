import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation — Transmute",
  description:
    "Technical documentation for Transmute: codebase requirements, the Blueprint approval process, how compile-verified PRs are generated, and answers to common enterprise objections.",
};

const sections = [
  { id: "what-transmute-does", label: "What Transmute Does" },
  { id: "codebase-requirements", label: "Codebase Requirements" },
  { id: "the-blueprint", label: "The Blueprint" },
  { id: "the-pr", label: "The PR" },
  { id: "faq", label: "FAQ" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-[#0a0e17]/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/transmute"
            className="text-lg font-semibold tracking-tight text-white hover:text-slate-300 transition-colors"
          >
            Transmute
          </Link>
          <div className="flex items-center gap-6">
            <span className="text-sm text-blue-400 font-medium">Docs</span>
            <a
              href="mailto:ghostfoundrysyndicate@outlook.com?subject=Discovery Sprint Inquiry"
              className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              Book a Sprint
            </a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24 flex gap-12">
        {/* Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              On this page
            </p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-slate-400 hover:text-slate-200 py-1.5 pl-3 border-l border-slate-800 hover:border-slate-600 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>

            <div className="mt-10 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                Questions? The fastest way to get an answer is a direct
                conversation.
              </p>
              <a
                href="mailto:ghostfoundrysyndicate@outlook.com"
                className="block w-full text-center rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1 prose-dark">
          {/* Header */}
          <div className="mb-12 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
              <Link href="/transmute" className="hover:text-slate-300 transition-colors">
                transmute
              </Link>
              <span>/</span>
              <span className="text-slate-400">docs</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight mb-3">
              Documentation
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              What Transmute does, what it needs from your codebase, and how the
              delivery process works — with no hand-waving.
            </p>
          </div>

          {/* ─── What Transmute Does ─── */}
          <section id="what-transmute-does" className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-4">
              What Transmute Does
            </h2>
            <p>
              Transmute adds AI-powered capabilities to existing .NET codebases
              without requiring a rewrite, a microservices migration, or a
              platform change.
            </p>
            <p>
              The core workflow is: <strong>analyze → blueprint →
              approve → generate</strong>. Transmute reads your repository, maps
              your architecture, and produces a detailed integration plan. Your
              team reviews and approves that plan. Only then does any code get
              generated — and it arrives as a pull request, not a wholesale
              replacement of your codebase.
            </p>
            <p>
              Examples of what a Transmute integration can deliver:
            </p>
            <ul>
              <li>
                Natural language interfaces to existing data layers (search,
                filtering, summarization)
              </li>
              <li>
                AI-assisted triage or classification built into existing service
                layer patterns
              </li>
              <li>
                Document understanding and extraction wired into existing data
                models
              </li>
              <li>
                Copilot-style suggestion features that operate on your domain
                vocabulary
              </li>
              <li>
                Embedding pipelines connected to your existing entity model
              </li>
            </ul>
            <p>
              Transmute does <strong>not</strong> replace your architecture, change
              your deployment model, introduce undisclosed dependencies, or
              generate code without your team&apos;s explicit approval.
            </p>
          </section>

          {/* ─── Codebase Requirements ─── */}
          <section id="codebase-requirements" className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-4">
              What Codebases Work Best
            </h2>
            <p>
              Transmute is not a general-purpose AI code tool. It is optimized for
              a specific type of .NET project. If your codebase fits the profile
              below, the integration process is predictable. If it doesn&apos;t,
              we will tell you in the discovery sprint before any further money
              is spent.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
              Hard requirements
            </h3>
            <ul>
              <li>
                <code>.NET 6+</code> — Framework 4.x and .NET Core 3.x projects
                can work but require additional scoping
              </li>
              <li>
                Standard layered architecture — some recognizable separation of
                presentation, business logic, and data access
              </li>
              <li>
                Fewer than 500 core files in scope — this is the ceiling for
                the analysis phase within a single engagement; larger codebases
                are supported by scoping the integration to a specific bounded
                context
              </li>
              <li>
                Build must pass before we start — we do not debug pre-existing
                compilation errors
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
              What helps
            </h3>
            <ul>
              <li>Consistent naming conventions (even informal ones)</li>
              <li>
                EF Core, Dapper, or another recognizable data access pattern
              </li>
              <li>
                Existing interfaces or abstractions at service boundaries
              </li>
              <li>Unit or integration tests (not required, but useful)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
              What we&apos;ve seen that still works
            </h3>
            <p>
              Inconsistent naming. No interfaces. Giant controller actions.
              Business logic in the data layer. Stored procedures everywhere.
              These are common. They slow the analysis phase slightly but
              don&apos;t disqualify a project. We surface what we find in the
              Blueprint and adjust the integration approach accordingly.
            </p>

            <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/5 p-5">
              <p className="text-sm text-amber-300/80 leading-relaxed">
                <strong className="text-amber-300">Not sure if your codebase qualifies?</strong>{" "}
                The discovery sprint will answer that definitively. At the end
                of a sprint, you either have a Blueprint you can act on, or a
                clear explanation of why this engagement isn&apos;t right for
                your project — and no further commitment required.
              </p>
            </div>
          </section>

          {/* ─── The Blueprint ─── */}
          <section id="the-blueprint" className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-4">
              The Blueprint
            </h2>
            <p>
              The Blueprint is the deliverable from the discovery sprint. It is
              a structured technical document — not a presentation, not a sales
              artifact — that your engineering team reads and annotates before
              any code is generated.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
              What it contains
            </h3>
            <ul>
              <li>
                <strong>Architecture summary</strong> — what we observed about
                your codebase: layering, naming patterns, data access style,
                existing abstractions
              </li>
              <li>
                <strong>Integration targets</strong> — the specific files,
                services, and interfaces where AI capabilities will be
                introduced, with rationale for each choice
              </li>
              <li>
                <strong>Code sketches</strong> — representative examples of
                what the generated code will look like, in your naming
                conventions
              </li>
              <li>
                <strong>Dependencies introduced</strong> — every external
                package that will be added, with version and justification
              </li>
              <li>
                <strong>Boundary conditions</strong> — what the integration
                explicitly will not touch, and why
              </li>
              <li>
                <strong>Risk notes</strong> — anything we observed that could
                complicate the integration or require special handling
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
              The approval step
            </h3>
            <p>
              After Blueprint delivery, your team has a review window — standard
              is five business days, adjustable by agreement. During this
              window:
            </p>
            <ul>
              <li>You can accept the Blueprint as written</li>
              <li>
                You can request changes to scope, approach, or specific
                integration targets
              </li>
              <li>
                You can reject the Blueprint entirely — no code generation
                proceeds, and the engagement closes at this stage
              </li>
            </ul>
            <p>
              Code generation begins only after a written sign-off from your
              team. This is not a formality. The approval step is where
              integration mismatches get caught, not in your CI pipeline.
            </p>
          </section>

          {/* ─── The PR ─── */}
          <section id="the-pr" className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-4">The PR</h2>
            <p>
              Code generation produces a pull request against your target
              branch. It arrives like any other PR in your workflow — your team
              reviews it, requests changes, and merges when ready.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
              What a generated PR includes
            </h3>
            <ul>
              <li>
                <strong>Compile-verified output</strong> — the PR builds against
                your project before it is submitted. We do not submit code that
                does not compile.
              </li>
              <li>
                <strong>Pattern-matching code</strong> — naming conventions,
                indentation style, and layering choices follow what is already
                in your repo, not a house style we impose
              </li>
              <li>
                <strong>No surprise dependencies</strong> — every package
                added was disclosed in the Blueprint and approved by your team
                before generation began
              </li>
              <li>
                <strong>PR description</strong> — a plain-English explanation
                of what changed and why, keyed to the Blueprint sections it
                implements
              </li>
              <li>
                <strong>Test stubs</strong> — if your project has an existing
                test suite, the PR includes skeleton tests for generated
                methods, following your existing test patterns
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
              What it doesn&apos;t do
            </h3>
            <ul>
              <li>
                Refactor existing code outside the integration targets — the PR
                only adds what was in the Blueprint
              </li>
              <li>
                Introduce architectural changes — if the Blueprint called for
                adding a service interface, the PR adds a service interface; it
                doesn&apos;t reorganize your project structure
              </li>
              <li>
                Auto-merge — the PR waits for your review like everything else
              </li>
            </ul>

            <div className="mt-6 rounded-lg border border-slate-700 bg-slate-900/50 p-5">
              <p className="text-xs font-mono text-slate-500 mb-2">
                // Example PR description excerpt
              </p>
              <pre className="text-xs text-slate-400 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`Implements Blueprint § 3.2 — DocumentSearchService

Adds natural language search to the existing IDocumentRepository
interface. New method: SearchAsync(string query, int topK).

Pattern: follows existing async service pattern in
Services/DocumentService.cs lines 44–82.

Dependencies added: Microsoft.SemanticKernel 1.x (approved Blueprint § 5)

Does not modify: DocumentRepository.cs, existing query methods,
EF Core configuration.`}
              </pre>
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section id="faq" className="mb-8 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white mb-4">
              FAQ
            </h2>
            <p className="mb-8">
              These are the questions we hear most often from engineering
              managers and CTOs evaluating whether Transmute is the right fit.
            </p>

            <div className="space-y-6">
              {[
                {
                  q: "What access do you need to our codebase?",
                  a: "Read-only. We need to clone the repository to perform analysis. We do not need write access at any stage — the PR is submitted via your standard review process. If your security policy requires, we can perform analysis in an airgapped or VPN-connected environment.",
                },
                {
                  q: "Who owns the generated code?",
                  a: "You do. The generated code becomes part of your repository, subject to your IP ownership, the moment the PR is merged. We retain no rights to it and do not store copies of your codebase or generated output after the engagement closes.",
                },
                {
                  q: "What happens if the generated code doesn't meet our standards?",
                  a: "The Blueprint approval step is designed to catch this before generation begins. If the delivered PR has issues your team identifies in review, we revise. The engagement doesn't close until the PR meets the standards agreed to in the approved Blueprint. There is no additional charge for revision cycles within agreed scope.",
                },
                {
                  q: "Can this work alongside our existing AI tooling (Copilot, Cursor, etc.)?",
                  a: "Yes. Transmute is not a developer tool — it runs once to produce a specific integration, not continuously as part of your IDE. It neither depends on nor conflicts with the AI tooling your developers are already using. The PR it generates looks like any other PR to those tools.",
                },
                {
                  q: "We've heard \"AI-generated code\" before and it never compiles. How is this different?",
                  a: "The compile requirement is not a marketing claim — it is an exit condition. The PR is not submitted unless it builds against your project. This means we test against your solution file, your project references, and your existing NuGet packages. If it doesn't compile, you don't see it. We've turned down engagements because analysis showed the codebase had enough structural inconsistency that we couldn't meet the compile guarantee within reasonable scope. We'd rather say no than ship broken code.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800 bg-slate-900/30 p-6"
                >
                  <h3 className="font-semibold text-white mb-3 leading-snug">
                    {item.q}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-14 rounded-xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
              The discovery sprint is where the real due diligence happens. It
              ends with a Blueprint, not a pitch deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ghostfoundrysyndicate@outlook.com?subject=Transmute — Pre-Sprint Questions"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 text-sm transition-colors"
              >
                Ask a Question
              </a>
              <Link
                href="/transmute#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium px-6 py-2.5 text-sm transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
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
            <Link
              href="/transmute"
              className="font-semibold text-slate-400 hover:text-slate-300 transition-colors"
            >
              Transmute
            </Link>
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
            <Link
              href="/docs"
              className="hover:text-slate-300 transition-colors"
            >
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
