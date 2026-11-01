/* eslint-disable @next/next/no-img-element -- static export: plain <img> is intentional */
import { ArrowRight, BadgeCheck, Download, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SocialGlyph } from "./Icons";

export default function Hero() {
  const { profile, resume, socials } = portfolio;
  const photo = profile.photo || "/images/profile-placeholder.svg";

  return (
    <section id="top" aria-labelledby="hero-title" className="hero-bg relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <div className="order-2 lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-sm text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-fg/90 sm:text-xl">{profile.title}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {profile.roles.map((r) => (
              <li key={r} className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-fg/90">
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={resume.path}
              download={resume.fileName}
              className="inline-flex items-center gap-2 rounded-full bg-btn px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-btn-hover"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-medium transition hover:border-accent hover:text-accent"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socials
              .filter((s) => s.icon === "github" || s.icon === "linkedin" || s.icon === "mail")
              .map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                >
                  <SocialGlyph icon={s.icon} className="h-5 w-5" />
                </a>
              ))}
            <span className="ml-2 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[18rem] sm:max-w-xs lg:order-2 lg:max-w-sm">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/40 via-transparent to-cyan-400/40 blur-2xl"
            />
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-indigo-500 to-cyan-400 p-[3px]">
              <img
                src={photo}
                alt={profile.photoAlt}
                width={480}
                height={600}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full rounded-[1.6rem] bg-surface object-cover"
                style={{ objectPosition: profile.photoPosition }}
              />
            </div>
            <div className="card absolute -bottom-5 -left-4 flex items-center gap-2 px-4 py-3 text-sm sm:-left-8">
              <BadgeCheck className="h-5 w-5 text-accent-2" aria-hidden="true" />
              <span className="font-medium">Certified Blockchain Architect</span>
            </div>
            <div className="card absolute -top-4 -right-3 px-4 py-3 text-center sm:-right-6">
              <p className="text-2xl font-bold text-gradient">{profile.yearsOfExperience}+</p>
              <p className="text-xs text-muted">years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
