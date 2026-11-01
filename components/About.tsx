import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function About() {
  const { profile, stats } = portfolio;
  return (
    <Section id="about" eyebrow="About me" title="Engineering reliable systems for finance & beyond">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg" data-reveal>
          {profile.summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <dl className="grid grid-cols-2 gap-4 self-start" data-reveal>
          {stats.map((s) => (
            <div key={s.label} className="card flex flex-col-reverse p-5 transition hover:-translate-y-1">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-bold text-gradient">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
