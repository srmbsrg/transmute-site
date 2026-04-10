import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Transmute",
  description:
    "Terms of Service for Transmute managed .NET AI integration services by Spooky Software Syndicate.",
};

export default function TermsPage() {
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
            <Link
              href="/transmute"
              className="text-lg font-semibold tracking-tight text-white hover:text-slate-300 transition-colors leading-tight"
            >
              Transmute
            </Link>
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

      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8">
          <Link href="/transmute" className="hover:text-slate-300 transition-colors">
            transmute
          </Link>
          <span>/</span>
          <span className="text-slate-400">terms</span>
        </div>

        <h1 className="text-4xl font-bold text-white tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          Last updated: April 2026
        </p>

        <div className="prose-dark space-y-10">
          {/* 1. Services */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              1. Services Provided
            </h2>
            <p>
              Spooky Software Syndicate (&quot;we,&quot; &quot;us,&quot; or
              &quot;the Company&quot;) provides managed .NET AI integration
              services under the Transmute product, including but not limited
              to: repository analysis, integration Blueprint production,
              Blueprint review coordination, and compile-verified pull request
              delivery (&quot;Services&quot;).
            </p>
            <p>
              The specific scope, deliverables, and timeline for each
              engagement are defined in a mutually agreed Statement of Work
              or engagement confirmation email. Services are performed remotely.
              Engagement capacity is limited; acceptance of an engagement is
              at the Company&apos;s sole discretion.
            </p>
          </section>

          {/* 2. Payment */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. Payment Terms
            </h2>
            <p>
              Engagements are invoiced on a 50/50 split: 50% due upon
              engagement confirmation, 50% due net-7 upon final delivery of
              the agreed deliverable (Blueprint or pull request, as applicable).
            </p>
            <p>
              Invoices unpaid beyond net-7 terms may result in suspension of
              deliverables. Discovery sprint fees are non-refundable once
              analysis has commenced. Integration fees are non-refundable once
              code generation has commenced, except as provided under Section 4
              (Blueprint Rejection).
            </p>
            <p>
              All fees are in USD. We do not accept equity, deferred payment,
              or contingency arrangements.
            </p>
          </section>

          {/* 3. IP Ownership */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3. Intellectual Property
            </h2>
            <p>
              Upon full payment, all code, documents, and other deliverables
              produced under an engagement become the exclusive property of the
              client. The Company retains no ownership interest in, and claims
              no license to, any generated code, Blueprint documents, or
              architectural analyses delivered to the client.
            </p>
            <p>
              The client retains full ownership of their pre-existing codebase,
              data, and intellectual property at all times. Nothing in these
              Terms grants the Company any ownership rights in the client&apos;s
              repository or business logic.
            </p>
            <p>
              The Company retains ownership of its own tooling, methodologies,
              and internal processes used to perform the Services, none of which
              are delivered to the client as part of the engagement.
            </p>
          </section>

          {/* 4. Blueprint Rejection */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              4. Blueprint Rejection
            </h2>
            <p>
              Following delivery of a Blueprint, the client has a review window
              (standard: five business days, adjustable by agreement) to accept,
              request revisions, or reject the Blueprint. If the client rejects
              the Blueprint in writing within the review window, the engagement
              closes and no further work proceeds. The discovery sprint fee is
              retained by the Company; no integration fee is owed or will be
              invoiced.
            </p>
          </section>

          {/* 5. Confidentiality */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. Confidentiality
            </h2>
            <p>
              The Company treats all client repository contents, architecture
              details, business logic, and engagement-related communications as
              strictly confidential. We will not disclose, share, publish,
              or use client repository contents for any purpose other than
              delivering the agreed Services.
            </p>
            <p>
              Repository contents and any copies thereof are deleted from
              Company systems within 14 days of engagement close. The Company
              does not retain code samples, architecture diagrams, or other
              client-specific materials after this period.
            </p>
            <p>
              These confidentiality obligations survive termination of the
              engagement indefinitely. The Company will execute a separate
              mutual NDA upon client request at no additional cost.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, the
              Company&apos;s total liability for any claim arising out of or
              related to an engagement — whether in contract, tort, or
              otherwise — is capped at the total fees paid by the client for
              that specific engagement.
            </p>
            <p>
              The Company is not liable for any indirect, incidental, special,
              consequential, or punitive damages, including lost profits, lost
              data, or business interruption, even if advised of the possibility
              of such damages.
            </p>
            <p>
              The Company does not guarantee that generated code will be
              free of defects beyond the compile verification described in the
              engagement scope. Client is responsible for testing, reviewing,
              and approving all deliverables before deployment to production
              systems.
            </p>
          </section>

          {/* 7. Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              7. Governing Law
            </h2>
            <p>
              These Terms and any disputes arising from or related to an
              engagement are governed by the laws of the State of Texas, without
              regard to conflict of law principles. Any legal action or
              proceeding shall be brought exclusively in the state or federal
              courts located in Texas, and the parties consent to the personal
              jurisdiction of such courts.
            </p>
          </section>

          {/* 8. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              8. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. The version in effect
              at the time an engagement is confirmed governs that engagement.
              Material changes will be communicated via the contact email on
              file.
            </p>
          </section>

          {/* Contact */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 mt-12">
            <p className="text-sm text-slate-400 leading-relaxed">
              Questions about these Terms?{" "}
              <a
                href="mailto:ghostfoundrysyndicate@outlook.com"
                className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
              >
                ghostfoundrysyndicate@outlook.com
              </a>
            </p>
          </div>
        </div>
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
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/transmute/terms"
              className="text-slate-400 hover:text-slate-300 transition-colors"
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
