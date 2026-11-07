import { Download, Send } from "lucide-react";
import Section from "./Section";
import { SocialGlyph } from "./Icons";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const { socials, profile, resume } = portfolio;
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something reliable together">
      <div className="card relative overflow-hidden p-8 sm:p-12" data-reveal>
        <div aria-hidden="true" className="hero-bg absolute inset-0 opacity-70" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              Hiring for a Technical Lead, senior Java backend or blockchain role — or need help architecting a fintech
              platform? I&apos;d love to hear from you.
            </p>
            <p>Available within 30 days · Open to relocate to the UAE (Dubai / Abu Dhabi) · Video interviews available</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for " + profile.name)}`}
                className="inline-flex items-center gap-2 rounded-full bg-btn px-6 py-3 font-medium text-white transition hover:bg-btn-hover"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Email me
              </a>
              <a
                href={resume.path}
                download={resume.fileName}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 font-medium transition hover:border-accent hover:text-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {socials.map((s) => {
              const external = s.url.startsWith("http");
              return (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-accent"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-2 text-accent">
                      <SocialGlyph icon={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{s.label}</span>
                      <span className="block truncate text-sm font-medium">{s.display}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
