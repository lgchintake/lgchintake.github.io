/* eslint-disable @next/next/no-img-element -- static export: plain <img> is intentional */
import { ChevronDown, ExternalLink } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="Highlights from fintech and blockchain platforms I have architected and led. Client details are kept generic."
      className="bg-bg-elevated"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.projects.map((p) => (
          <article key={p.title} data-reveal className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-line-strong">
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.imageAlt}
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 font-mono text-xs text-white backdrop-blur">
                {p.domain}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-xs text-muted">
                {p.subtitle} · <time>{p.date}</time>
              </p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.summary}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[0.72rem] text-fg/85">
                    {s}
                  </li>
                ))}
              </ul>

              <details className="group/d mt-6 border-t border-line pt-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-accent [&::-webkit-details-marker]:hidden">
                  Key responsibilities
                  <ChevronDown className="h-4 w-4 transition group-open/d:rotate-180" aria-hidden="true" />
                </summary>
                <ul className="mt-4 space-y-3">
                  {p.responsibilities.map((r) => (
                    <li key={r.text} className="text-sm leading-relaxed text-muted">
                      {r.title && <strong className="font-semibold text-fg">{r.title}: </strong>}
                      {r.text}
                    </li>
                  ))}
                </ul>
              </details>

              {p.links && p.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      {l.label}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
