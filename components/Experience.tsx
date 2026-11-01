import { Briefcase } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={`${portfolio.profile.yearsOfExperience} years of building and leading`}
      intro="From full-stack engineer to Technical Lead — delivering fintech, energy and enterprise platforms."
    >
      <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
        {portfolio.experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="relative" data-reveal>
            <span
              aria-hidden="true"
              className="absolute top-1 -left-[2.6rem] grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-accent sm:-left-[3.1rem]"
            >
              <Briefcase className="h-4 w-4" />
            </span>
            <article className="card p-6 sm:p-8">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 font-medium text-accent">
                    {job.company}
                    {job.location && <span className="text-muted"> · {job.location}</span>}
                  </p>
                </div>
                <p className="shrink-0 rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
                  <time>{job.start}</time> – <time>{job.end}</time>
                </p>
              </header>
              {job.summary && <p className="mt-4 text-muted">{job.summary}</p>}
              <ul className="mt-5 space-y-3">
                {job.highlights.map((h) => (
                  <li key={h.text} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                    <span>
                      {h.title && <strong className="font-semibold text-fg">{h.title}: </strong>}
                      {h.text}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {job.tags.map((t) => (
                  <li key={t} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-fg/80">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
