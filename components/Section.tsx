import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="mb-12 max-w-2xl" data-reveal>
          <p className="font-mono text-sm tracking-wider text-accent-2 uppercase">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
