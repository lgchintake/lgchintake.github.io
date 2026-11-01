import { portfolio } from "@/data/portfolio";
import { SocialGlyph } from "./Icons";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

export default function Footer() {
  const { profile, resume, socials } = portfolio;
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}.{" "}
          <a href={resume.path} download={resume.fileName} className="underline-offset-4 hover:text-accent hover:underline">
            Resume
          </a>{" "}
          updated <time dateTime={resume.updated}>{formatDate(resume.updated)}</time>.
        </p>
        <ul className="flex items-center gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line transition hover:border-accent hover:text-accent"
              >
                <SocialGlyph icon={s.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
