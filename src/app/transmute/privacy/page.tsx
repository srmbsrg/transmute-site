import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Transmute",
  description:
    "Privacy Policy for Transmute managed .NET AI integration services by Spooky Software Syndicate.",
};

export default function PrivacyPage() {
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
          <span className="text-slate-400">privacy</span>
        </div>

        <h1 className="text-4xl font-bold text-white tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          Last updated: April 2026
        </p>

        <div className="prose-dark space-y-10">
          {/* 1. What We Collect */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              1. What We Collect
            </h2>
            <p>
              We collect only the minimum information necessary to deliver our
              Services:
            </p>
            <ul>
              <li>
                <strong>Contact information</strong> — your name, email address,
                and company name, provided by you when initiating an engagement
                or making an inquiry.
              </li>
              <li>
                <strong>Repository access</strong> — read-only access to your
                code repository, granted by you for the purpose of performing
                analysis. We do not retain write access at any stage.
              </li>
              <li>
                <strong>Engagement communications</strong> — emails and messages
                exchanged during the course of an engagement, retained for
                engagement continuity and dispute resolution.
              </li>
            </ul>
            <p>
              We do not collect browsing data, analytics, cookies, or any
              tracking information from this website beyond standard server
              logs (IP address, request path, timestamp) retained for security
              purposes.
            </p>
          </section>

          {/* 2. How We Use It */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              Information we collect is used solely to deliver the Services
              you have engaged us to perform:
            </p>
            <ul>
              <li>
                Repository contents are used exclusively for architecture
                analysis, Blueprint production, and code generation within
                your engagement scope.
              </li>
              <li>
                Contact information is used to communicate about your
                engagement, send invoices, and respond to inquiries.
              </li>
              <li>
                We do not use your information for marketing, advertising,
                product development, model training, or any purpose unrelated
                to your specific engagement.
              </li>
            </ul>
          </section>

          {/* 3. We Don't Sell Data */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3. We Do Not Sell Your Data
            </h2>
            <p>
              We do not sell, rent, license, or otherwise transfer your personal
              information or repository contents to any third party, for any
              purpose, at any time.
            </p>
            <p>
              We do not share your information with advertising networks,
              data brokers, or analytics platforms. We do not use your
              codebase or business logic to train AI models — our own or
              anyone else&apos;s.
            </p>
          </section>

          {/* 4. Repository Deletion */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              4. Repository Deletion
            </h2>
            <p>
              All copies of your repository and any derived artifacts
              (analysis outputs, intermediate files, generated code drafts)
              are deleted from Company systems within 14 days of engagement
              close. &quot;Engagement close&quot; means the date of final
              deliverable acceptance, Blueprint rejection, or mutual agreement
              to terminate — whichever occurs first.
            </p>
            <p>
              We do not maintain archives, backups, or samples of client
              repository contents after this deletion window. Engagement
              communications (email) may be retained for up to 24 months
              for legal and dispute resolution purposes.
            </p>
          </section>

          {/* 5. Third-Party Services */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. Third-Party Services
            </h2>
            <p>
              We use a limited set of third-party services to operate our
              business (email hosting, payment processing). These providers
              are contractually prohibited from using your data for any purpose
              other than providing services to us. We do not share repository
              contents or detailed client information with any third-party
              service provider.
            </p>
          </section>

          {/* 6. Data Requests */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              6. Data Requests and Your Rights
            </h2>
            <p>
              You may request a summary of the information we hold about you,
              request correction of inaccurate information, or request early
              deletion of your data at any time by contacting us at{" "}
              <a
                href="mailto:ghostfoundrysyndicate@outlook.com"
                className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
              >
                ghostfoundrysyndicate@outlook.com
              </a>
              .
            </p>
            <p>
              We will respond to data requests within 10 business days. We
              do not charge a fee for reasonable data requests.
            </p>
          </section>

          {/* 7. Security */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              7. Security
            </h2>
            <p>
              Repository access is handled over encrypted connections. We do
              not store repository credentials beyond the duration of active
              analysis. In the event of a security incident affecting client
              data, we will notify affected clients within 72 hours of
              discovering the incident.
            </p>
          </section>

          {/* 8. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be communicated to active clients via email.
              The current version is always available at this URL.
            </p>
          </section>

          {/* Contact */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 mt-12">
            <p className="text-sm text-slate-400 leading-relaxed">
              Privacy questions or data requests:{" "}
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
              className="hover:text-slate-300 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/transmute/privacy"
              className="text-slate-400 hover:text-slate-300 transition-colors"
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
