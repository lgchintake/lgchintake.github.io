import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import Section from "./Section";
import CertificateModal from "./CertificateModal";
import { portfolio } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified credentials">
      <div className="space-y-6">
        {portfolio.certifications.map((c) => (
          <article key={c.credentialId} data-reveal className="card grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1.2fr] md:items-center">
            <CertificateModal image={c.image} alt={c.imageAlt} title={c.name} />
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                <Award className="h-4 w-4 text-accent-2" aria-hidden="true" />
                {c.issuer}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{c.name}</h3>
              <p className="mt-2 font-mono text-sm text-muted">
                Credential ID: <span className="text-fg">{c.credentialId}</span>
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.topics.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-btn px-5 py-2.5 text-sm font-medium text-white transition hover:bg-btn-hover"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Verify credential
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
