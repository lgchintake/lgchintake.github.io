import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background" className="bg-bg-elevated">
      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.education.map((e) => (
          <article key={e.degree} data-reveal className="card flex gap-5 p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">
                {e.degree} <span className="font-normal text-muted">· {e.field}</span>
              </h3>
              <p className="mt-1 text-accent">{e.school}</p>
              <p className="mt-2 font-mono text-xs text-muted">
                {e.start} – {e.end} · {e.location}
                {e.grade && ` · ${e.grade}`}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
