import { Blocks, Code2, Layers, Server, Wrench } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

const icons = [Code2, Layers, Server, Wrench, Blocks];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      intro="A backend-first stack centred on Java and Spring, with deep blockchain expertise and full-stack range."
      className="bg-bg-elevated"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          const wide = group.skills.length > 12;
          return (
            <article
              key={group.name}
              data-reveal
              className={`card p-6 transition hover:border-line-strong ${wide ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {group.name}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[0.8rem] text-fg/90 transition hover:border-accent hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
